import template from "./template.html";

const alertClass = (type) => {
  switch (type) {
    case "danger":
      return "alert-danger";
    case "warning":
      return "alert-warning";
    case "info":
      return "alert-info";
    case "success":
      return "alert-success";
    default:
      return "alert-info"
  }
}
export default ($scope, $compile, $element, $timeout, FlashFactory) => {
  
  $scope.message = "";
  $scope.strongMessage = "";
  $scope.alertClass = "";
  
  
  $scope.$watch(() => {
    return FlashFactory;
  }, (newMessages, oldMessages) => {
    $scope.message = newMessages.message;
    $scope.strongMessage = newMessages.strongMessage;
    $scope.alertClass = alertClass(newMessages.type);
    
    if(!!$scope.message) {
      let tmpl = $compile(template)($scope);
      $element.append(tmpl)
      
      $timeout(()=> {
        $element.empty();
        FlashFactory.reset()
      }, 2000)
    }
    
    
  }, true);
  
}