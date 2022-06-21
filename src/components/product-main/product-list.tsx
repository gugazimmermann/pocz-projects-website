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
    name: 'Quisque dui sem, varius eget nisi at',
    description: 'Cras ut est dictum, ornare eros sed, molestie mauris. Maecenas sapien justo, tincidunt ut hendrerit at, varius eget diam. Cras ullamcorper vel justo ut aliquam.',
    link: 'github.com',
    image: <ProductTwo />,
  },
];

export default productList;
