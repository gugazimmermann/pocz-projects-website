import { ReactElement } from 'react';
import LANG from '../../lang/pt-BR';
import clientList from './customer-list';

export function Customers(): ReactElement {
  const clients = (name: string, image: ReactElement, index: number): ReactElement => (
    <span key={index} className="w-1/2 p-4 md:w-auto flex items-center">
      {image}
      {name}
    </span>
  );

  return (
    <section className="bg-white border-b py-12 ">
      <div className="container mx-auto flex flex-wrap items-center justify-between pb-12">
        <h2 className="w-full my-2 text-xl font-black leading-tight text-center text-gray-800 lg:mt-8">
          {LANG.CUSTOMERS.title}
        </h2>
        <div className="w-full mb-4">
          <div className="h-1 mx-auto gradient w-64 opacity-25 my-0 py-0 rounded-t" />
        </div>

        <div className="flex flex-1 flex-wrap max-w-4xl mx-auto items-center justify-between text-xl text-gray-500 font-bold">
          {clientList.map(({ name, image }, index) => clients(name, image, index))}
        </div>
      </div>
    </section>
  );
}

export default Customers;
