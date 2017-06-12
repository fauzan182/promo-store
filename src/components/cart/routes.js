const Routes = ($stateProvider) => {
  $stateProvider
    .state('cart', {
      url: "/cart",
      template: require("./template.html"),
      controller: "CartController",
      controllerAs: "cart",
    });
}

Routes.$inject = ['$stateProvider'];


export default Routes;