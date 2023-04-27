import { outOfStockElements } from "./outOfStock.elements";


export class outOfStockMethods {
    verifyNotAddedToBasketTwice() {
        outOfStockElements.ElementsOutOfStock.getLblNotification().should('have.text', '1');
    }
    verifyNotAddedToBasket() {
        outOfStockElements.ElementsOutOfStock.getLblNotification().should('have.text', '0');
      }
}