/* global angular */

'use strict';

function Hello(){}

Hello.annotations = [
    new angular.ComponentAnnotation({
        selector: 'hello'
    }),
    new angular.ViewAnnotation({
        template: '<h1>Hello World</h1>'
    })
];

document.addEventListener('DOMContentLoaded', function () {
    angular.bootstrap(Hello);
});
