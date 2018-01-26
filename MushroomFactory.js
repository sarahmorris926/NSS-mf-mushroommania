"use strict";

angular.module("MushroomStuff").factory("MushroomFactory", function($q, $http) {
  let getMushrooms = () => {
    return $q((resolve, reject) => {
      $http
        .get("https://mush-mania.firebaseio.com/mushrooms.json")
        .then(mushrooms => {
          resolve(mushrooms);
        })
        .catch(err => {
          reject(err);
        });
    });
  };

  return { getMushrooms };
  
  
});
