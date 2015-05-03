'use strict';

angular.module('insulinum')
.controller('mainController', function ($scope,$http,$timeout) {

    $http.get('assets/colors.json').success(function(data) {
        $scope.colors = data;
    });

    $http.get('http://localhost:5000/api/controls')
        .success(function(data, status, headers, config) {
            // this callback will be called asynchronously
            // when the response is available
            $scope.controlsAPI = data.controls;

    // $http.post('http://localhost:5000/api/controls', {
    //   "control" : {
    //       "date" : new Date(),
    //       "time" : new Date(),
    //       "glucose" : "80",
    //       "insulin" : "16",
    //       "type" : "quickly",
    //       "daytime" : "breakfast",
    //       "note" : "something that happen in this control :smiley: is everything I want #EverythingOK"
    //   }
    // }).
    //     success(function(data, status, headers, config) {
    //     // this callback will be called asynchronously
    //     // when the response is available
    //         alert('done')
    //     }).
    //     error(function(data, status, headers, config) {
    //     // called asynchronously if an error occurs
    //     // or server returns response with an error status.
    //         alert('bad')
    //     });
    $scope.controlsLength = $scope.controlsAPI.length;

    function avg(){
        var total = 0;
        angular.forEach($scope.controlsAPI, function(control) {
            // if(control.date == )
                total += control.glucose;
        });

        return total/$scope.controlsAPI.length;
    }

    $scope.avgWeek = avg();

    $scope.avgMonth = avg();
})
.error(function(data, status, headers, config) {
    // called asynchronously if an error occurs
    // or server returns response with an error status.
    alert('bad')
});

    $scope.labels = ["January", "February", "March", "April", "May", "June", "July","65"];

    $scope.series = ['Insulinum', 'Glucose'];

    $scope.data = [
        [65, 59, 80, 81, 56, 55, 40,65],
        [28, 48, 40, 19, 86, 27, 90,65]
    ];

    $scope.switchButton = true;

    $scope.$watch('switchButton', function(){
        $scope.switchControlChart = $scope.switchButton ? 'Controls' : 'Charts';
    });

    $scope.toggleCustom = function() {
        $scope.switchButton = $scope.switchButton === false ? true: false;
    };

    $scope.chartCard = [
        {
            'id':'line',
            'class':'chart-line',
            'name':'Linear chart',
            'date' : new Date(),
            'time' : new Date(),
            'note' : 'something that happen <3 in this control is everything I whant #EverythingOK'
        },
        {
            'id':'bar',
            'class':'chart-bar',
            'name':'Bar chart',
            'date' : new Date(),
            'time' : new Date(),
            'note' : 'something that happen in :P this control is everything I whant #EverythingOK'
        },
        {
            'id':'radar',
            'class':'chart-radar',
            'name':'Radar chart',
            'date' : new Date(),
            'time' : new Date(),
            'note' : 'something that happen in :/ this control is everything I whant #EverythingOK'
        },
        {
            'id':'pie',
            'class':'chart-pie',
            'name':'Pie chart',
            'date' : new Date(),
            'time' : new Date(),
            'note' : 'something that happen in this control is everything I whant #EverythingOK'
        }
    ];

    $timeout(function(){
        $scope.onClick = function (points, evt) {
            console.log(points, evt);
        };
    }, 3000);

});
