import { ReactElement } from 'react';
import LANG from '../../lang/pt-BR';
import RegisterButton from '../shared/RegisterButton';
import Title from '../shared/Title';

export default function Action(): ReactElement {
  return (
    <section className="w-full border-b gradient2 text-center">
      <div className="container mx-auto">
        <Title title={LANG.ACTIONS.title} />
        <h3 className="text-2xl font-base">{LANG.ACTIONS.subtitle}</h3>
        <RegisterButton className="my-6 text-white" invert />
      </div>
    </section>
  );
}
