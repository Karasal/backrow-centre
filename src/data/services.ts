export interface Service {
  title: string;
  description: string;
  icon: string;
}

export const SERVICES: Service[] = [
  {
    title: 'Video Production',
    description: 'From concept to final cut — short films, promos, and narrative pieces.',
    icon: 'film',
  },
  {
    title: 'Photography',
    description: 'Portraits, events, and editorial shoots with a cinematic eye.',
    icon: 'camera',
  },
  {
    title: 'Social Media Content',
    description: 'Scroll-stopping reels, stories, and visual content for your brand.',
    icon: 'smartphone',
  },
  {
    title: 'Event Coverage',
    description: 'Multi-angle live capture for festivals, launches, and performances.',
    icon: 'video',
  },
  {
    title: 'Brand Films',
    description: 'Telling your brand story through cinematic, emotive filmmaking.',
    icon: 'clapperboard',
  },
  {
    title: 'Post-Production',
    description: 'Colour grading, editing, and sound design that elevates raw footage.',
    icon: 'sliders',
  },
];
