import { ReactElement } from 'react';
import { Link } from 'react-router-dom';

interface NavItemProps {
  link: string;
  text: string;
  active: boolean;
}

export default function NavItem({ link, text, active }: NavItemProps): ReactElement {
  return (
    <Link to={link}>
      <span
        className={`inline-block no-underline py-2 px-4 ${
          active ? 'font-bold' : 'hover:text-underline'
        }`}
      >
        {text}
      </span>
    </Link>
  );
}
