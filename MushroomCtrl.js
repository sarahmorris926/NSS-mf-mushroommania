"use strict";

angular
  .module("MushroomStuff")
  .controller("MushroomCtrl", function($scope, MushroomFactory) {
    //
    const printMushrooms = mushroomsToShow => {
      $scope.mushroomList = mushroomsToShow;
    };

    // convert mushroom obj to array

    const convertToArray = mushroomData => {
      const mushroomArr = [];
      for (let currentMushroom in mushroomData.data) {
        mushroomArr.push(mushroomData.data[currentMushroom]);
      }
      return mushroomArr;
    };

    // print total mushrooms
    MushroomFactory.getMushrooms()
    .then(mushroomData => {
      const mushroomArr = convertToArray(mushroomData);
      printMushrooms(mushroomArr);
    });

    $scope.showPoisonous = () => {
      MushroomFactory.getMushrooms()
      .then(mushroomData => {
        const mushroomArr = convertToArray(mushroomData);
        const badMushrooms = mushroomArr.filter(mushroom => mushroom.edible !== true)
        printMushrooms(badMushrooms);
      });
    };

    $scope.showNonpoisonous = () => {
      MushroomFactory.getMushrooms()
      .then(mushroomData => {
        const mushroomArr = convertToArray(mushroomData);
        const goodMushrooms = mushroomArr.filter(mushroom => mushroom.edible === true)
        printMushrooms(goodMushrooms);
      });
    };
  });

  
