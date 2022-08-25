import { login } from "../../support/login.po";

describe("Successful login", function () {
    it("Login with valid credentials", function () {
        const email =('Aryalhari86@gmail.com')
        const password =('hello')
        login.url()
        login.username().type(email)
        login.password().type(password)
        login.loginButton().click()
        .contains('Broker Insurance webPage')
        
    });
});