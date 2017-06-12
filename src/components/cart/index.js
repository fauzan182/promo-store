import angular from "angular";
import uirouter from "angular-ui-router";
import Cleave from "cleave.js/dist/cleave-angular"

import Routes from "./routes";

import CartController from "./controller";


console.log(Cleave.name);
export default angular.module("PromoStore.Cart", [uirouter, "cleave.js"])
  .config(Routes)
  .controller('CartController', [
    "CartFactory",
    CartController
  ]).name;
