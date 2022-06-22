import { ReactElement } from 'react';
import LANG from '../../lang/pt-BR';
import Title from '../shared/Title';
import ProductItem from './ProductItem';
import productList from './productsList';

export default function Products(): ReactElement {
  return (
    <section className="w-full border-b bg-neutral-100">
      <div className="container mx-auto max-w-5xl">
        <Title title={LANG.PRODUCTS.title} />
        {productList.map(({
          name, description, link, image,
        }, index) => ProductItem({
          name, description, link, image, index,
        }))}
      </div>
    </section>
  );
}
