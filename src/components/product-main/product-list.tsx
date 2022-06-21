import { ReactElement } from 'react';

import ProductOne from './images/productOne';
import ProductTwo from './images/productTwo';

const productList: { name: string, description: string, link: string, image: ReactElement }[] = [
  {
    name: 'Lorem ipsum dolor sit amet',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam at ipsum eu nunc commodo posuere et sit amet ligula.',
    link: 'undraw.co',
    image: <ProductOne />,
  },
  {
    name: 'Lorem ipsum dolor sit amet',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam at ipsum eu nunc commodo posuere et sit amet ligula.',
    link: 'undraw.co',
    image: <ProductTwo />,
  },
];

export default productList;
