import { faker } from '@faker-js/faker'

const firtsNameField = '#billing_first_name'
const lastNameField = '#billing_last_name'
const countryDropdown = '#billing_country'
const addressField = '#billing_address_1'
const postalCodeField = '#billing_postcode'
const cityField = '#billing_city'
const phoneField = '#billing_phone'
const emailField = '#billing_email'
const finishOrderButton = '#place_order'
const countryDropdownPoland = 'Polska'
const orderFinishNumer = '.woocommerce-order-overview__order.order'


class OrderPage{

    fillAllRequiredFields() {
        cy.get(firtsNameField).type(faker.name.firstName())
        cy.get(lastNameField).type(faker.name.lastName())
        cy.get(countryDropdown).select(countryDropdownPoland, {force: true})
        cy.get(addressField).type(faker.address.streetAddress())
        cy.get(postalCodeField).type(faker.address.zipCode('##-###'))
        cy.get(cityField).type(faker.address.city())
        cy.get(phoneField).type(faker.phone.number('+48#########'))
        cy.get(emailField).type(faker.internet.email())

    }

    clickOrderFinishButton() {
        cy.get(finishOrderButton).click()
    }

    checkOrderFinished() {
        cy.get(orderFinishNumer, { timeout: 50000 }).should('be.visible')
    }
   
}

export default OrderPage;