import { useState, useEffect, ReactElement } from 'react';
import { Link, useLocation } from 'react-router-dom';
import Routes from '../../routes';
import NavItem from '../nav-item/NavItem';

export function Nav(): ReactElement {
  const location = useLocation();
  const [menu, SetMenu] = useState(false);
  const [scrollPosition, setScrollPosition] = useState(0);
  const appSite = process.env.REACT_APP_PROJECT_APP_URL;

  const handleScroll = () => {
    const position = window.pageYOffset;
    setScrollPosition(position);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <nav
      id="header"
      className={`w-full z-50 top-0 sticky ${
        scrollPosition > 50 ? 'bg-primary-600 text-white' : 'text-black'
      }`}
    >
      <div className="w-full container mx-auto flex flex-wrap items-center justify-between mt-0 px-2 py-2">
        <Link to="/">
          <div className="pl-4 flex justify-center content-center items-center flex-row">
            <img src="./logo64.png" width={40} height={40} alt="logo" />
            <span className="ml-4 no-underline hover:no-underline font-bold text-2xl lg:text-4xl">
              {process.env.REACT_APP_PROJECT_NAME}
            </span>
          </div>
        </Link>

        <div className="block lg:hidden pr-4">
          <button
            type="button"
            id="nav-toggle"
            className="gradient2 flex items-center px-3 py-2 border rounded text-gray-500 border-gray-600 hover:text-gray-800 appearance-none focus:outline-none"
            onClick={() => SetMenu(!menu)}
          >
            <svg
              className="fill-current h-3 w-3"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <title>Menu</title>
              <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
            </svg>
          </button>
        </div>

        <div
          className={`w-full grow lg:flex lg:items-center lg:w-auto mt-2 lg:mt-0 p-4 lg:p-0 z-10 ${
            !menu && 'hidden'
          }`}
          id="nav-content"
        >
          <ul className="list-reset lg:flex justify-end flex-1 items-center">
            <li className="mr-3">
              <NavItem
                link="/"
                text="Início"
                active={location.pathname === '/'}
              />
            </li>
            <li className="mr-3">
              <NavItem
                link={Routes.Functionalities}
                text="Funcionalidades"
                active={location.pathname === '/funcionalidades'}
              />
            </li>
            <li className="mr-3">
              <NavItem
                link={Routes.Plans}
                text="Planos"
                active={location.pathname === '/planos'}
              />
            </li>
          </ul>
          <button
            type="button"
            id="navAction"
            className={`gradient2 mx-auto lg:mx-0 hover:underlinefont-extrabold rounded mt-4 lg:mt-0 py-4 px-8 shadow text-black ${
              scrollPosition > 50 ? 'bg-primary-600 text-white' : ' opacity-75'}`}
            onClick={() => window.location.assign(appSite || '')}
          >
            Entrar
          </button>
        </div>
      </div>
    </nav>
  );
}

export default Nav;
