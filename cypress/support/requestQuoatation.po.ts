export class RequestQuoatation{
    public static ruotationTab =() => cy.get('[id=newquote]')
    public static breakDownCover =() => cy.get('[id=quotwtion_breakdowncover]')
    public static windScreenRepair =() => cy.get('id="quotation_windscreenrepair_t"]')
    public static incidents =() => cy.get('id="quotation_incidents"')
    public static registration =() => cy.get('[id=quotation_vehicle_attributes_registration]')
    public static annualMileage =() => cy.get('id="quotation_vehicle_attributes_mileage"')
    public static estimatedvalue =() => cy.get('[id="quotation_vehicle_attributes_value"]')   
    public static parkinglocation =() => cy.get('[id="quotation_vehicle_attributes_parkinglocation"]')
    public static startOfPolicy =() => cy.get('[id=newquote]')
    public static pickYear =() => cy.get('[id="quotation_vehicle_attributes_policystart_1i"]')
    public static pickMonth =() => cy.get('[id="quotation_vehicle_attributes_policystart_2i"]')
    public static pickDay =() => cy.get('[id="quotation_vehicle_attributes_policystart_3i"]')


    public static calculatePremium =() => cy.get('[type="button"]')
    public static resetForm =() => cy.get('[id=newquote]')
    public static saveQuotation =() => cy.get('[id=newquote]')








}