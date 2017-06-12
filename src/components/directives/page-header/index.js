import angular from "angular";
import PageHeaderController from "./controller";

export default angular.module("PromoStore.Directives.PageHeader", [])
  .controller("PageHeaderController", ["$scope", "CartFactory", PageHeaderController])
  .directive("pageHeader", () => {
    return {
      restrict: "E",
      template: require("./template.html"),
      controller: "PageHeaderController"
    }
  }).name;
  