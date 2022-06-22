import { ReactElement } from 'react';
import Action from '../../components/action/Action';
import Customers from '../../components/customers/Customers';
import Hero from '../../components/hero/Hero';
import Pricing from '../../components/pricing/Pricing';
import Modules from '../../components/modules/Modules';
import Products from '../../components/products/Products';

export function Main(): ReactElement {
  return (
    <>
      <Hero />
      <Customers />
      <Products />
      <Modules />
      <Pricing />
      <Action />
    </>
  );
}

export default Main;
