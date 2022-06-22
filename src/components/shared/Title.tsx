import { ReactElement } from 'react';

interface TitleProps {
  title: string;
}

export default function Title({ title }: TitleProps): ReactElement {
  return (
    <>
      <h2 className="w-full mt-8 mb-2 text-2xl md:text-3xl lg:text-4xl text-center font-bold">
        {title}
      </h2>
      <div className="w-full mb-4">
        <div className="h-1 mx-auto gradient w-96 opacity-50 rounded-full" />
      </div>
    </>
  );
}
