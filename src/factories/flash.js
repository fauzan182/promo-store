class Flash {
  
  constructor () {
    this.message = null;
    this.type = null;
    this.strongMessage = null;
  }
  
  showMessage (msg, type) {
    this.message = msg;
    this.type = type;
    this.strongMessage = this._setStrongMessage();
  }
  
  reset () {
    this.message = null;
    this.type = null;
    this.strongMessage = null;
  }
  
  _setStrongMessage () {
    switch (this.type) {
      case "danger":
        return "Oh snap!";
      case "warning":
        return "Warning";
      case "info":
        return "Heads up!";
      case "success":
        return "Well done!";
      default:
        return ""
    }
  }
}

export default angular.module("PromoStore.Factories.Flash", [])
  .config(['$provide', ($provide) => {
    $provide.factory("FlashFactory", Flash)
  }]).name;