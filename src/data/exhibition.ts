export type ArtworkCategory = 'All' | 'Painting' | 'Sculpture' | 'Textiles & Tiles'

export type Artwork = {
  id: string
  title: string
  category: Exclude<ArtworkCategory, 'All'>
  description: string
  image: string
  votes: number
  hashtag: string
}

export const accentColor = '#463d28'

export const categories: ArtworkCategory[] = [
  'All',
  'Painting',
  'Sculpture',
  'Textiles & Tiles',
]

export const heroStats = [
  {
    label: 'Exhibition',
    value: '8 Distinct Cultures Represented',
  },
  {
    label: 'Impact',
    value: 'Juried by the Community',
  },
] as const

export const participationSteps = [
  {
    title: 'Unique Identity',
    description:
      'Every artwork is assigned a unique social media hashtag for official tracking.',
  },
  {
    title: 'Digital Ballot',
    description:
      'Click the "Cast Vote" button below your favorite artwork to open the secure ballot.',
  },
  {
    title: 'Instant Impact',
    description:
      'Your support directly influences the final community rankings in December.',
  },
] as const

export const artworks: Artwork[] = [
  {
    id: '001',
    title: 'Benin Bronze Heritage',
    category: 'Sculpture',
    description:
      'A 16th-century brass plaque from the Kingdom of Benin, showcasing the intricate lost-wax casting technique.',
    image: '/img/benin-bronze.avif',
    votes: 238,
    hashtag: '#BeninBronzeHeritage',
  },
  {
    id: '002',
    title: 'Edo Period Woodblock',
    category: 'Painting',
    description:
      'Classic Japanese Ukiyo-e art featuring the distinctive flat color planes and bold outlines of the 19th century.',
    image: '/img/edo-period.webp',
    votes: 120,
    hashtag: '#EdoPeriodWoodblock',
  },
  {
    id: '003',
    title: 'Central Desert Dot Art',
    category: 'Painting',
    description:
      "Traditional Australian Aboriginal painting style using acrylic on canvas to map sacred 'Dreaming' stories.",
    image: '/img/central-desert.jpeg',
    votes: 200,
    hashtag: '#CentralDesertDotArt',
  },
  {
    id: '004',
    title: 'Moroccan Zellige',
    category: 'Textiles & Tiles',
    description:
      'Intricate Islamic geometric terra-cotta tilework, hand-chiseled into radiant stars and polygons.',
    image: '/img/moroccan-zellige.webp',
    votes: 176,
    hashtag: '#MoroccanZellige',
  },
  {
    id: '005',
    title: 'Quechua Textile Art',
    category: 'Textiles & Tiles',
    description:
      'Hand-loomed Peruvian textile using natural cochineal dyes and ancient geometric symbolism from the Andes.',
    image: '/img/quechua-textile-art.webp',
    votes: 96,
    hashtag: '#QuechuaTextileArt',
  },
  {
    id: '006',
    title: 'Vatican Style Fresco',
    category: 'Painting',
    description:
      'A Renaissance-era mural focusing on humanistic realism, anatomical precision, and depth-focused perspective.',
    image: '/img/vatican-style-fresco.jpg',
    votes: 62,
    hashtag: '#VaticanStyleFresco',
  },
  {
    id: '007',
    title: 'Maya Stela Carving',
    category: 'Sculpture',
    description:
      'A monumental Mesoamerican stone carving depicting a divine ruler in elaborate ceremonial regalia.',
    image: '/img/maya-stela-carving.webp',
    votes: 145,
    hashtag: '#MayaStelaCarving',
  },
  {
    id: '008',
    title: 'Sino-Ink Scroll',
    category: 'Painting',
    description:
      "Classic East Asian landscape painting using black ink on silk, emphasizing the 'spirit resonance' of the brushstroke.",
    image: '/img/sino-ink-scroll.jpeg',
    votes: 89,
    hashtag: '#SinoInkScroll',
  },
]

export const getVisibleArtworks = (
  selectedCategory: ArtworkCategory,
): Artwork[] => {
  if (selectedCategory === 'All') {
    return artworks
  }

  return artworks.filter((artwork) => artwork.category === selectedCategory)
}
