export class login{
    public static url =() => cy.visit('https://demo.guru99.com/insurance/v1')
    public static username =() => cy.get('[id=email]')
    public static password =() => cy.get('[id=password]')
    public static loginButton =() => cy.get('[value="Log in"]')

    


}