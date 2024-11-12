class UserPage {
    get txtFirstName() { return cy.get("#fname") }
    get txtLastName() { return cy.get("#sname") }
    get txtEmail() { return cy.get("#email") }
    get txtMobileNumber() { return cy.get("#mobilenum") }
    get txtDOB() { return cy.get("#date_of_birth") }
    get ddlGender() { return cy.get("#gender_id") }
    get ddlRole() { return cy.get("#group_id") }
    get ddlLocation() { return cy.get("#clinic_user_id") }
    get ddlWelcomeEmail() { return cy.get("#welcome_email") }
    get lnkNewUser() { return cy.getByLinkText("New User") }
    get btnCreate() { return cy.get("input[value='Create']").eq(0) }
}
const objUser = new UserPage()
module.exports = objUser;