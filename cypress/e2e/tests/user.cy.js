import { faker } from '@faker-js/faker';
import objUser from "../pages/user.page";
import objUserList from "../pages/userlist.page";
import moment from 'moment';
describe('User', () => {
  const user = {
    firstName: faker.person.firstName(),
    lastName: faker.person.lastName(),
    email: faker.internet.email(),
    mobileNumber: faker.phone.number(),
    dob: moment(faker.date.birthdate()).format(
      "MM/DD/YYYY"
    ),
    gender: "Male",
    role: "Medical Provider",
    location: "GAMEDAY L3",
    welcomeEmail: "No"
  };

  beforeEach(() => {
    cy.navigateAndLogin();
  })

  afterEach(() => {
    cy.logout();
  })

  it('Create user', () => {
    objUser.lnkNewUser.should("exist").click({ force: true });
    cy.pageHeader("Create User").should("be.visible")
    objUser.txtFirstName.should("be.visible").type(user.firstName);
    objUser.txtLastName.should("be.visible").type(user.lastName);
    objUser.txtEmail.should("be.visible").type(user.email);
    objUser.txtMobileNumber.should("be.visible").type(user.mobileNumber);
    user.mobileNumber = objUser.txtMobileNumber.invoke('val').then((val) => {
      user.mobileNumber = val
    })
    objUser.txtDOB.should("be.visible").type(user.dob);
    objUser.ddlGender.should("be.visible").select(user.gender);
    objUser.ddlRole.should("be.visible").select(user.role);
    objUser.ddlLocation.should("be.visible").select(`${user.location} (${user.location})`);
    objUser.ddlWelcomeEmail.should("be.visible").select(user.welcomeEmail);
    objUser.btnCreate.should("be.visible").click();
    cy.url().should("include", "User%20added%20successfully!")
  })

  it('Search user', () => {
    cy.visit(`${Cypress.env("BASEURL")}/users.php`)
    cy.selectTab('Pend');
    objUserList.txtSearchUser.should("be.visible").type(user.email);
    objUserList.rows.should("have.length", 1);
    objUserList.lblFullName.should("contain.text", `${user.firstName} ${user.lastName}`)
    objUserList.lblMobileNumber.should("have.text", user.mobileNumber)
    //objUserList.lblMobileNumber.should("have.text", `(${user.mobileNumber.substring(0, 3)}) ${user.mobileNumber.substring(3, 6)}-${user.mobileNumber.substring(6, 10)}`)
    objUserList.lblEmail.should("have.text", user.email)
    objUserList.lblRole.should("contain.text", user.role)
    objUserList.lblLocation.should("have.text", user.location)
    objUserList.lblOnBoard.should("have.text", user.welcomeEmail)
  })
})


