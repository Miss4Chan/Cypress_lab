export class AddDeleteElements {
    static get ElementsAddDelete() {
      return {
        getBtnBasket: () => cy.get('[aria-label="Show the shopping cart"]'),
        getBtnSearch: () => cy.get('.mat-search_icon-search'),
        getTxtSearch: () => cy.get('#mat-input-0'),
        getBtnAddToBasket: () => cy.get('[aria-label="Add to Basket"]'),
        getLblNotification: () => cy.get('.fa-3x.warn-notification'),
        getTblBasket: () => cy.get('.mat-table'),
        //TODO:search exit??
        getBtnExit: () => cy.get('.mat-search_icons .mat-icon:first-child')
      };
    }
  }