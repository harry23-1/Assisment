export class RetriveQuotation{
    public static getIdentificationNumber=() => cy.get('[name="id"]')
    public static retriveQuotationTab=() => cy.get('[id="ui-id-3"]')
    public static retriveButton=() => cy.get('[id="getquote"]')
}