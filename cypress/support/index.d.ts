declare namespace Cypress {
    interface Chainable {
        addContext(context: any): Cypress.Chainable<void>;
        navigateAndLogin(): Cypress.Chainable<void>;
        logout(): Cypress.Chainable<void>;
        getByButtonText(buttonText: string): Cypress.Chainable<jQuery<HTMLElement>>;
        getByLinkText(linkText: string): Cypress.Chainable<jQuery<HTMLElement>>;
        pageHeader(headerText: string): Cypress.Chainable<jQuery<HTMLElement>>;
        selectTab(tabText: string,index:number): Cypress.Chainable<void>;

    }
}