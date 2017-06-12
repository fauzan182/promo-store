const Routes = ($stateProvider) => {
  $stateProvider
    .state('landing-page', {
      url: "/",
      template: require("./landing-page.html"),
      controller: "LandingPageController",
      controllerAs: "landingPage",
    });
}

Routes.$inject = ['$stateProvider'];


export default Routes;