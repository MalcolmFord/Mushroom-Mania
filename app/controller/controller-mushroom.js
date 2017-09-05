'use strict';
console.log('shroomCtrl');

app.controller('mushroomFactory', function($scope, mushroomFactory) {
    mushroomFactory.getMushrooms()
        .then(function(itemCollection) {
            // push items to array for search funtionality
            let shroomArray = [];
            let shrooms = Object.keys(itemCollection);
            shrooms.forEach((item) => {
                shroomArray.push(itemCollection[item]);
            });
            console.log('Shrooms', itemCollection);
            $scope.shrooms = shroomArray;
        });
});