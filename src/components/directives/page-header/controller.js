
export default class PageHeaderController {
  
  constructor ($scope, CartFactory) {
    $scope.itemCount  = 0;
    $scope.totalPrice = "";
    
    $scope.$watch(function () {
      return CartFactory.item_details;
    }, (newItems, oldItems)=>{
      
      $scope.itemCount = newItems.length;
      $scope.totalPrice = newItems.reduce((prevVal, item, index, arr) => ( prevVal + item.totalPrice ), 0);
    }, true);
  }
}