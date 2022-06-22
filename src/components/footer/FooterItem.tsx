import { ReactElement } from 'react';
import { Link } from 'react-router-dom';

interface itemProps {
  title: string;
  link: string;
}

export default function FooterItem(
  { title, link }: itemProps,
  index: number,
): ReactElement {
  return (
    <li key={index} className="mt-2 mb-2 sm:dm-0 inline-block mr-2 md:block md:mr-0">
      {link.startsWith('/') ? (
        <Link to={link}>
          <span className="font-light no-underline hover:underline text-gray-500 hover:text-primary-500">
            {title}
          </span>
        </Link>
      ) : (
        <a
          className="font-light no-underline hover:underline text-gray-500 hover:text-primary-500"
          href={link}
          target="_blank"
          rel="noreferrer"
        >
          {title}
        </a>
      )}
    </li>
  );
}
