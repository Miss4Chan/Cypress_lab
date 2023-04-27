export class EmptyBasket {
//Optimized delete
  emptyBasket() {
    cy.get('[aria-label="Show the shopping cart"]').click();
    this.deleteRows();

    cy.get('.mat-table').should('have.length', 1);
    cy.get('.mat-table').children('.mat-row').should('not.exist');
}

//Recursion for the win yet again
deleteRows() {
  cy.get('.mat-table').then(($table) => {
    if ($table.children('.mat-row').length > 0) {
      cy.get('.mat-table .mat-row', {timeout: 10000}).then(($rows) => {
        if ($rows.length > 0) {
          cy.wrap($rows[0]).find('.mat-cell .mat-icon-button').eq(2).click();
          cy.wait(1000);
          this.deleteRows();
        }
      });
    }
  });
}
} 