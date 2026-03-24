export interface Project {
  id: number;
  title: string;
  category: string;
  image: string;
  gallery: string[];
  year: string;
  description: string;
  fullDescription: string;
  client: string;
  tools: string[];
  featured: boolean;
}

export const PROJECTS: Project[] = [
  {
    id: 1,
    title: 'Coastline Sessions',
    category: 'Short Film',
    image: 'https://images.unsplash.com/photo-1518156677180-95a2893f3e9f?auto=format&fit=crop&q=80&w=1200',
    gallery: [
      'https://images.unsplash.com/photo-1505142468610-359e7d316be0?auto=format&fit=crop&q=80&w=800',
      'https://images.unsplash.com/photo-1471922694854-ff1b63b20054?auto=format&fit=crop&q=80&w=800',
      'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&q=80&w=800',
    ],
    year: '2025',
    description: 'An atmospheric short capturing the Ontario lakefront at dawn.',
    fullDescription: 'A meditative exploration of light and water along the Lake Ontario shoreline. Shot over three consecutive dawns in early spring, the film captures the quiet transformation from darkness to first light. Minimal dialogue, maximum atmosphere — letting the landscape speak for itself through careful composition and natural sound design.',
    client: 'Personal Project',
    tools: ['Sony A7III', 'DJI Ronin RS3', 'DaVinci Resolve', 'Rode NTG5'],
    featured: true,
  },
  {
    id: 2,
    title: 'Paston Arts Festival',
    category: 'Event Coverage',
    image: 'https://images.unsplash.com/photo-1492684223066-81342ee5ff30?auto=format&fit=crop&q=80&w=1200',
    gallery: [
      'https://images.unsplash.com/photo-1501281668745-f7f57925c3b4?auto=format&fit=crop&q=80&w=800',
      'https://images.unsplash.com/photo-1429962714451-bb934ecdc4ec?auto=format&fit=crop&q=80&w=800',
      'https://images.unsplash.com/photo-1540039155733-5bb30b53aa14?auto=format&fit=crop&q=80&w=800',
    ],
    year: '2024',
    description: 'Multi-camera live event documentation and highlights reel.',
    fullDescription: 'Full event coverage across two days of live music, visual art installations, and performance pieces. Delivered a 3-minute highlights reel within 48 hours of the event, plus 200+ edited photographs for the festival\'s social media and marketing materials. Three-camera setup with wireless audio capture.',
    client: 'Paston Arts Festival',
    tools: ['Sony A7III', 'Sony ZV-E10', 'DJI Mini 3 Pro', 'Premiere Pro'],
    featured: false,
  },
  {
    id: 3,
    title: 'The Golden Hour',
    category: 'Photography',
    image: 'https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?auto=format&fit=crop&q=80&w=1200',
    gallery: [
      'https://images.unsplash.com/photo-1504703395950-b89145a5425b?auto=format&fit=crop&q=80&w=800',
      'https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&q=80&w=800',
      'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&q=80&w=800',
    ],
    year: '2024',
    description: 'Portrait series shot exclusively in golden hour light.',
    fullDescription: 'A portrait series exploring the warmth and texture of natural golden hour light across Hamilton\'s urban landscape. Each subject was photographed in a location meaningful to them, creating an intimate connection between person and place. Shot entirely with natural light and a single 85mm prime lens.',
    client: 'Personal Project',
    tools: ['Sony A7III', '85mm f/1.4', 'Adobe Lightroom'],
    featured: false,
  },
  {
    id: 4,
    title: 'Revive Streetwear',
    category: 'Brand Content',
    image: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&q=80&w=1200',
    gallery: [
      'https://images.unsplash.com/photo-1556906781-9a412961c28c?auto=format&fit=crop&q=80&w=800',
      'https://images.unsplash.com/photo-1523381210434-271e8be1f52b?auto=format&fit=crop&q=80&w=800',
      'https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format&fit=crop&q=80&w=800',
    ],
    year: '2024',
    description: 'Social media content and lookbook for an independent clothing brand.',
    fullDescription: 'Complete visual identity package for Revive Streetwear\'s Spring 2024 collection launch. Delivered 30+ social media assets, a full lookbook, and a 60-second launch video. Content strategy focused on raw, unfiltered street photography that matched the brand\'s authentic urban aesthetic.',
    client: 'Revive Streetwear',
    tools: ['Sony A7III', 'DJI Ronin RS3', 'Premiere Pro', 'Lightroom'],
    featured: false,
  },
  {
    id: 5,
    title: 'Still Standing',
    category: 'Documentary',
    image: 'https://images.unsplash.com/photo-1513828583688-c52646db42da?auto=format&fit=crop&q=80&w=1200',
    gallery: [
      'https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&q=80&w=800',
      'https://images.unsplash.com/photo-1486325212027-8081e485255e?auto=format&fit=crop&q=80&w=800',
      'https://images.unsplash.com/photo-1494145904049-0dca59b4bbad?auto=format&fit=crop&q=80&w=800',
    ],
    year: '2023',
    description: 'A mini-documentary exploring Hamilton\'s industrial architecture.',
    fullDescription: 'An 8-minute documentary examining the forgotten industrial buildings of Hamilton\'s north end. Through interviews with local historians and stunning aerial footage, the film reveals the stories behind the steel mills and warehouses that shaped the city. Selected for screening at the Hamilton Film Festival.',
    client: 'Hamilton Heritage Society',
    tools: ['Sony A7III', 'DJI Mini 3 Pro', 'DaVinci Resolve', 'Rode Wireless GO II'],
    featured: false,
  },
  {
    id: 6,
    title: 'Motion Reel 2025',
    category: 'Showreel',
    image: 'https://images.unsplash.com/photo-1485846234645-a62644f84728?auto=format&fit=crop&q=80&w=1200',
    gallery: [
      'https://images.unsplash.com/photo-1478720568477-152d9b164e26?auto=format&fit=crop&q=80&w=800',
      'https://images.unsplash.com/photo-1440404653325-ab127d49abc1?auto=format&fit=crop&q=80&w=800',
      'https://images.unsplash.com/photo-1524712245354-2c4e5e7121c0?auto=format&fit=crop&q=80&w=800',
    ],
    year: '2025',
    description: 'A compilation of the best motion work from the past year.',
    fullDescription: 'A curated showcase of the strongest motion work from 2024-2025, spanning short films, brand content, event coverage, and experimental pieces. The reel demonstrates range across genres while maintaining a consistent visual language — cinematic framing, intentional colour grading, and story-driven editing.',
    client: 'Personal Project',
    tools: ['Sony A7III', 'DaVinci Resolve', 'After Effects', 'Premiere Pro'],
    featured: false,
  },
];
