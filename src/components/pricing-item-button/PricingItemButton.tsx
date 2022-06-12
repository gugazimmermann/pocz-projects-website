import { ReactElement } from 'react';

interface PricingItemButtonProps {
  link: string;
  active: boolean;
}

export function PricingItemButton({
  link,
  active,
}: PricingItemButtonProps): ReactElement {
  return (
    <div className="flex items-center justify-center">
      <button
        type="button"
        className={`mx-auto lg:mx-0 hover:underline gradient2 font-bold rounded my-6 py-4 px-8 shadow-lg ${
          active ? 'text-white' : 'text-gray-800'
        }`}
        onClick={() => window.location.assign(link)}
      >
        Cadastrar
      </button>
    </div>
  );
}

export default PricingItemButton;
