import { ReactElement } from 'react';
import FooterItem from './FooterItem';

interface itemProps {
  title: string;
  items: { title: string; link: string }[];
}

export default function FooterGroups(footerItem: itemProps, index: number): ReactElement {
  const { title, items } = footerItem;
  return (
    <div key={index} className="flex-1">
      <p className="uppercase font-bold">{title}</p>
      <ul className="list-reset">
        {items.map((item, i) => FooterItem(item, i))}
      </ul>
    </div>
  );
}
