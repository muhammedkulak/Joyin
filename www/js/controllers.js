angular.module('starter.controllers', [])

.controller('DashCtrl', function($scope) {})
.controller('SearchCtrl', function($scope, $ionicSlideBoxDelegate) {
  $ionicSlideBoxDelegate.enableSlide(false);
  $scope.popular = function() {
    $ionicSlideBoxDelegate.next();
      $ionicSlideBoxDelegate.enableSlide(false);
var myEl = angular.element( document.querySelector( '#latest' ) );
myEl.css('color','#ccc');
var myEl = angular.element( document.querySelector( '#popular' ) );
myEl.css('color','#444');
  };
  $scope.latest = function() {
          $ionicSlideBoxDelegate.enableSlide(false);

    $ionicSlideBoxDelegate.previous();
     var myEl = angular.element( document.querySelector( '#latest' ) );
myEl.css('color','#444');
var myEl = angular.element( document.querySelector( '#popular' ) );
myEl.css('color','#ccc');
  };
})
.controller('ChatsCtrl', function($scope, Chats, $ionicModal, $timeout, $ionicPopover) {
 
  $scope.loginData = {};

  // Create the login modal that we will use later
  $ionicModal.fromTemplateUrl('templates/login.html', {
    scope: $scope
  }).then(function(modal) {
    $scope.modal = modal;
  });
$scope.doRefresh = function() {
    $http.get('/new-items')
     .success(function(newItems) {
       $scope.items = newItems;
     })
     .finally(function() {
       // Stop the ion-refresher from spinning
       $scope.$broadcast('scroll.refreshComplete');
     });
  };
  // Triggered in the login modal to close it
  $scope.closeLogin = function() {
    $scope.modal.hide();
  };

  // Open the login modal
  $scope.login = function() {
    $scope.modal.show();
  };

  // Perform the login action when the user submits the login form
  $scope.doLogin = function() {
    console.log('Doing login', $scope.loginData);

    // Simulate a login delay. Remove this and replace with your login
    // code if using a login system
    $timeout(function() {
    
    }, 1);
  };

  $scope.chats = Chats.all();
  $scope.remove = function(chat) {
    Chats.remove(chat);
  };

  // .fromTemplate() method
  var template = '<ion-popover-view><ion-header-bar align-title="center"> <h1 class="title">What do you want ?</h1> </ion-header-bar> <ion-content overflow-scroll="false" scrollbar-y="false"><div class="list"><a class="item item-icon-right" href="#">Talking<i class="icon ion-chatbubble-working"></i></a><a class="item item-icon-right" href="#">Travel<i class="icon ion-map"></i></a><a class="item item-icon-right" href="#">Shopping<i class="icon ion-bag"></i></a><a class="item item-icon-right" href="#">Camping<i class="icon ion-bonfire"></i></a><a class="item item-icon-right" href="#">Drinks<i class="icon ion-wineglass"></i></a><a class="item item-icon-right" href="#">Eating<i class="icon ion-pizza"></i></a></div></ion-content></ion-popover-view>';

  $scope.popover = $ionicPopover.fromTemplate(template, {
    scope: $scope
  });

  // .fromTemplateUrl() method
  $ionicPopover.fromTemplateUrl('my-popover.html', {
    scope: $scope
  }).then(function(popover) {
    $scope.popover = popover;
  });


  $scope.openPopover = function($event) {
    $scope.popover.show($event);
  };
  $scope.closePopover = function() {
    $scope.popover.hide();
  };
  //Cleanup the popover when we're done with it!
  $scope.$on('$destroy', function() {
    $scope.popover.remove();
  });
  // Execute action on hide popover
  $scope.$on('popover.hidden', function() {
    // Execute action
  });
  // Execute action on remove popover
  $scope.$on('popover.removed', function() {
    // Execute action
  });
})

.controller('ChatDetailCtrl', function($scope, $stateParams, Chats) {
  $scope.chat = Chats.get($stateParams.chatId);
})

.controller('AccountCtrl', function($scope) {
  $scope.settings = {
    enableFriends: true
  };

});
