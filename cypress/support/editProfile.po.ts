export class EditProfile{
    public static editProfileTab =() => cy.get('[id="ui-id-5"]')
    public static title =() => cy.get('[id=id=user_title]')
    public static surname =() => cy.get('[user_surname]')
    public static firstName =() => cy.get('[id=usser_firstname]')
    public static phone =() => cy.get('[id=user_phone]')
    public static dateOfBirth  =() => cy.get('[id=]')
    public static years =() => cy.get('[id="user_dateofbirth_1i"]')
    public static months  =() => cy.get('[id="user_dateofbirth_2i"]')
    public static days =() => cy.get('[id="user_dateofbirth_3i"]')

    public static licenceType =() => cy.get('[id="user_licencetype_t"]')   
    public static licencePeriod =() => cy.get('[id="user_licenceperiod"]')
    public static academic =() => cy.get('[id="user_occupation_id"]')
    public static street =() => cy.get('[id="user_address_attributes_id"]')
    public static city =() => cy.get('[id="user_address_attributes_city"]')
    public static country =() => cy.get('[id="user_address_attributes_country]')
    public static postCode =() => cy.get('[id="user_address_attributes_postcode]')
    public static  updateUser=() => cy.get('[type="button"]')

}