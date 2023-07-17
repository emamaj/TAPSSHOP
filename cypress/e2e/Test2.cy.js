import HomePage from "../page-objects/homePage";
import CartPage from "../page-objects/cartPage";
import OrderPage from "../page-objects/orderPage";

describe('my first scenario', () => {
    const homePage = new HomePage();
    const cartPage = new CartPage();
    const orderPage = new OrderPage();

    before(function () {
        cy.fixture('products.json').as('ProductData')
    })

    it('should order a product from the shop', function() {
        homePage.visitHomePage()
        homePage.clicktMainMenuButton()
        homePage.addProductToCart(this.ProductData.HoodieWithZipper)
        homePage.clickGotoCartFromProductButton()

        cartPage.checkThatAddedProductIsInCart(this.ProductData.HoodieWithZipper)
        cartPage.clickGoToPaymentButton()

        orderPage.fillAllRequiredFields()
        orderPage.clickOrderFinishButton()
        orderPage.checkOrderFinished()
    })
})