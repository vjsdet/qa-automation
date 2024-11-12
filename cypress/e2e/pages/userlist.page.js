class UserListPage {
    get txtSearchUser() { return cy.get("#search_box_admin_users") }
    get rows() { return cy.get("tbody tr") }
    get lblFullName() {return this.rows.find("td").eq(0).find('a') }
    get lblEmail() {return this.lblFullName.next() }
    get lblMobileNumber() {return this.lblEmail.next() }
    get lblRole() { return this.rows.find("td").eq(1).find('span') }
    get lblLocation() {return this.rows.find("td").eq(2) }
    get lblOnBoard() {return this.rows.find("td").eq(3).find('span') }
}
const objUserList = new UserListPage()
module.exports = objUserList;