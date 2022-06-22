import { ReactElement } from 'react';
import RegisterButton from '../shared/RegisterButton';

interface ModuleItemProps {
  title: string;
  subTitle: string;
  text: string;
  link: string;
}

export default function ModuleItem({
  title,
  subTitle,
  text,
  link,
}: ModuleItemProps): ReactElement {
  return (
    <div className="w-full lg:w-1/4 flex flex-col rounded-t-lg rounded-b-none shadow mb-4">
      <div className="flex-1 overflow-hidden px-8">
        <p className="w-full text-lg text-center py-2">{title}</p>
        <p className="w-full font-bold text-xl text-center">{subTitle}</p>
        <p className="text-base py-2">{text}</p>
      </div>
      <div className="flex items-center justify-center py-6">
        <RegisterButton link={link} experiment />
      </div>
    </div>
  );
}
