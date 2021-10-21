import { ReactElement } from 'react';
import Action from '../../components/action/Action';
import Customers from '../../components/customers/Customers';
import Hero from '../../components/hero/Hero';
import Pricing from '../../components/pricing/Pricing';
import ProductDetails from '../../components/product-details/ProductDetails';
import ProductMain from '../../components/product-main/ProductMain';

export function Main(): ReactElement {
  return (
    <>
      <Hero />
      <Customers />
      <ProductMain />
      <ProductDetails />
      <Pricing />
      <Action />
    </>
  );
}

export default Main;
