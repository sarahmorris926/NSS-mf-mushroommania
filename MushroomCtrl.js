'use strict';

app.controller("MushroomCtrl", function($scope, MushroomFactory) {
  MushroomFactory.getMushrooms()
  .then( (mushData) => {
    console.log('mushData', mushData);
    $scope.mushList = mushData.data.mushrooms;
  });
});