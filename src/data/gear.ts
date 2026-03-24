export interface GearItem {
  name: string;
  note: string;
}

export interface GearCategory {
  title: string;
  icon: string;
  items: GearItem[];
}

export const GEAR: GearCategory[] = [
  {
    title: 'Camera & Hardware',
    icon: 'camera',
    items: [
      { name: 'Sony A7III', note: 'Primary camera body' },
      { name: 'Sony ZV-E10', note: 'B-cam & vlog' },
      { name: 'DJI Ronin RS3', note: 'Gimbal stabilizer' },
      { name: 'DJI Mini 3 Pro', note: 'Aerial cinematography' },
      { name: 'Rode Wireless GO II', note: 'Wireless audio' },
      { name: 'Aputure 60D', note: 'LED lighting' },
    ],
  },
  {
    title: 'Software & Post',
    icon: 'monitor',
    items: [
      { name: 'DaVinci Resolve', note: 'Colour grading & edit' },
      { name: 'Adobe Premiere Pro', note: 'Primary NLE' },
      { name: 'Adobe After Effects', note: 'Motion graphics' },
      { name: 'Adobe Lightroom', note: 'Photo editing' },
      { name: 'Figma', note: 'Design & planning' },
      { name: 'Frame.io', note: 'Client review' },
    ],
  },
];
