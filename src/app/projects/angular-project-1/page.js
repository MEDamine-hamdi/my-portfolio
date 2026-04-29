import ComingSoon from '@/components/ComingSoon'

const project = {
  num: '07',
  title: 'ANGULAR\nAPP I',
  category: 'Angular Project',
  accent: '#dd0031',
  desc: 'An upcoming project built with Angular. Details and full documentation will be added once development is complete. Stay tuned.',
  tags: ['Angular', 'TypeScript', 'RxJS', 'Angular Material'],
}

export default function AngularProject1() {
  return <ComingSoon project={project} />
}

export const metadata = {
  title: 'Angular Project — Amine Hamdi',
}
