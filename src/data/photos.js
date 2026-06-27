// Curated photo collection with Unsplash images
// Each photo includes dimensions for React Photo Album layout optimization

const photos = [
  // LANDSCAPE
  {
    src: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1200&h=800&fit=crop',
    width: 1200,
    height: 800,
    title: 'Alpine Majesty',
    category: 'landscape',
  },
  {
    src: 'https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?w=1200&h=800&fit=crop',
    width: 1200,
    height: 800,
    title: 'Misty Valleys',
    category: 'landscape',
  },
  {
    src: 'https://images.unsplash.com/photo-1472214103451-9374bd1c798e?w=800&h=1200&fit=crop',
    width: 800,
    height: 1200,
    title: 'Golden Meadow',
    category: 'landscape',
  },
  {
    src: 'https://images.unsplash.com/photo-1469474968028-56623f02e42e?w=1200&h=800&fit=crop',
    width: 1200,
    height: 800,
    title: 'Sunlit Ridge',
    category: 'landscape',
  },
  {
    src: 'https://images.unsplash.com/photo-1501785888041-af3ef285b470?w=1200&h=750&fit=crop',
    width: 1200,
    height: 750,
    title: 'Lake Reflections',
    category: 'landscape',
  },

  // PORTRAIT
  {
    src: 'https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?w=800&h=1200&fit=crop',
    width: 800,
    height: 1200,
    title: 'Golden Light',
    category: 'portrait',
  },
  {
    src: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=800&h=1100&fit=crop',
    width: 800,
    height: 1100,
    title: 'Natural Beauty',
    category: 'portrait',
  },
  {
    src: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=800&h=1200&fit=crop',
    width: 800,
    height: 1200,
    title: 'Character Study',
    category: 'portrait',
  },
  {
    src: 'https://images.unsplash.com/photo-1524504388940-b1c1722653e1?w=800&h=1100&fit=crop',
    width: 800,
    height: 1100,
    title: 'Urban Elegance',
    category: 'portrait',
  },
  {
    src: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?w=800&h=1200&fit=crop',
    width: 800,
    height: 1200,
    title: 'Soft Shadows',
    category: 'portrait',
  },

  // STREET
  {
    src: 'https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?w=1200&h=800&fit=crop',
    width: 1200,
    height: 800,
    title: 'City Pulse',
    category: 'street',
  },
  {
    src: 'https://images.unsplash.com/photo-1480714378408-67cf0d13bc1b?w=1200&h=900&fit=crop',
    width: 1200,
    height: 900,
    title: 'Nightfall',
    category: 'street',
  },
  {
    src: 'https://images.unsplash.com/photo-1519501025264-65ba15a82390?w=800&h=1200&fit=crop',
    width: 800,
    height: 1200,
    title: 'Street Stories',
    category: 'street',
  },
  {
    src: 'https://images.unsplash.com/photo-1514565131-fce0801e5785?w=1200&h=800&fit=crop',
    width: 1200,
    height: 800,
    title: 'Crossroads',
    category: 'street',
  },
  {
    src: 'https://images.unsplash.com/photo-1517732306149-e8f829eb588a?w=1000&h=1000&fit=crop',
    width: 1000,
    height: 1000,
    title: 'Urban Geometry',
    category: 'street',
  },

  // ARCHITECTURE
  {
    src: 'https://images.unsplash.com/photo-1511818966892-d7d671e672a2?w=1200&h=800&fit=crop',
    width: 1200,
    height: 800,
    title: 'Steel Curves',
    category: 'architecture',
  },
  {
    src: 'https://images.unsplash.com/photo-1487958449943-2429e8be8625?w=800&h=1200&fit=crop',
    width: 800,
    height: 1200,
    title: 'Glass & Sky',
    category: 'architecture',
  },
  {
    src: 'https://images.unsplash.com/photo-1486325212027-8081e485255e?w=1200&h=800&fit=crop',
    width: 1200,
    height: 800,
    title: 'Modern Lines',
    category: 'architecture',
  },
  {
    src: 'https://images.unsplash.com/photo-1518005020951-eccb494ad742?w=800&h=1200&fit=crop',
    width: 800,
    height: 1200,
    title: 'Monolith',
    category: 'architecture',
  },
  {
    src: 'https://images.unsplash.com/photo-1545558014-8692077e9b5c?w=1200&h=900&fit=crop',
    width: 1200,
    height: 900,
    title: 'Symmetry',
    category: 'architecture',
  },
];

export const categories = ['All', 'Landscape', 'Portrait', 'Street', 'Architecture'];

export default photos;
