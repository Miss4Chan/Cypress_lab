import { AddDeleteElements } from "./addDelete.elements";


export class AddDeleteMethods {
  searchForProduct(productName: string) {
    AddDeleteElements.ElementsAddDelete.getBtnSearch().click();
    AddDeleteElements.ElementsAddDelete.getTxtSearch().type(productName);
    AddDeleteElements.ElementsAddDelete.getTxtSearch().type('{enter}');
  }

  addToBasket() {
    AddDeleteElements.ElementsAddDelete.getBtnAddToBasket().click();
  }

  verifyAddToBasket() {
    AddDeleteElements.ElementsAddDelete.getLblNotification().should('have.text', '1');
  }

  showBasket() {
    AddDeleteElements.ElementsAddDelete.getBtnBasket().click();
  }

  verifyDeleteFromBasket() {
    AddDeleteElements.ElementsAddDelete.getTblBasket().children().should('have.length', 1);
  }
  resetSearch() {
    AddDeleteElements.ElementsAddDelete.getBtnExit().click();
  }
}
