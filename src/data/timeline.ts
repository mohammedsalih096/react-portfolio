import type { TimelineItem } from '../types';

export const timelineData: TimelineItem[] = [
  {
    period: 'NOV 2025 — PRESENT',
    title: 'Web Developer',
    company: 'MSH Alquraish',
    location: 'Dammam, Saudi Arabia',
    description: 'Developing and delivering websites for business use.',
    icon: 'work',
    projects: [
      { title: 'Food Palace', href: 'https://foodpalace.org/' },
      { title: 'Rehaz Resort', href: 'https://rehazresort.netlify.app/' },
    ],
  },
  {
    period: 'AUG 2026 — OCT 2026',
    title: 'Web Developer',
    company: 'OnePage',
    type: 'Three-month contract',
    description: "Contributed to the development of the Medera website on a contract basis.",
    icon: 'work',
    projects: [{ title: 'Medera', href: 'https://medera.sa/' }],
  },
  {
    period: '2024 — 2025',
    title: 'Jr Software Engineer',
    company: 'Infoline Technologies',
    description: 'Software development with Angular, NestJS and PostgreSQL.',
    icon: 'work',
    projects: [{ title: 'Infer', href: 'https://demo.infolinetech.in/admin/survey-builder/web/44/survey-explorer/questions/Q1' }],
  },
  {
    period: '2023 — 2024',
    title: 'Flutter Developer',
    company: 'Progbiz Pvt. Ltd.',
    description: 'Mobile application development with Flutter.',
    icon: 'work',
    projects: [
      { title: 'Sunstar Movers', href: 'https://play.google.com/store/apps/details?id=io.progbiz.sunstarmovers&pcampaignid=web_share' },
      { title: 'KE Unplugged', href: 'https://play.google.com/store/apps/details?id=com.infolinetech.base_app.base_app' },
    ],
  },
  {
    period: '2019 — 2023',
    title: 'Bachelor of Technology in Computer Science',
    company: 'APJ Abdul Kalam Technological University',
    description: 'Undergraduate studies in computer science and programming.',
    icon: 'education',
  },
];
