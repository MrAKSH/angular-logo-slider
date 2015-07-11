/**
 * Created by worldwide on 7/11/2015.
 */
// Code goes here

(function(){
  'use strict';

  var app = angular.module('directiveApp',[])




  app.directive('logoSlider', function(){
    return{
      restrict : 'A',

      link : function(scope, element, attrs){
        $(element).bxSlider(scope.$eval(attrs.logoSlider));
      }
    }
  })

})();