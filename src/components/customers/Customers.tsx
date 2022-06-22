import { ReactElement } from 'react';
import LANG from '../../lang/pt-BR';
import Title from '../shared/Title';
import CustomersList from './CustomersList';

function renderCustomer(
  name: string,
  image: ReactElement,
  index: number,
): ReactElement {
  return (
    <span key={index} className="w-1/2 p-4 md:w-auto flex items-center text-xl">
      {image}
      {name}
    </span>
  );
}

export default function Customers(): ReactElement {
  return (
    <section className="w-full border-b bg-neutral-100">
      <div className="container mx-auto max-w-5xl">
        <Title title={LANG.CUSTOMERS.title} />
        <div className="mb-4 flex flex-wrap items-center justify-between">
          {CustomersList.map(({ name, image }, index) => renderCustomer(name, image, index))}
        </div>
      </div>
    </section>
  );
}
