import { EditProfile } from "../../support/editProfile.po";
const Surname =('aryal')
const FirstName =('hari')
const Phone =('9849658653')
const AddressStreet=('balcoat') 
const City= ('bhaktapur')
const Country = ('nepal')
const PostCode=('123')
describe('editProfile', function(){
    beforeEach(()=>{
        cy.login(email, password)
    
    });
    
    it("  retrive quotation", function () {
    EditProfile.editProfileTab().click()
    .contains('Editing user profile')
    EditProfile.title().select('3').should('have.value','mr')

    EditProfile.surname().type(Surname)
    EditProfile.firstName().type(FirstName)
    EditProfile.phone().type(Phone)
    EditProfile.dateOfBirth().years().select('1996').should('have.value','1996').months('january').should('have.value','january')
    .days('8').should('have.value','8')
     EditProfile.licenceType().first().check()
     EditProfile.licencePeriod().select('2').should('have.value', '2')
     EditProfile.academic().select('Actor').should('have.value', 'Actor')
     EditProfile.city().type(City)
     EditProfile.country().type(Country)
     EditProfile.postCode().type(PostCode)

     EditProfile.updateUser().click()  
   
    }) });