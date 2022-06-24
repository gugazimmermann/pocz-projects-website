import LANG from "../../src/lang/pt-BR";
import CustomersList from "../../src/components/customers/CustomersList";
import ProductsList from "../../src/components/products/ProductsList";
import ModulesList from "../../src/components/modules/ModulesList";
import PricingList from "../../src/components/pricing/PricingList";
import FooterList from "../../src/components/footer/FooterList";

describe("e2e Tests", () => {
  const env = Cypress.env();

  beforeEach(() => {
    cy.visit(env.REACT_APP_PROJECT_WEBSITE_URL);
  });

  it("Visits WebSite", () => {
    cy.title().should("eq", env.REACT_APP_PROJECT_WEBSITE_NAME);
    cy.contains(`${LANG.LOADING}...`).should("exist");
    cy.get("span")
      .contains(env.REACT_APP_PROJECT_NAME)
      .should("exist")
      .closest("nav")
      .should("not.have.class", "bg-primary-600")
      .should("have.class", "sticky");
    cy.scrollTo(0, 500);
    cy.get("span")
    .contains(env.REACT_APP_PROJECT_NAME)
    .should("exist")
    .closest("nav")
    .should("have.class", "bg-primary-600");
    cy.viewport('iphone-6');
    cy.get("span")
    .contains(env.REACT_APP_PROJECT_NAME)
    .should("exist")
    .closest("nav").within(() => {
      cy.get("button").should("have.class", "gradient2").children("svg").should("exist");
    })
  });

  it("Hero", () => {
    cy.get("h1")
      .contains(LANG.HERO.title)
      .closest("section")
      .should("have.class", "gradient")
      .within(() => {
        cy.get("p").contains(LANG.HERO.subtitle).should("exist");
        cy.get("button").contains(LANG.BUTTON.register).should("exist");
      });
  });

  it("Customers", () => {
    cy.get("h2")
      .contains(LANG.CUSTOMERS.title)
      .closest("section")
      .should("not.have.class", "bg-neutral-100")
      .within(() => {
        CustomersList.forEach(({ name }) => {
          cy.get("span").contains(name).children("svg").should("exist");
        });
      });
  });

  it("Products", () => {
    cy.get("h2")
      .contains(LANG.PRODUCTS.title)
      .closest("section")
      .should("have.class", "bg-neutral-100")
      .within(() => {
        ProductsList.forEach(({ name, description, link }) => {
          cy.get("h3").contains(name).should("exist");
          cy.get("p").contains(description).should("exist");
          cy.get("a")
            .contains(link)
            .should("have.attr", "href")
            .and("include", link);
          cy.get("h3")
            .contains(name)
            .closest(".flex")
            .within(() => cy.get("svg").should("exist"));
        });
      });
  });

  it("Modules", () => {
    cy.get("h2")
      .contains(LANG.MODULES.title)
      .closest("section")
      .should("not.have.class", "bg-neutral-100")
      .within(() => {
        ModulesList.forEach(({ title, subtitle, text }) => {
          cy.get("p").contains(title).should("exist");
          cy.get("p").contains(subtitle).should("exist");
          cy.get("p").contains(text).should("exist");
          cy.get("p")
            .contains(title)
            .closest(".flex")
            .within(() =>
              cy.get("button").contains(LANG.BUTTON.experiment).should("exist")
            );
        });
      });
  });

  it("Pricing", () => {
    cy.get("h2")
      .contains(LANG.PRICING.title)
      .closest("section")
      .should("have.class", "bg-neutral-100")
      .within(() => {
        PricingList.forEach(({ title, features, price, priceText, active }) => {
          cy.get("p")
            .contains(title)
            .closest(".flex")
            .within(() => {
              cy.get("span").contains(`${price}`).should("exist");
              cy.get("span").contains(priceText).should("exist");
              features.forEach((feature) => {
                cy.get("ul").within(() => {
                  cy.get("li").contains(feature).should("exist");
                });
              });
              if (active) {
                cy.get("p")
                  .contains(title)
                  .closest(".flex")
                  .should("have.class", "gradient");
                cy.get("button")
                  .contains(LANG.BUTTON.register)
                  .should("have.class", "gradient2");
              } else {
                cy.get("p")
                  .contains(title)
                  .closest(".flex")
                  .should("have.class", "bg-white");
                cy.get("button")
                  .contains(LANG.BUTTON.register)
                  .should("have.class", "gradient");
              }
            });
        });
      });
  });

  it("Action", () => {
    cy.get('section[class*="gradient2"]').within(() => {
      cy.get("h2").contains(LANG.ACTIONS.title).should("exist");
      cy.get("h3").contains(LANG.ACTIONS.subtitle).should("exist");
      cy.get("button")
        .contains(LANG.BUTTON.register)
        .should("have.class", "gradient");
    });
  });

  it("Footer", () => {
    cy.get("footer").within(() => {
      cy.get("span").contains(env.REACT_APP_PROJECT_NAME).should("exist");
      FooterList.forEach(({ title, items }) => {
        cy.get("p")
          .contains(title)
          .parent()
          .get("ul")
          .within(() => {
            items.forEach(({ title, link }) => {
              cy.get("li")
                .contains(title)
                .should("have.attr", "href")
                .and("include", link);
            });
          });
      });
    });
  });
});
