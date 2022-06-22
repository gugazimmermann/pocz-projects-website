import { ReactElement } from 'react';
import { Link } from 'react-router-dom';
import FooterList from './FooterList';
import FooterGroups from './FooterGroups';

function renderLogo(): ReactElement {
  return (
    <Link to="/">
      <span className="text-sky-500 no-underline hover:no-underline font-bold text-2xl lg:text-4xl">
        {process.env.REACT_APP_PROJECT_NAME}
      </span>
    </Link>
  );
}

export default function Footer(): ReactElement {
  return (
    <footer className="container mx-auto px-8 border-t border-gray-300">
      <div className="w-full flex flex-col md:flex-row py-6">
        <div className="flex-1 mb-6">
          {renderLogo()}
        </div>
        {FooterList.map((item, index) => FooterGroups(item, index))}
      </div>
    </footer>
  );
}
