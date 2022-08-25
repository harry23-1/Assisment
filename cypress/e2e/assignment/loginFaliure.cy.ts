import { login } from "../../support/login.po";
const email = ('Aryalhari86@gmail.com')
const password = ('hello')
describe(" login faliure", function () {
    it("Login with invalid credentials", function () {

    login.url()
    login.username().type(email)
    login.password().type(password)
    login.loginButton().click().should('eq','Enter your Email address and password correct')
    });
});