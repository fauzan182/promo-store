import Items from "../../items";

export default class LandingPageController {
  
  constructor (CartFactory, FlashFactory) {
    this.items = Items;
    this.cartFactory = CartFactory;
    this.flashService = FlashFactory;
  }
  
  onBuyClick (item) {
    this.cartFactory.addItem(item);
    this.flashService.showMessage("Successfully add item to cart", "success")
  }
  
}