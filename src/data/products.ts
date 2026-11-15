export interface Product {
  id: string;
  name: string;
  tagline: string;
  description: string;
  image: string;
  alt: string;
}

export const products: Product[] = [
  {
    id: 'sesame',
    name: 'Sesame Seeds',
    tagline: 'Nutty & aromatic',
    description:
      'Carefully cleaned sesame seeds with a rich, nutty flavour — ideal for baking, cooking and oil extraction.',
    image:
      'https://images.pexels.com/photos/20598694/pexels-photo-20598694.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    alt: 'Sesame seeds close-up',
  },
  {
    id: 'sunflower',
    name: 'Sunflower Seeds',
    tagline: 'Lightly crisp',
    description:
      'Plump, premium sunflower kernels, perfect for snacking, salads and a wholesome boost of natural goodness.',
    image:
      'https://images.pexels.com/photos/19282822/pexels-photo-19282822.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    alt: 'Sunflower seeds detail',
  },
  {
    id: 'pumpkin',
    name: 'Pumpkin Seeds',
    tagline: 'Earthy & wholesome',
    description:
      'Naturally dried pumpkin seeds with a satisfying crunch — a nutritious addition to everyday meals.',
    image:
      'https://images.pexels.com/photos/34623198/pexels-photo-34623198.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    alt: 'Dry pumpkin seeds',
  },
  {
    id: 'flax',
    name: 'Flax Seeds',
    tagline: 'Golden & nourishing',
    description:
      'Golden flax seeds, gently cleaned and graded — a trusted source of plant-based nutrition for homes and mills.',
    image:
      'https://images.pexels.com/photos/9974505/pexels-photo-9974505.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    alt: 'Brown flax seeds with wooden spoon',
  },
  {
    id: 'chia',
    name: 'Chia Seeds',
    tagline: 'Tiny powerhouses',
    description:
      'Fine, uniformly graded chia seeds that soak up moisture beautifully for puddings, smoothies and baking.',
    image:
      'https://images.pexels.com/photos/13613853/pexels-photo-13613853.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    alt: 'Chia seeds in a wooden spoon',
  },
  {
    id: 'watermelon',
    name: 'Watermelon Seeds',
    tagline: 'Clean & crunchy',
    description:
      'Carefully separated watermelon seeds, washed and dried to retain their natural taste and crispness.',
    image:
      'https://images.pexels.com/photos/7284760/pexels-photo-7284760.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    alt: 'Fresh watermelons',
  },
  {
    id: 'mustard',
    name: 'Mustard Seeds',
    tagline: 'Sharp & fragrant',
    description:
      'Hand-selected mustard seeds with a bold aroma — a kitchen essential for tempering, pickling and seasoning.',
    image:
      'https://images.pexels.com/photos/37032495/pexels-photo-37032495.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    alt: 'Mustard field with yellow flowers',
  },
  {
    id: 'groundnuts',
    name: 'Groundnuts',
    tagline: 'Rich & hearty',
    description:
      'Well-graded groundnuts (peanuts) with a consistent size and satisfying flavour for snacking and culinary use.',
    image:
      'https://images.pexels.com/photos/6448483/pexels-photo-6448483.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    alt: 'Peanut on a plate',
  },
];

export const business = {
  name: 'Jairam Traders',
  tagline: 'Premium Edible Seeds',
  address: '7-361 A, NGO Colony, Kottar P.O, Nagercoil, Kanyakumari District, Tamil Nadu – 629002, India.',
  office: '04652 224812',
  mobile: '+91 9442304812',
  email: 'jairamtraders2012@gmail.com',
  whatsapp: '919442304812',
};
