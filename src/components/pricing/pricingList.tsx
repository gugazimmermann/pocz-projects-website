const PricingList: {
  title: string;
  features: string[];
  price: number;
  priceText: string;
  link: string;
  active: boolean;
}[] = [
  {
    title: 'Gratuito',
    features: ['Thing', 'Thing', 'Thing'],
    price: 0,
    priceText: 'teste por 7 dias',
    link: '/registar/gratuito',
    active: false,
  },
  {
    title: 'Profissional',
    features: ['Thing', 'Thing', 'Thing'],
    price: 99,
    priceText: 'usuários ilimitados',
    link: '/registar/profissional',
    active: true,
  },
  {
    title: 'Básico',
    features: ['Thing', 'Thing', 'Thing'],
    price: 25,
    priceText: '/ por usuário',
    link: '/registar/basico',
    active: false,
  },
];

export default PricingList;
