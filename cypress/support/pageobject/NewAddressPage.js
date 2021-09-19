export default class NewAddressPage{

    static getFirstNameTextField(){
        return cy.get('#address_first_name')
    }

    static getLastNameTextField(){
        return cy.get('#address_last_name')
    }

    static getAddress1TextField(){
        return cy.get('#address_street_address')
    }

    static getCityTextField(){
        return cy.get('#address_city')
    }

    static getStateDropdown(){
        return cy.get('#address_state')
    }

    static getZipCodeTextField(){
        return cy.get('#address_zip_code')
    }

    static getColourPicker(){
        return  cy.get('#address_color')
    }

    static getPictureFileUploadBtn(){
        return cy.get('#address_picture')
    }

    static getCreateAddressBtn(){
        return cy.get('[data-test=submit]')
    }

    static getErrorMsg(){
        return cy.get('#error_explanation ul li')
    }

    //Error
    //error_explanation + ui>li for specific error

}

