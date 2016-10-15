var app = angular.module('viewApp', ['ngRoute']);

app.config(function ($routeProvider) {
    $routeProvider
            .when("/person", {
                templateUrl: "views/person.html",
                controller: "PersonController"
            })
            .when("/people", {
                templateUrl: "views/persons.html",
                controller: "PersonsController"
            })
            .when("/info/:index", {
                templateUrl: "views/personDetail.html",
                controller: "PersonsController"
            })
            .otherwise({
                redirectTo: "/index"
            });
});


app.factory("personList", function(){
    var allPersons = [
        {id: 1, name: "Jens", age: 18}
        , {id: 2, name: "Peter", age: 23}
        , {id: 3, name: "Hanne", age: 23}
    ];
    return{
        getAll : function(){return allPersons; },
        addPerson : function(person){allPersons.push(person);},
        getTotal : function(){return allPersons.length;}
    };
});




app.controller("PersonsController",  function ($routeParams, $scope, personList ) {
    $scope.persons = personList.getAll();
    $scope.test = "bla";
    console.log("Testing things out");
    
    if (angular.isDefined($routeParams.index)) {
        var i = $routeParams.index;
        $scope.person = $scope.persons[i];
    };
});

app.controller("PersonController", function($routeParams){
    
});