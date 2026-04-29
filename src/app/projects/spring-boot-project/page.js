import ComingSoon from '@/components/ComingSoon'

const project = {
  num: '09',
  title: 'SPRING BOOT\nAPP',
  category: 'Java / Spring Boot',
  accent: '#6db33f',
  desc: 'A Java Spring Boot backend project currently in development. This page will be updated with full documentation, architecture details, and API design once the project is complete.',
  tags: ['Java', 'Spring Boot', 'Spring Security', 'JPA', 'PostgreSQL', 'REST API'],
}

export default function SpringBootProject() {
  return <ComingSoon project={project} />
}

export const metadata = {
  title: 'Spring Boot Project — Amine Hamdi',
}
