// Search controller that we use whenever we have a search inputs
// and search results
dinnerPlannerApp.controller('OverviewCtrl', function ($scope,Dinner) {

    // TODO in Lab 5: you will need to implement a method that searchers for dishes
    // including the case while the search is still running.

    $scope.selectedMenu = Dinner.getSelectedMenu();
    $scope.numberOfGuests = Dinner.getNumberOfGuests();
    $scope.getTotalCost = function(){
        return Dinner.getTotalPrice() * Dinner.getNumberOfGuests();
    }
});
