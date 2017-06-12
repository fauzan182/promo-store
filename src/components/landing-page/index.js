import angular from "angular";
import uirouter from "angular-ui-router";

import Routes from "./routes";

import LandingPageController from "./controller";


export default angular.module("PromoStore.LandingPage", [uirouter])
  .config(Routes)
  .controller('LandingPageController', [
    "CartFactory",
    "FlashFactory",
    LandingPageController
  ]).name;

