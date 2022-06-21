import LANG from '../../src/lang/pt-BR';
import clientList from '../../src/components/customers/customer-list';

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
});
