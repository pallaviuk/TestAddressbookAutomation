export default class EditAddressPage{
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
        return cy.get('#address_color')
    }

    static getUpdateAddressBtn(){
        return cy.get('[class=edit_address] [data-test=submit]')
    }

    static getListLink(){
        return cy.get('[data-test=list]')
    }
}

