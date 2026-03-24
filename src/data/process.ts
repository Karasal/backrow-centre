export interface ProcessStep {
  number: string;
  title: string;
  description: string;
  icon: string;
}

export const PROCESS_STEPS: ProcessStep[] = [
  {
    number: '01',
    title: 'Discover',
    description: 'Every project starts with listening. I learn your brand, your vision, your audience — so the final product feels unmistakably yours.',
    icon: 'search',
  },
  {
    number: '02',
    title: 'Plan',
    description: 'Storyboarding, shot lists, locations, logistics. Nothing is left to chance. Detailed pre-production means efficient shoots and better results.',
    icon: 'clipboard',
  },
  {
    number: '03',
    title: 'Create',
    description: 'Lights, camera, action. Whether it\'s a one-day shoot or a week-long production, I bring the energy, the gear, and the creative instinct.',
    icon: 'camera',
  },
  {
    number: '04',
    title: 'Deliver',
    description: 'Editing, colour grading, sound design, and final delivery. Revisions are part of the process — we refine until it\'s exactly right.',
    icon: 'package',
  },
];
