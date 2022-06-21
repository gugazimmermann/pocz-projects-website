import LANG from '../../src/lang/pt-BR';
import clientList from '../../src/components/customers/customer-list';
import productList from '../../src/components/product-main/product-list';

describe('e2e Tests', () => {
  const env = Cypress.env();

  beforeEach(() => {
    cy.visit(env.REACT_APP_PROJECT_WEBSITE_URL);
  });

  it('Visits WebSite', () => {
    cy.title().should('eq', env.REACT_APP_PROJECT_WEBSITE_NAME);
    cy.get("span").contains(env.REACT_APP_PROJECT_NAME).should("exist");
  });

  it('Hero', () => {
    cy.get("h1").contains(LANG.HERO.title).should("exist");
    cy.get("p").contains(LANG.HERO.subtitle).should("exist");
    cy.get("button").contains(LANG.HERO.button).should("exist");
    cy.get("button").contains(LANG.HERO.button).should("exist");
  });

  it('Customers', () => {
    cy.get("h2").contains(LANG.CUSTOMERS.title).should("exist");
    clientList.forEach(({name}) => {
      cy.get("span").contains(name).children('svg').should("exist");
    })
  });

  it('Products', () => {
    cy.get("h2").contains(LANG.PRODUCTS.title).should("exist");
    productList.forEach(({name, description, link}) => {
      cy.get("h3").contains(name).should("exist");
      cy.get("p").contains(description).should("exist");
      cy.get("a").contains(link).should('have.attr', 'href').and('include', link)
    })
  });
});
