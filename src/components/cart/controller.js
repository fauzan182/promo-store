export default class CartController {
  constructor (CartFactory) {
    this.items = CartFactory.item_details;
    this.totalPrice = CartFactory.item_details.reduce((prevVal, item, index, arr) => (prevVal + item.totalPrice), 0) 
    
    this.totalPayment = this.totalPrice;
    
    this.creditCard = "";
    this.expiryMonth = "12";
    this.expiryYear = "20";
    this.cardCvv = 123;
    
    this.claveOptions = {
      creditCard: {
        creditCard: true
      }
    }
  }
  
  onCreditCardChange () {
    console.log(this.creditCard);
  }
  
}