import { RetriveQuotation } from "../../support/retriveQuotaton.po";
const IdentificationNumber=('13822')
 describe('retrive quotation', function (){
    beforeEach(()=>{
        cy.login(email, password)
    });
    
    it("  retrive quotation", function () {
    RetriveQuotation.retriveQuotationTab().click()
    cy.contains('Last Modified:')
    RetriveQuotation.getIdentificationNumber().type(IdentificationNumber)
    RetriveQuotation.retriveButton().click()
    cy.url().should('be.equal','https://demo.guru99.com/insurance/v1/new_quotation.php')
    .contains('Retrive Quotation')
    
        
    });
});

     
