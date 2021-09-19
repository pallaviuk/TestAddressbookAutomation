export default class ShowAddressPage{
    static getAddressAddedMsg(){
        return cy.get('[data-test=notice]')
    }

    static getFirstName(){
        return cy.get('[data-test=first_name]')
    }

    static getLastName(){
        return cy.get('[data-test=last_name]')
    }

    static getAddress1(){
        return cy.get('[data-test=street_address]')
    }

    static getCity(){
        return cy.get('[data-test=city]')

    }

    static getState(){
        return cy.get('[data-test=state]')
    }

    static getZipCode(){
        return cy.get('[data-test=zip_code]')
    }

    static getColour(){
        return cy.get('[data-test=color]')
    }

    static getEditLink(){
        return cy.get('[data-test=edit]')
    }

    static getListLink(){
        return cy.get('[data-test=list]')
    }
}
   
 

 