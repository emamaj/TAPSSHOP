import Urls from './urls'

const userNameEmailField = '#username'
const userPassword = '#password'
const loginButton = 'button[name="login"]'
const myAccountNavigation = '.entry-content'
const errorAfterWrongLogin = 'ul[role="alert"]'


class MyAccountPage {
    fillUserNameFieldWithEmail(email) {
        cy.get(userNameEmailField).type(email)
    }

    fillPasswordField(password){
        cy.get(userPassword).type(password)
    }

    clickLoginButton() {
        cy.get(loginButton).click()
    }

    checkVisibilityOfMyAccountNavigation() {
        cy.get(myAccountNavigation).should('be.visible')
    }

    checkVisibilityOfErrorAfterWrongLogin() {
        cy.get(errorAfterWrongLogin).should('be.visible')
    }

    visitAccoutPage() {
        const urls = new Urls
        urls.visitMyAccountPage()
    }

}

export default MyAccountPage    