var initialLegos = [
    {
        clickCount : 0,
        name : 'Grand Carousel',
        imgSrc : 'img/Creator-Carousel-10196-2.jpg',
        imgAttribution : 'https://www.lego.com'
    },
    {
        clickCount : 0,
        name : 'Cargo Train',
        imgSrc : 'img/7939.png',
        imgAttribution : 'https://www.lego.com'
    },
    {
        clickCount : 0,
        name : "Santa's Workshop",
        imgSrc : 'img/LEGO-2014-Winter-Village-Santas-Workshop-10245-Set-e1408126000342.jpg',
        imgAttribution : 'https://www.lego.com'
    },
    {
        clickCount : 0,
        name : 'Grand Emporium',
        imgSrc : 'img/10211.png',
        imgAttribution : 'https://www.lego.com'
    },
    {
        clickCount : 0,
        name : 'MINI Cooper',
        imgSrc : 'img/q3i6vycvluxercnyv5sy.jpg',
        imgAttribution : 'https://www.lego.com'
    },
    {
        clickCount : 0,
        name : 'Town Hall',
        imgSrc : 'img/10224_Back_01.jpg',
        imgAttribution : 'https://www.lego.com'
    }
]



var app = angular.module('myApp', []);
app.controller('myCtrl', function($scope) {
    $scope.legos = initialLegos;
    $scope.currentLego = initialLegos[0];
    $scope.setCurrentLego = function(lego) {
    	$scope.currentLego = lego;
    };
    $scope.increaseCounter = function() {
    	$scope.currentLego.clickCount++;
    }
});

