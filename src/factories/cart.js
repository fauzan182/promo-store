import angular from "angular";

class Cart {
  
  constructor () {
    this.item_details = [];  
  }
  
  addItem (item) {
    
    let currentItemIndex = this.item_details.findIndex((el) => (el.id === item.id))
    if (currentItemIndex > -1) {
      this.item_details[currentItemIndex].quantity += 1;
      this.item_details[currentItemIndex].totalPrice = this.item_details[currentItemIndex].price * this.item_details[currentItemIndex].quantity;
    } else {
      let newItem = Object.assign({}, item, {quantity: 1, totalPrice: item.price })
      this.item_details.push(newItem)
    }
  }
}


export default angular.module("PromoStore.Factories.Cart", [])
  .config(['$provide', ($provide) => {
    $provide.factory("CartFactory", Cart)
  }]).name;