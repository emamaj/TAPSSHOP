import { Product } from "./homePage";

const productName = '.product-name'
const removeProduct = '.remove'
const yourCartIsEmpty = '.cart-empty.woocommerce-info'
const goToPaymentButton = '.checkout-button'

class CartPage{

    checkThatAddedProductIsInCart(HoodieWithZipper){
        cy.get(productName).contains(HoodieWithZipper.Name).should('exist')
    }

    removeItemFromCart() {
        cy.get(removeProduct).click()
    }
    
    checkThatCartIsEmpty() {
        cy.get(yourCartIsEmpty).should('exist')
    }

    clickGoToPaymentButton() {
        cy.get(goToPaymentButton).click()
    }

}

export default CartPage