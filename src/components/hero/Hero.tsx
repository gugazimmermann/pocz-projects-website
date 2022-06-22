import { ReactElement } from 'react';
import LANG from '../../lang/pt-BR';
import RegisterButton from '../shared/RegisterButton';
import styles from './Hero.module.css';

// TODO: CREATE CARROUCEL
export default function Hero(): ReactElement {
  return (
    <div className="gradient w-full pb-8">
      <div className="container mx-auto">
        <div className="text-center py-8">
          <h1 className="text-2xl md:text-3xl lg:text-5xl font-extrabold">
            {LANG.HERO.title}
          </h1>
          <p className="mt-4 md:text-xl lg:text-2xl">
            {LANG.HERO.subtitle}
          </p>
          <RegisterButton className="my-6" />
        </div>
        <div className="flex items-center lg:mx-16">
          <div className={`${styles.browsermockup} flex-1 mx-6 bg-white rounded-xl shadow-xl`} />
        </div>
      </div>
    </div>
  );
}
