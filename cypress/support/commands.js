import  objLogin  from "../e2e/pages/login.page";
import "cypress-mochawesome-reporter/register";
import addContext from "mochawesome/addContext";

Cypress.Commands.add("addContext", (context) => {
  cy.once("test:after:run", (test) => addContext({ test }, context));
});

Cypress.Commands.add("navigateAndLogin", () => {
  cy.visit(`${Cypress.env("BASEURL")}/login.php`);
  objLogin.login(Cypress.env("EMAIL"), Cypress.env("PASSWORD"));
  objLogin.lnkUserMenu.should("be.visible");
  objLogin.txtEmail.should("not.exist");
});

Cypress.Commands.add("logout", () => {
  objLogin.logout();
  objLogin.lnkUserMenu.should("not.exist");
  objLogin.txtEmail.should("be.visible");
});

Cypress.Commands.add("getByButtonText", (buttonText) => {
  return cy.get("button").contains(buttonText);
});

Cypress.Commands.add("getByLinkText", (buttonText) => {
  return cy.get("a").contains(buttonText);
});

Cypress.Commands.add("pageHeader", (headerText) => {
  return cy.get("h3.card-title>.card-label").contains(headerText);
});

Cypress.Commands.add("selectTab", (tabText, index) => {
  const elementIndex = index || 0;
  cy.get(".nav-item>.nav-link").contains(tabText).eq(elementIndex).click();
});