import { ReactElement } from 'react';
import LANG from '../../lang/pt-BR';
import Title from '../shared/Title';
import ModuleItem from './ModuleItem';
import ModulesList from './ModulesList';

// TODO: make it like a Carousel
export default function Modules(): ReactElement {
  const appSite = process.env.REACT_APP_PROJECT_APP_URL;
  return (
    <section className="w-full border-b">
      <div className="container mx-auto">
        <Title title={LANG.MODULES.title} />
        <div className="mb-4 flex flex-wrap justify-around">
          {ModulesList.map(({
            title, subtitle, text, link,
          }, index) => (
            <ModuleItem
              key={index}
              title={title}
              subTitle={subtitle}
              text={text}
              link={`${appSite}${link}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
