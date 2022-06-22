import { ReactElement } from 'react';
import RegisterButton from '../shared/RegisterButton';

interface PricingProps {
  title: string;
  features: string[];
  price: number;
  priceText: string;
  link: string;
  active: boolean;
}

export function PricingItem(
  {
    title, features, price, priceText, link, active,
  }: PricingProps,
  index: number,
): ReactElement {
  if (!active) {
    return (
      <div
        key={index}
        className="flex flex-col w-5/6 lg:w-1/4 mx-auto lg:mx-0 rounded-2xl sm:rounded bg-white shadow-sm  hover:shadow my-6"
      >
        <div className="flex-1 overflow-hidden">
          <p className="p-4 text-2xl font-bold text-center">{title}</p>
          <ul className="w-full text-center text-sm">
            {features.map((feature, i) => <li key={i} className="py-2">{feature}</li>)}
          </ul>
        </div>
        <div className="w-full text-2xl font-bold text-center py-4">
          <span>{`$${price} `}</span>
          <span className="text-base">{priceText}</span>
        </div>
        <div className="flex items-center justify-center mb-6">
          <RegisterButton className="text-white" link={link} invert />
        </div>
      </div>
    );
  }
  return (
    <div
      key={index}
      className="flex flex-col w-5/6 lg:w-1/3 mx-auto lg:mx-0 rounded-2xl gradient shadow hover:shadow-lg text-white z-10"
    >
      <div className="flex-1 overflow-hidden">
        <p className="p-4 text-3xl font-bold text-center">{title}</p>
        <ul className="w-full text-center text-base">
          {features.map((feature, i) => <li key={i} className="py-2">{feature}</li>)}
        </ul>
      </div>
      <div className="w-full text-4xl font-bold text-center py-4">
        <span>{`$${price} `}</span>
        <span className="text-base">{priceText}</span>
      </div>
      <div className="flex items-center justify-center mb-6">
        <RegisterButton link={link} />
      </div>
    </div>
  );
}

export default PricingItem;
