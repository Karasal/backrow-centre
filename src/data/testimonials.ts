export interface Testimonial {
  quote: string;
  author: string;
  role: string;
  rating: number;
}

export const TESTIMONIALS: Testimonial[] = [
  {
    quote: "Nathan brought our brand vision to life. His eye for detail and ability to capture the right moments made all the difference.",
    author: 'Sarah Mitchell',
    role: 'Creative Director, Revive Streetwear',
    rating: 5,
  },
  {
    quote: "Professional, creative, and genuinely easy to work with. The event coverage exceeded our expectations — delivered within 48 hours.",
    author: 'James Hartley',
    role: 'Events Manager, Paston Arts Festival',
    rating: 5,
  },
  {
    quote: "We needed content that felt authentic, not corporate. Nathan nailed it on the first take. Our social engagement doubled in the first month.",
    author: 'Maya Chen',
    role: 'Marketing Lead, Drift Coffee Co.',
    rating: 5,
  },
  {
    quote: "The documentary he made for us has become our most powerful fundraising tool. Nathan understands story on a deeper level.",
    author: 'David Park',
    role: 'Director, Hamilton Heritage Society',
    rating: 5,
  },
  {
    quote: "Fast, reliable, and the quality is consistently incredible. He's our go-to for anything visual. Can't recommend enough.",
    author: 'Lauren Brooks',
    role: 'Founder, Bloom Studio',
    rating: 5,
  },
];
