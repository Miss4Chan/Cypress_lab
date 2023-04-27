export class outOfStockElements
{
    static get ElementsOutOfStock(){
    return{
        //Notif and search already implemented, as well as input
        getLblNotification: () => cy.get('.fa-3x.warn-notification')
    }
}
}