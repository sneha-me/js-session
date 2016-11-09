var orderForm = angular.module("orderForm",[]);
orderForm.controller("OrderFormController", function($scope){
  alert('hello')
  $scope.orderServices = [
    {
      name: 'Web developement',
      price: 300,
      active: true
    },
    {
      name: 'Design',
      price: 400,
      active: false
    },
    {
      name: 'Integration',
      price: 250,
      active: false
    },
    {
      name: 'Training',
      price: 220,
      active: false
    }
  ];
  
});

