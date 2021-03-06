import Template from './epgchart.html';

export default function ($stateProvider) {
    $stateProvider.state('epgdata_chart', {
        parent: 'main',
        url: '/epggraph',
        params: {},

        //controller: ['Restangular', '$scope', 'notification', (Restangular, $scope, notification) => {

        controller: function(Restangular,$scope, VisDataSet) {



            $scope.events = {
                //rangechange: $scope.onRangeChange,
                //rangechanged: $scope.onRangeChanged,
                //onload: $scope.onLoaded,
                select: $scope.onSelect,
                click: $scope.onClick,
                //doubleClick: $scope.onDoubleClick,
                //contextmenu: $scope.rightClick
            };



            $scope.onSelect = function(items) {
                // debugger;
                console.log('onselect: ',items);
            };

            $scope.onClick = function(items) {
                //debugger;
                console.log('click: ', items);
            };

            $scope.dragEnd = function(items) {
                //debugger;
                console.log('drag end: ',items);
            };

            $scope.onRangeChange = function(items) {
                //debugger;
                console.log('enter onrangechange: ',items);
            };

            //console.log(VisDataSet);

            $scope.options = {
                stack: false,
                start: new Date(),
                end: new Date(1000*60*60*24 + (new Date()).valueOf()),
                editable: true,
                orientation: 'top',

                // editable: {
                //     add: true,         // add new items by double tapping
                //     updateTime: true,  // drag items horizontally
                //     updateGroup: true, // drag items from one group to another
                //     remove: true,       // delete an item by tapping the delete button top right
                //overrideItems: false  // allow these options to override item.editable
                // }
            };

            $scope.events = {
                //rangechange: $scope.onRangeChange,
                //rangechanged: $scope.onRangeChanged,
                //onload: $scope.onLoaded,
                select: $scope.onSelect,
                click: $scope.onClick,
                dragEnd: $scope.dragEnd,
                //doubleClick: $scope.onDoubleClick,
                //contextmenu: $scope.rightClick
            };

            var items = [
                {x: '2014-06-11', y: 10},
                {x: '2014-06-12', y: 25},
                {x: '2014-06-13', y: 30},
                {x: '2014-06-14', y: 10},
                {x: '2014-06-15', y: 15},
                {x: '2014-06-16', y: 30}
            ];

            Restangular.one('epgdata_chart').get()
                .then(function successCallback(response) {
                    //console.log(response);
                    $scope.data_timeline = {"items":response.data.items,"groups":response.data.groups};
                },function errorCallback(response) {
                });

            //$scope.data = {"items":items};
            //$scope.data_timeline = {"items":items};


            //$scope.createPost = function () {
            //    Restangular.one('user/change-password').customPOST($scope.pwdata)
            //        .then(function successCallback(response) {
            //            notification.log(response.message, { addnCls: 'humane-flatty-success' });
            //        },function errorCallback(response) {
            //            notification.log(response.data.message, { addnCls: 'humane-flatty-error' });
            //        });
            //}
        },

        template: Template
    });
};