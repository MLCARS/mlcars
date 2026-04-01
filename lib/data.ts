import { Product } from './types'

export const company = {
  name: "ML'CARS S.à r.l-S",
  slogan: 'Plus qu’un style, une signature',
  phone: '+352 691 112 462',
  address: '114, Rue Woiwer, L-4687 Differdange',
  country: 'Luxembourg',
  instagram: '@ml.cars_',
  shipping: 'Expédition dans toute l’Europe',
  payment: 'Mollie et virement',
  legal: 'RCS B306217 · TVA non applicable'
}

export const fallbackProducts: Product[] = [
  {
    id: 'pot-solid-4l',
    name: 'POT Solid 4L',
    category: 'FULL DIP',
    price: 82.99,
    image: '/products/pot-solid-4l.png',
    description: 'Peinture pelable premium pour personnalisation automobile.',
    variants: ['4L', 'Solid'],
    featured: true
  },
  {
    id: 'pot-metal-4l',
    name: 'POT Métal 4L',
    category: 'FULL DIP',
    price: 82.99,
    image: '/products/pot-metal-4l.png',
    description: 'Finition métal pour un rendu automobile plus exclusif.',
    variants: ['4L', 'Métal']
  },
  {
    id: 'pot-candy-4l',
    name: 'POT Candy 4L',
    category: 'FULL DIP',
    price: 108.99,
    image: '/products/pot-candy-4l.png',
    description: 'Effet candy éclatant avec profondeur visuelle.',
    variants: ['4L', 'Candy']
  },
  {
    id: 'pot-chameleon-4l',
    name: 'POT Caméléon 4L',
    category: 'FULL DIP',
    price: 159.99,
    image: '/products/pot-chameleon-4l.png',
    description: 'Effet caméléon premium pour les projets les plus visuels.',
    variants: ['4L', 'Caméléon'],
    featured: true
  },
  {
    id: 'audi-q5-123',
    name: 'Écran Audi Q5 12.3"',
    category: 'Multimédia Automobile',
    price: 412.5,
    image: '/products/audi-q5-screen.png',
    description: 'CarPlay premium pour Audi Q5 2018-2019.',
    variants: ['Audi', 'Q5', '2018-2019', '12.3"', 'CarPlay'],
    featured: true
  },
  {
    id: 'mercedes-123',
    name: 'Écran Mercedes 12.3"',
    category: 'Multimédia Automobile',
    price: 349.5,
    image: '/products/mercedes-screen-123.png',
    description: 'CarPlay / Android Auto pour Mercedes 2014-2019.',
    variants: ['Mercedes', '2014-2019', '12.3"', 'CarPlay/Android']
  },
  {
    id: 'alcantara',
    name: 'Nettoyant Alcantara FullCarX',
    category: 'Produits entretien',
    price: 13,
    image: '/products/alcantara.png',
    description: 'Nettoyage spécifique alcantara pour un rendu propre et premium.',
    variants: ['750ml']
  },
  {
    id: 'leather',
    name: 'Hydratant Pour Le Cuir FullCarX',
    category: 'Produits entretien',
    price: 21.8,
    image: '/products/leather.png',
    description: 'Hydratation et protection du cuir.',
    variants: ['750ml']
  }
]
