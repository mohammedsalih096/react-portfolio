'use client';

import { useEffect, useRef } from 'react';
import { useReducedMotion } from 'motion/react';

type Point = { x: number; y: number; z: number };

export default function NetworkGlobe() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const reduceMotion = useReducedMotion();

  useEffect(() => {
    const canvas = canvasRef.current;
    const context = canvas?.getContext('2d');
    if (!canvas || !context) return;

    let width = 0;
    let height = 0;
    let frame = 0;
    let pixelRatio = 1;
    const nodeCount = 260;
    const meshNodes: Point[] = Array.from({ length: nodeCount }, (_, index) => {
      const y = 1 - 2 * (index + .5) / nodeCount;
      const ring = Math.sqrt(1 - y * y);
      const angle = index * 2.399963229728653;
      return { x: Math.cos(angle) * ring, y, z: Math.sin(angle) * ring };
    });
    const meshEdges: [number, number][] = [];
    for (let first = 0; first < nodeCount; first++) {
      for (let second = first + 1; second < nodeCount; second++) {
        const dx = meshNodes[first].x - meshNodes[second].x;
        const dy = meshNodes[first].y - meshNodes[second].y;
        const dz = meshNodes[first].z - meshNodes[second].z;
        if (dx * dx + dy * dy + dz * dz < .074) meshEdges.push([first, second]);
      }
    }

    const resize = () => {
      const bounds = canvas.getBoundingClientRect();
      width = bounds.width;
      height = bounds.height;
      pixelRatio = Math.min(window.devicePixelRatio || 1, 2);
      canvas.width = Math.round(width * pixelRatio);
      canvas.height = Math.round(height * pixelRatio);
      context.setTransform(pixelRatio, 0, 0, pixelRatio, 0, 0);
    };

    const project = (latitude: number, longitude: number, rotation: number, radius: number, cx: number, cy: number): Point => {
      const lat = latitude * Math.PI / 180;
      const lon = longitude * Math.PI / 180 + rotation;
      const x = Math.cos(lat) * Math.sin(lon);
      const y = Math.sin(lat);
      const z = Math.cos(lat) * Math.cos(lon);
      return { x: cx + x * radius, y: cy - y * radius, z };
    };

    const draw = (now: number) => {
      context.clearRect(0, 0, width, height);
      if (!width || !height) return;

      const cx = width * .5;
      const cy = height * .51;
      const radius = Math.min(width, height) * .315;
      const rotation = reduceMotion ? -.2 : now * .00016;

      const halo = context.createRadialGradient(cx, cy, radius * .55, cx, cy, radius * 1.5);
      halo.addColorStop(0, 'rgba(255, 177, 65, .15)');
      halo.addColorStop(.62, 'rgba(241, 124, 47, .07)');
      halo.addColorStop(1, 'rgba(241, 124, 47, 0)');
      context.fillStyle = halo;
      context.beginPath();
      context.arc(cx, cy, radius * 1.5, 0, Math.PI * 2);
      context.fill();

      context.save();
      context.translate(cx, cy);
      context.strokeStyle = 'rgba(220, 197, 159, .23)';
      context.lineWidth = .7;
      context.setLineDash([2, 6]);
      context.beginPath();
      context.ellipse(0, 0, radius * 1.48, radius * .42, -.24 + Math.sin(now * .00012) * .08, 0, Math.PI * 2);
      context.stroke();
      context.setLineDash([]);
      context.strokeStyle = 'rgba(243, 167, 63, .2)';
      context.beginPath();
      context.ellipse(0, 0, radius * 1.27, radius * .55, .78, 0, Math.PI * 2);
      context.stroke();
      context.restore();

      const drawMeridian = (longitude: number) => {
        context.beginPath();
        let drawing = false;
        for (let latitude = -84; latitude <= 84; latitude += 3) {
          const point = project(latitude, longitude, rotation, radius, cx, cy);
          if (point.z > -.04) {
            if (drawing) context.lineTo(point.x, point.y);
            else context.moveTo(point.x, point.y);
            drawing = true;
          } else drawing = false;
        }
        context.stroke();
      };

      const drawLatitude = (latitude: number) => {
        context.beginPath();
        let drawing = false;
        for (let longitude = -180; longitude <= 180; longitude += 3) {
          const point = project(latitude, longitude, rotation, radius, cx, cy);
          if (point.z > -.04) {
            if (drawing) context.lineTo(point.x, point.y);
            else context.moveTo(point.x, point.y);
            drawing = true;
          } else drawing = false;
        }
        context.stroke();
      };

      context.lineWidth = .75;
      for (let latitude = -75; latitude <= 75; latitude += 15) {
        context.strokeStyle = `rgba(255, 218, 164, ${.025 + (1 - Math.abs(latitude) / 100) * .025})`;
        drawLatitude(latitude);
      }
      for (let longitude = 0; longitude < 180; longitude += 30) {
        context.strokeStyle = 'rgba(255, 221, 177, .04)';
        drawMeridian(longitude);
        drawMeridian(longitude + 180);
      }

      const projectedNodes = meshNodes.map((node) => {
        const x = node.x * Math.cos(rotation) + node.z * Math.sin(rotation);
        const z = -node.x * Math.sin(rotation) + node.z * Math.cos(rotation);
        return { x: cx + x * radius, y: cy - node.y * radius, z };
      });
      for (const [startIndex, endIndex] of meshEdges) {
        const start = projectedNodes[startIndex];
        const end = projectedNodes[endIndex];
        const depth = (start.z + end.z) * .5;
        if (depth < -.58) continue;
        context.beginPath();
        context.strokeStyle = `rgba(255, 225, 184, ${depth > 0 ? .28 + depth * .42 : .035})`;
        context.lineWidth = depth > .45 ? .9 : .72;
        context.moveTo(start.x, start.y);
        context.lineTo(end.x, end.y);
        context.stroke();
      }

      for (let index = 0; index < projectedNodes.length; index++) {
        const point = projectedNodes[index];
        if (point.z < -.38) continue;
        const twinkle = .55 + .45 * Math.sin(now * .002 + index * 1.7);
        const bright = index % 21 === 0;
        context.beginPath();
        context.fillStyle = bright ? `rgba(255, 205, 79, ${.68 + twinkle * .32})` : `rgba(255, 241, 220, ${.2 + Math.max(0, point.z) * .6})`;
        if (bright) {
          context.shadowBlur = 11 * twinkle;
          context.shadowColor = '#ffbd43';
        }
        context.arc(point.x, point.y, bright ? 1.8 : .78, 0, Math.PI * 2);
        context.fill();
        context.shadowBlur = 0;
      }

      context.beginPath();
      context.arc(cx, cy, radius, 0, Math.PI * 2);
      context.strokeStyle = 'rgba(255, 188, 101, .42)';
      context.lineWidth = 1.1;
      context.shadowBlur = 18;
      context.shadowColor = 'rgba(255, 158, 58, .52)';
      context.stroke();
      context.shadowBlur = 0;

      for (let index = 0; index < 36; index++) {
        const angle = index * 2.399;
        const distance = radius * (.83 + ((index * 17) % 19) / 100);
        const x = cx + Math.cos(angle) * distance;
        const y = cy + Math.sin(angle) * distance;
        const sparkle = .25 + .55 * (.5 + .5 * Math.sin(now * .0015 + index * 2.1));
        context.beginPath();
        context.fillStyle = `rgba(255, 199, 85, ${sparkle})`;
        context.arc(x, y, index % 6 === 0 ? 1.35 : .65, 0, Math.PI * 2);
        context.fill();
      }

      if (!reduceMotion) frame = window.requestAnimationFrame(draw);
    };

    resize();
    const observer = new ResizeObserver(resize);
    observer.observe(canvas);
    frame = window.requestAnimationFrame(draw);

    return () => {
      window.cancelAnimationFrame(frame);
      observer.disconnect();
    };
  }, [reduceMotion]);

  return <canvas ref={canvasRef} className="network-globe-canvas" aria-hidden="true" />;
}
