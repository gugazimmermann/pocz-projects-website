import { ReactElement } from 'react';

const ProductEven = (
  name: string,
  description: string,
  link: string,
  image: ReactElement,
  index: number,
) => (
  <div key={index} className="flex flex-wrap flex-col-reverse sm:flex-row">
    <div className="w-full sm:w-1/2 p-6 mt-6">{image}</div>
    <div className="w-full sm:w-1/2 p-6 mt-6">
      <div className="align-middle">
        <h3 className="text-3xl text-gray-800 font-bold leading-none mb-3">
          {name}
        </h3>
        <p className="text-gray-600 mb-8">
          {description}
          <br />
          <a className="text-orange-500 underline" href={`https://${link}`}>
            {link}
          </a>
        </p>
      </div>
    </div>
  </div>
);

export default ProductEven;
