export interface Project {
  id: number;
  title: string;
  category: string;
  image: string;
  year: string;
  description: string;
}

export const PROJECTS: Project[] = [
  {
    id: 1,
    title: 'Coastline Sessions',
    category: 'Short Film',
    image: 'https://images.unsplash.com/photo-1505118380757-91f5816fff30?auto=format&fit=crop&q=80&w=1200',
    year: '2025',
    description: 'An atmospheric short capturing the Norfolk coastline at dawn.',
  },
  {
    id: 2,
    title: 'Paston Arts Festival',
    category: 'Event Coverage',
    image: 'https://images.unsplash.com/photo-1492684223066-81342ee5ff30?auto=format&fit=crop&q=80&w=1200',
    year: '2024',
    description: 'Multi-camera live event documentation and highlights reel.',
  },
  {
    id: 3,
    title: 'The Golden Hour',
    category: 'Photography',
    image: 'https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?auto=format&fit=crop&q=80&w=1200',
    year: '2024',
    description: 'Portrait series shot exclusively in golden hour light.',
  },
  {
    id: 4,
    title: 'Revive Streetwear',
    category: 'Brand Content',
    image: 'https://images.unsplash.com/photo-1558618666-fcd25c85f82e?auto=format&fit=crop&q=80&w=1200',
    year: '2024',
    description: 'Social media content and lookbook for an independent clothing brand.',
  },
  {
    id: 5,
    title: 'Still Standing',
    category: 'Documentary',
    image: 'https://images.unsplash.com/photo-1523413651479-597eb2da0ad6?auto=format&fit=crop&q=80&w=1200',
    year: '2023',
    description: 'A mini-documentary exploring forgotten Norfolk architecture.',
  },
  {
    id: 6,
    title: 'Motion Reel 2025',
    category: 'Showreel',
    image: 'https://images.unsplash.com/photo-1485846234645-a62644f84728?auto=format&fit=crop&q=80&w=1200',
    year: '2025',
    description: 'A compilation of the best motion work from the past year.',
  },
];
