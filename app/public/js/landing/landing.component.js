(function() {
  'use strict';



  angular.module('app')
    .component('landing', {
      controller: LandingController,
      templateUrl: '/js/landing/landing.template.html'
    });

    LandingController.$inject = ['$http', '$state', '$stateParams'];

    function LandingController($http, $state, $stateParams){
      const vm = this;

      vm.$onInit = onInit;

      function getArrayLength(fromOrigin) {
        var length = 1;

        if (fromOrigin >= 500) {
          length = 400;
        } else {
          length = Math.floor((fromOrigin/5) * 4);
        }
        if (length < 1) {
          length = 1;
        }

        return(length);
      }

      function getArrayX (xValue, shadowLength, originArr) {
        var xArr = [];
        let counter = 1;
        let toLeft = false;
        let stepSizeX = 1;

        if (xValue > originArr[0]) {
          toLeft = true;
          stepSizeX = (xValue - originArr[0])/shadowLength;
        } else {
          toLeft = false;
          stepSizeX = (originArr[0] - xValue)/shadowLength;
        }
        stepSizeX = stepSizeX/10;
        for (let i = 0; i < shadowLength; i++) {
          xArr[i] = Math.floor(counter);
          if (toLeft) {
            counter -= stepSizeX;
          } else {
            counter += stepSizeX;
          }
        }
        return (xArr);
      }

      function getArrayY(yValue, shadowLength, originArr) {
        var yArr = [];
        let counter = 1;
        let toTop = false;
        let stepSizeY = -1;

        if (yValue > originArr[1]) {
          toTop = true;
          stepSizeY = (yValue - originArr[1])/shadowLength;
        } else {
          toTop = false;
          stepSizeY = (originArr[1] - yValue)/shadowLength;
        }
        stepSizeY = stepSizeY/10;
        for (let i = 0; i < shadowLength; i++) {
          yArr[i] = Math.floor(counter);
          if (toTop) {
            counter -= stepSizeY;
          } else {
            counter += stepSizeY;
          }
        }
        return (yArr);
      }

      function getArrayZ(shadowLength) {
        var zArr = [];
        zArr[0] = 0;
        for (let i = 1; i < shadowLength; i++) {
          zArr[i] = 1;
        }

        return (zArr);
      }

      function getArrayShade(shadowLength) {
        var shadeArr = [];
        var shades = ['#767676', '#737272', '#767474', '#787777', '#7b7a7a', '#7f7d7d', '#828181', '#868585', '#8b8a89', '#8f8e8d', '#949392', '#999897', '#9e9c9c', '#a3a1a1', '#a8a6a6', '#adabab', '#b2b1b0', '#b7b6b5', '#bcbbba', '#bcbbba', '#c1bfbf', '#c6c4c4', '#cbc9c8', '#cfcdcd', '#d4d2d1', '#d8d6d5', '#dbdad9', '#dfdddc', '#e2e0df', '#e4e3e2'];

        for (let i = 0; i < shadowLength; i++) {
          shadeArr[i] = shades[Math.floor((i/shadowLength) * shades.length)];
        }

        return (shadeArr);
      }

      function getShadeString(xArr, yArr, zArr, shadeArr, shadowLength) {
        var styleStr = "text-shadow: ";
        styleStr += xArr[0] + 'px ' + yArr[0] +'px ' + zArr[0] + ' ' + shadeArr[0];
        if (shadowLength === 1) {
          styleStr += ';';
          return (styleStr);
        }
        for (let i = 1; i < shadowLength; i++) {
          styleStr += ', ';
          styleStr += xArr[i] + 'px ' + yArr[i] + 'px ' + zArr[i] + 'px ' + shadeArr[i];
        }
        styleStr +=';';

        return (styleStr);
      }

      function trackPointerCoordinates (centerPoints, name, title) {
        var x = event.clientX;     // Get the horizontal coordinate
        var y = event.clientY;     // Get the vertical coordinate
        // var coor = "X coords: " + x + ", Y coords: " + y;
        // console.log(coor);
        var distanceX = 0;
        var distanceY = 0;
        var distance = 0;
        if (x > centerPoints[0]) {
          distanceX = x - centerPoints[0];
        } else {
          distanceX = centerPoints[0] - x;
        }
        if (y > centerPoints[1]) {
          distanceY = y - centerPoints[1];
        } else {
          distanceY = centerPoints[1] - y;
        }
        distance = Math.floor(Math.sqrt((distanceX * distanceX) + (distanceY * distanceY)));
        var arrayLengths = getArrayLength(distance);
        var arrayX = getArrayX(x, arrayLengths, centerPoints);
        var arrayY = getArrayY(y, arrayLengths, centerPoints);
        var arrayZ = getArrayZ(arrayLengths);
        var arrayShade = getArrayShade(arrayLengths);
        var shadeString = getShadeString(arrayX, arrayY, arrayZ, arrayShade, arrayLengths);
        name.setAttribute("style", shadeString);
        title.setAttribute("style", shadeString);
      }


      function onInit() {
        console.log("Landing is lit");
        var shadows = document.getElementById('shadowZone');
        var myName = document.getElementById('myName');
        var fullStack = document.getElementById('fullStackDeveloper');
        var rect = shadows.getBoundingClientRect();
        var centerShadow = [];
        centerShadow[0] = (rect.width/2) + rect.left;
        centerShadow[1] = (rect.height/2) + rect.top;
        document.addEventListener('mousemove', ()=>{
          trackPointerCoordinates(centerShadow, myName, fullStack);
        });

      }

    }

}());
