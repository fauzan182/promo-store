import "./stylesheets/application.scss";

import angular from "angular";
import UiRouter from 'angular-ui-router';

import CartFactory from "./factories/cart";
import FlashFactory from "./factories/flash";

import FormatMoneyFilter from "./filters/format-money"

import LandingPage from "./components/landing-page";
import Cart from "./components/cart";
import PageHeaderDirective from "./components/directives/page-header";
import FlashDirective from "./components/directives/flash";

const PromoStore  = angular.module("PromoStore", [
  UiRouter,
  FlashFactory,
  CartFactory,
  FormatMoneyFilter,
  FlashDirective,
  PageHeaderDirective,
  LandingPage,
  Cart
]);

const Routing = ($urlRouterProvider, $locationProvider) => {
  $urlRouterProvider.otherwise('/');
};

PromoStore.config(['$urlRouterProvider', '$locationProvider', Routing]);


