import { ReactElement } from 'react';
import LANG from '../../lang/pt-BR';
import ProductEven from './product-even';
import ProductOdd from './product-odd';
import productList from './product-list';

export function ProductMain(): ReactElement {
  return (
    <section className="bg-gray-100 border-b py-8">
      <div className="container max-w-5xl mx-auto m-8">
        <h2 className="w-full my-2 text-5xl font-black leading-tight text-center text-gray-800">
          {LANG.PRODUCTS.title}
        </h2>
        <div className="w-full mb-4">
          <div className="h-1 mx-auto gradient w-64 opacity-25 my-0 py-0 rounded-t" />
        </div>
        {productList.map(({
          name, description, link, image,
        }, index) => {
          if (index % 2 === 0) {
            return ProductOdd(name, description, link, image, index);
          }
          return ProductEven(name, description, link, image, index);
        })}
      </div>
    </section>
  );
}

export default ProductMain;
