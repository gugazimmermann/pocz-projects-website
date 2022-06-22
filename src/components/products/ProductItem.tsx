import { ReactElement } from 'react';
import ProductItemContent from './ProductItemContent';

interface ProductItemProps {
  name: string;
  description: string;
  link: string;
  image: ReactElement;
  index: number;
}

function renderEven({
  name,
  description,
  link,
  image,
  index,
}: ProductItemProps): ReactElement {
  return (
    <div key={index} className="flex flex-wrap p-4 sm:p-8 border-b">
      <div className="w-full sm:w-1/2">
        {ProductItemContent(name, description, link)}
      </div>
      <div className="w-full sm:w-1/2">{image}</div>
    </div>
  );
}

function renderOdd({
  name,
  description,
  link,
  image,
  index,
}: ProductItemProps): ReactElement {
  return (
    <div key={index} className="flex flex-wrap  p-4 sm:p- flex-col-reverse sm:flex-row">
      <div className="w-full sm:w-1/2">{image}</div>
      <div className="w-full sm:w-1/2">
        {ProductItemContent(name, description, link)}
      </div>
    </div>
  );
}

export default function ProductItem({
  name,
  description,
  link,
  image,
  index,
}: ProductItemProps): ReactElement {
  return index % 2 === 0
    ? renderEven({
      name,
      description,
      link,
      image,
      index,
    })
    : renderOdd({
      name,
      description,
      link,
      image,
      index,
    });
}
