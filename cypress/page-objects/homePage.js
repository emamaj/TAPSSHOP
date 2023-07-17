import Urls from "./urls";
const myMenuHeaderButton = '#menu-item-98'
const dataBlockNameNew = 'div[data-block-name="woocommerce/product-new"]'
const checkCartFromProductLevel = '.added_to_cart.wc-forward'

//export const Product = {
    //HoodieWithZipper: {
        //Locator: 'a[data-product_id="51"]',
        //Name: 'Hoodie with Zipper'
    //},

    //Polo: {
       //Locator: 'a[data-product_id="53"]', 
       // Name: 'Polo'
    //},

    //Sunglasses: {
       // Locator: 'a[data-product_id="49"]',
       // Name: 'Sunglasses'
    //},
//}

class HomePage {

    clicktMainMenuButton() {
        cy.get(myMenuHeaderButton).click()
    }

    addProductToCart(HoodieWithZipper) {
        cy.get(dataBlockNameNew).within(() =>{
            cy.get(HoodieWithZipper.Locator).click()
        })
    }

    clickGotoCartFromProductButton() {
        cy.get(dataBlockNameNew).within(() =>{
            cy.get(checkCartFromProductLevel).click()
        })
    }

    visitHomePage() {
        const urls = new Urls
        urls.visitHomePage()
    }
}

export default HomePage