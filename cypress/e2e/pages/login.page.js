class LoginPage {
    get txtEmail() { return cy.get("#ge_username") }
    get txtPassword() { return cy.get("#ge_password_hmd5") }
    get btnSubmit() { return cy.getByButtonText("Sign In") }
    get lnkUserMenu() { return cy.get("#kt_header_user_menu_toggle") }
    get lnkSignOut() { return cy.getByLinkText('Sign Out') }

    login(email, password) {
        this.txtEmail.clear().type(email);
        this.txtPassword.clear().type(password);
        this.btnSubmit.click();
    }

    logout() {
        this.lnkUserMenu.click();
        this.lnkSignOut.click()
    }
}
const objLogin = new LoginPage()
module.exports = objLogin;