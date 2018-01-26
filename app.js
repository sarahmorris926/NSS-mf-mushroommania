'use strict';

const app = angular.module('mushroomStuff', []);

app.controller('MushroomCtrl', function($scope, $q, $http) {
  const printMushrooms = (mushroomsToShow) => {
    $scope.mushroomList = mushroomsToShow;
  };
  let getMushrooms = () => {
    return $q( (resolve, reject) => {
      $http.get(mushrooms.json)
      .then((mushrooms) => {
        resolve(mushrooms);
      })
      .catch((err) => {
        reject(err);
      });
    });
  };

  getMushrooms()
  .then( (mushroomData) => {
    let mushroomArr = [];
    for (let currentMushroom in mushroomData.data.mushrooms) {
      mushroomArr.push(mushroomData.data.mushrooms[currentMushroom]);
    }
    printMushrooms(mushroomArr);
  });

  $scope.showPoisonous = () => {
    const badMushrooms = [];
    getMushrooms()
    .then( (mushroomData) => {
      for(let currentMushroom in mushroomData.data.mushrooms) {
        let mushroom = mushroomData.data.mushrooms[currentMushroom];
        if (mushroom.edible !== true) {
          badMushrooms.push(mushroom);
        }
      }
      printMushrooms(badMushrooms);
    });
  };

  $scope.showNonpoisonous = () => {
    const goodMushrooms = [];
    getMushrooms()
    .then( (mushroomData) => {
      for(let currentMushroom in mushroomData.data.mushrooms) {
        let mushroom = mushroomData.data.mushrooms[currentMushroom];
        if (mushroom.edible === true) {
          goodMushrooms.push(mushroom);
        }
      }
      printMushrooms(goodMushrooms);
    });
  };


});



