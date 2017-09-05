/*
********************************************
    This page will pull data from firebase
********************************************
*/

'use strict';

app.factory('mushroomFactory', function($q, $http) {
    // getting the mushroom data from firebase

    let getMushrooms = () => {
        return $q((resolve, reject) => {
            $http.get('https://mushroom-mania-b631e.firebaseio.com/mushrooms.json')
                .then((itemObj) => {
                    let itemCollection = itemObj.data;
                    resolve(itemCollection);
                })
                .catch((error) => {
                        reject(error);
                    }

                );
        });
    };
    return { getMushrooms };
});