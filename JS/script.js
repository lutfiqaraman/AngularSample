angular
    .module("myModule", [])
    .controller("myController", function ($scope) {
        $scope.employee = {
            FirstName : "Mark",
            LastName : "Davis",
            Gender: "Male"
        };
    });

angular
    .module("PhotoInfoModule", [])
    .controller("PhotoInfoController", function ($scope) {
        $scope.photoinfo = {
           name: "Auckland Metro",
           city: "Auckland",
           photo: "img/auckland.jpg"
        };
    });

angular
    .module("TWBModule", [])
    .controller("TWBController", function ($scope) {
        $scope.Emp = {
            firstName: "Sara",
            lastName: "Philip",
            gender: "Female"
        };
    });

angular
    .module("NGRepeatModule", [])
    .controller("NGRepeatController", function ($scope) {
        $scope.employees = [
            {firstName: "Ben", lastName: "Liberman", gender: "Male", salary: 55000},
            {firstName: "Sara", lastName: "Wiseman", gender: "Female", salary: 60000},
            {firstName: "Mark", lastName: "BlackSmith", gender: "Male", salary: 70000},
            {firstName: "Kim", lastName: "Hugeman", gender: "Female", salary: 75000},
            {firstName: "Nadine", lastName: "Oralman", gender: "Male", salary: 105000}];
    });

angular
    .module("NGNeastedRepeatModule", [])
    .controller("NGNeastedRepeatController", function ($scope) {
        $scope.countries = [
            {
                name: "UK",
                cities: [
                    {name: "London"},
                    {name: "Manchester"},
                    {name: "Birmingham"}]
                },

            {
                name: "Jordan",
                cities: [
                    {name: "Amman"},
                    {name: "Irbid"}]
                },

            {
                name: "UAE",
                cities: [
                    {name: "Abu Dhabi"},
                    {name: "Dubai"},
                    {name: "Sharjah"},
                    {name: "Al-Ain"}]
            }];
    });

angular
    .module("HEModule", [])
    .controller("HEController", function ($scope) {

        $scope.technologies = [
                {name: "C#", likes: 0, dislikes: 0},
                {name: "Java", likes: 0, dislikes: 0},
                {name: "JavaScript", likes: 0, dislikes: 0},
                {name: "Python", likes: 0, dislikes: 0}];

        $scope.increase_likes = function (technology) {
                technology.likes++;
        };

        $scope.increase_dislikes = function (technology) {
                technology.dislikes++;
        };
    });