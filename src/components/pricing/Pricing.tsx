import { ReactElement } from 'react';
import LANG from '../../lang/pt-BR';
import Title from '../shared/Title';
import PricingItem from './PricingItem';
import PricingList from './pricingList';

export default function Pricing(): ReactElement {
  return (
    <section className="w-full border-b bg-neutral-100">
      <div className="container mx-auto">
        <Title title={LANG.PRICING.title} />
        <div className="flex flex-col sm:flex-row justify-center md:my-8">
          {PricingList.map((item, index) => PricingItem(item, index))}
        </div>
      </div>
    </section>
  );
}
