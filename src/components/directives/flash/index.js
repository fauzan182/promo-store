import angular from "angular";
import FlashController from "./controller";

export default angular.module("PromoStore.Directives.Flash", [])
  .controller("FlashController", [
    "$scope", 
    "$compile",
    "$element",
    "$timeout",
    "FlashFactory", 
    FlashController
  ]).directive("flash", () => {
    return {
      restrict: "E",
      controller: "FlashController"
    }
  }).name;
  