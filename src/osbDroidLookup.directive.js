'use strict';

angular.module('sistem3.osb-droid-lookup', ['osb-droid-lookup-template'])
  .directive('osbDroidLookup', ['$http', '$q', function ($http, $q) {
    return {
      templateUrl: 'osbDroidLookup.tpl.html',
      restrict: 'EA',
      link: function ($scope, element, attrs) {
        //console.log('Loading Star Wars Lookup directive');
        var baseUrl = 'http://swapi.co/api/';
        var wikiBaseUrl = 'http://en.wikipedia.org/w/api.php?action=query';
        var wookieBaseUrl = '//starwars.wikia.com/api/v1';
        $scope.starWarsLookup = {};
        $scope.starWarsLookup.loadPercentage = 0;
        $scope.starWarsLookup.isLoading = true;
        $scope.starWarsLookup.hasLoaded = false;
        $scope.starWarsLookup.sectionLoaded = false;
        $scope.starWarsLookup.sections = [
          {
            'title':'Planets',
            'url':'planets',
            'thumbnail':'http://osbproductions.co.uk/assets/images/directives/star-wars-lookup/planetsThumb.png',
            'desc':'Find out more about the planets within the Star Wars franchise',
            'icon':'fa fa-globe'
          },
          {
            'title':'People',
            'url':'people',
            'thumbnail':'http://osbproductions.co.uk/assets/images/directives/star-wars-lookup/peopleThumb.png',
            'desc':'Find out more about the individuals within the Star Wars franchise',
            'icon':'sw-icon icon-darth'
          },
          {'title':'Vehicles','url':'vehicles','thumbnail':'http://osbproductions.co.uk/assets/images/directives/star-wars-lookup/vehiclesThumb.png','desc':'Find out more about the vehicles within the Star Wars franchise','icon':'fa fa-rebel'},
          {'title':'Starships','url':'starships','thumbnail':'http://osbproductions.co.uk/assets/images/directives/star-wars-lookup/shipsThumb.png','desc':'Find out more about the star ships within the Star Wars franchise','icon':'sw-icon icon-death-star'},
          {'title':'Species','url':'species','thumbnail':'http://osbproductions.co.uk/assets/images/directives/star-wars-lookup/speciesThumb.png','desc':'Find out more about the species within the Star Wars franchise','icon':'sw-icon icon-wookie'},
          {'title':'Films','url':'films','thumbnail':'http://osbproductions.co.uk/assets/images/directives/star-wars-lookup/filmsThumb.png','desc':'Find out more about the films within the Star Wars franchise','icon':'fa fa-film'}
        ];

        $scope.starWarsLookup.images = [
          ('http://osbproductions.co.uk/assets/images/directives/star-wars-lookup/background.jpg'),
          ('http://osbproductions.co.uk/assets/images/directives/star-wars-lookup/filmsThumb.png'),
          ('http://osbproductions.co.uk/assets/images/directives/star-wars-lookup/peopleThumb.png'),
          ('http://osbproductions.co.uk/assets/images/directives/star-wars-lookup/planetsThumb.png'),
          ('http://osbproductions.co.uk/assets/images/directives/star-wars-lookup/shipsThumb.png'),
          ('http://osbproductions.co.uk/assets/images/directives/star-wars-lookup/speciesThumb.png'),
          ('http://osbproductions.co.uk/assets/images/directives/star-wars-lookup/vehiclesThumb.png')
        ];

        $scope.starWarsLookup.modal = {};
        $scope.starWarsLookup.modal.open = false;

        // Pre load images
        /*preloader.preloadImages($scope.starWarsLookup.images).then(
          function handleResolve(imageLocations) {
            // Loading was successful.
            $scope.starWarsLookup.isLoading = false;
            $scope.starWarsLookup.hasLoaded = true;
            //console.info('Preload Successful');
          },
          function handleReject(imageLocation) {
            // Loading failed on at least one image.
            $scope.starWarsLookup.isLoading = false;
            $scope.starWarsLookup.hasLoaded = false;
            //console.error('Image Failed', imageLocation);
            //console.info('Preload Failure');
          },
          function handleNotify(event) {
            $scope.starWarsLookup.loadPercentage = event.percent;
            //console.info('Percent loaded:', event.percent);
          }
        );*/

        $scope.starWarsLookup.getSectionData = function(section) {
          $scope.starWarsLookup.sectionData = [];
          $scope.starWarsLookup.sectionName = section.title;
          $scope.starWarsLookup.sectionLoaded = false;
          $http.get(baseUrl + section.url).then(function(data) {
            //console.log(data.data);
            angular.forEach(data.data.results, function(key, value) {
              //$scope.starWarsLookup.getThumbnail(key.name);
              this.push(key);
            }, $scope.starWarsLookup.sectionData);
            $scope.starWarsLookup.sectionLoaded = true;
          });
        };

        $scope.starWarsLookup.getThumbnail = function(searchName) {
          fetch(wookieBaseUrl + '/Search/List/?query=' + searchName + '&limit=25', {
                mode: 'no-cors',
                headers: {
                  'Accept': 'application/json; charset=utf-8'
                }
              })
              .then(function(response) {
                console.log(response);
                return response.json();
              }).then(function(data) {
                console.log(data);
              }).catch(function() {
                console.log("Booo");
              });
        };

        $scope.starWarsLookup.getThumbnail('Luke Skywalker');

        $scope.starWarsLookup.getContentExtract = function(searchName) {
          var deferred = $q.defer();
          $http({
            url: wikiBaseUrl + '&titles=' + searchName + '&prop=extracts&rawcontinue&format=json&callback=JSON_CALLBACK',
            method: 'jsonp'
          }).success(function(data) {
            //console.log(data.query.pages);
            var pageExtract;
            angular.forEach(data.query.pages, function(key, value) {
              //console.log(key);
              pageExtract = key;
            });
            deferred.resolve(pageExtract);
          });
          return deferred.promise;
        };

        $scope.starWarsLookup.getFurtherInfo = function(searchName) {
          $scope.starWarsLookup.getContentExtract(searchName).then(function(data){
            //console.log(data);
            $scope.starWarsLookup.modal.modalContent = data;
            $scope.starWarsLookup.modal.open = true;
          });

          $scope.starWarsLookup.getThumbnail(searchName).then(function(data){
            //console.log(data);
            $scope.starWarsLookup.modal.modalThumb = data;
          });
        };

        $scope.starWarsLookup.modal.closeModal = function() {
          $scope.starWarsLookup.modal.open = false;
        };
      }
    };
  }]);
