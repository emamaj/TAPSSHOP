import CartPage from "../page-objects/cartPage";
import HomePage from "../page-objects/homePage";
import MyAccountPage from "../page-objects/myAccountPage"
import { fa, faker } from "@faker-js/faker";

describe('my first scenario', () => {
    const homePage = new HomePage();
    const accountPage = new MyAccountPage()
    const cartPage = new CartPage()

    before(function () {
        cy.fixture('users').as('userData')
    })

    it('should login to the application', function () {
        homePage.visitHomePage()
        homePage.clicktMainMenuButton()
        accountPage.fillUserNameFieldWithEmail(this.userData.email)
        accountPage.fillPasswordField(this.userData.password)
        accountPage.clickLoginButton()
        accountPage.checkVisibilityOfMyAccountNavigation()

    })

    it('should not login to the application', function() {
        accountPage.visitAccoutPage()
        accountPage.fillUserNameFieldWithEmail(faker.internet.email())
        accountPage.fillPasswordField(faker.internet.password())
        accountPage.clickLoginButton()
        accountPage.checkVisibilityOfErrorAfterWrongLogin()
    })

    it('should add new produkt to cart and remove them', function() {
        homePage.visitHomePage()
        homePage.addProductToCart()
        homePage.clickGotoCartFromProductButton()
        cartPage.checkThatAddedProductIsInCart()
        cartPage.removeItemFromCart()
        cartPage.checkThatCartIsEmpty()
    })
})