import ComingSoon from '@/components/ComingSoon'

const project = {
  num: '08',
  title: 'ANGULAR\nAPP II',
  category: 'Angular Project',
  accent: '#dd0031',
  desc: 'A second Angular application currently under development. Full case study including architecture decisions, features, and learnings will be published here soon.',
  tags: ['Angular', 'TypeScript', 'NgRx', 'REST API'],
}

export default function AngularProject2() {
  return <ComingSoon project={project} />
}

export const metadata = {
  title: 'Angular Project II — Amine Hamdi',
}
