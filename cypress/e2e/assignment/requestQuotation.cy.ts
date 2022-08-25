import { RequestQuoatation } from "../../support/requestQuoatation.po";
const incidents =('accident')
const Registration =('12222333')
const AnnualMileage =('1200')
const EstimatedValue=('120000000')

describe('request quotation', function (){
    beforeEach(()=>{
        cy.login(email, password)
    
    });
    
    it("calculate  premium", function () {
    RequestQuoatation.ruotationTab().click()
    cy.contains('Request a quotation')
    RequestQuoatation.breakDownCover().select('3').should('have.value','3')
    RequestQuoatation.windScreenRepair().first().check()
    RequestQuoatation.incidents().type(incidents)

    RequestQuoatation.registration().type(Registration)
    RequestQuoatation.annualMileage().type(AnnualMileage)
    RequestQuoatation.estimatedvalue().type(EstimatedValue)
    RequestQuoatation.parkinglocation().select('2').should('have.value','2')
    RequestQuoatation.startOfPolicy().pickYear().contains('2013')
    .pickMonth().contains('april').pickDay().contains('7')
    RequestQuoatation.windScreenRepair()
    RequestQuoatation.calculatePremium().click()
    cy.contains('policyexcess')
    cy.contains('premium')

        
    });
      it("reset form", function () {
    RequestQuoatation.ruotationTab().click()
    cy.contains('Request a quotation')
    RequestQuoatation.resetForm().click()
    RequestQuoatation.incidents().should('be.empty')
    RequestQuoatation.registration().should('be.empty')
    RequestQuoatation.annualMileage().should('be.empty')
    RequestQuoatation.estimatedvalue().should('be.empty')

});  
             
    it("save Quation", function () {
    RequestQuoatation.ruotationTab().click()
    cy.contains('Request a quotation')
    RequestQuoatation.breakDownCover().select('3').should('have.value','3')
    RequestQuoatation.windScreenRepair().first().check()
    RequestQuoatation.incidents().type(incidents)

    RequestQuoatation.registration().type(Registration)
    RequestQuoatation.annualMileage().type(AnnualMileage)
    RequestQuoatation.estimatedvalue().type(EstimatedValue)
    RequestQuoatation.parkinglocation().select('2').should('have.value','2')
    RequestQuoatation.startOfPolicy().pickYear().contains('2013')
    .pickMonth().contains('april').pickDay().contains('7')

    RequestQuoatation.saveQuotation().click()
    cy.url().should('be.equal','https://demo.guru99.com/insurance/v1/new_quotation.php')
    .contains('You have saved this quotation')  

    });
})
