import { ReactElement, ReactNode } from 'react';
import Footer from '../../components/footer/Footer';
import Nav from '../../components/nav/Nav';
import './Layout.css';

interface LayoutProps {
  children: ReactNode;
}

export function Layout({ children }: LayoutProps): ReactElement {
  return (
    <div className="leading-relaxed tracking-wide flex flex-col">
      <Nav />
      {children}
      <Footer />
    </div>
  );
}

export default Layout;
