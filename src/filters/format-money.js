import angular from "angular";
import Accounting from "accounting";

const formatMoney = () => {
  return (val) => (Accounting.formatMoney(val, "Rp ", 0, "."));
}

export default angular.module("PromoStore.Filters.FormatMoney", [])
  .filter("formatMoney", formatMoney).name;