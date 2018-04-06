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

angular
    .module("FilterModule", [])
    .controller("FilterController", function ($scope) {
        $scope.employees = [
            {name: "Ben", dateOfBirth: new Date("November 23, 1980"), gender: "Male", salary: 55000.788},
            {name: "Sara", dateOfBirth: new Date("May 05, 1970"), gender: "Female", salary: 75000},
            {name: "Mark", dateOfBirth: new Date("August 15, 1974"), gender: "Male", salary: 50000},
            {name: "Pam", dateOfBirth: new Date("October 27, 1979"), gender: "Female", salary: 50000},
            {name: "Todd", dateOfBirth: new Date("December 30, 1983"), gender: "Male", salary: 60000}
        ];

        $scope.rowLimit = 3;
        $scope.sortColumn = "name";
        $scope.reverseSort = false;

        $scope.sortData = function (column) {
            $scope.reverseSort = ($scope.sortColumn === column) ? !$scope.reverseSort : false;
            $scope.sortColumn = column;
        };

        $scope.getSortClass = function (column) {
            if ($scope.sortColumn === column)
                return $scope.reverseSort ? 'arrow-down' : 'arrow-up';

            return '';
        };
    });

angular
    .module("SearchModule", [])
    .controller("SearchController", function ($scope) {
        $scope.employees = [
            {name: "Ben",  gender: "Male", salary: 55000, city: "London"},
            {name: "Sara", gender: "Female", salary: 60000, city: "Chennai"},
            {name: "Mark", gender: "Male", salary: 57000, city: "London"},
            {name: "Pam",  gender: "Female", salary: 70000, city: "New York"},
            {name: "Todd", gender: "Male", salary: 95000, city: "Amman"}
        ]
    });

angular
    .module("MultiSearchModule", [])
    .controller("MultiSearchController", function ($scope) {
        $scope.employees = [
            {name: "Ben",  gender: "Male", salary: 55000, city: "London"},
            {name: "Sara", gender: "Female", salary: 60000, city: "Chennai"},
            {name: "Mark", gender: "Male", salary: 57000, city: "London"},
            {name: "Pam",  gender: "Female", salary: 70000, city: "New York"},
            {name: "Todd", gender: "Male", salary: 95000, city: "Amman"}
        ];

        $scope.search = function (item) {

            if ($scope.searchText === undefined)
                return true;
            else {
                if (item.name.toLowerCase().indexOf($scope.searchText.toLowerCase()) != -1 ||
                    item.city.toLowerCase().indexOf($scope.searchText.toLowerCase()) != -1)
                    return true;
            }

            return false;
        };
    });

angular
    .module("CustomFilterModule", [])
    .filter("gender", function () {
        return function (gender) {
            switch (gender) {
                case 1:
                    return "Male";
                case 2:
                    return "Female";
            }
        }
    })
    .controller("CustomFilterController", function ($scope) {
        $scope.employees = [
            {name: "Ben",  gender: 1, salary: 55000, city: "London"},
            {name: "Sara", gender: 2, salary: 60000, city: "Chennai"},
            {name: "Mark", gender: 1, salary: 57000, city: "London"},
            {name: "Pam",  gender: 2, salary: 70000, city: "New York"},
            {name: "Todd", gender: 1, salary: 95000, city: "Amman"}
        ];
    });

angular
    .module("HideShowModule", [])
    .controller("HideShowController", function ($scope) {
        $scope.employees = [
            {name: "Ben",  gender: "Male", salary: 55000, city: "London"},
            {name: "Sara", gender: "Female", salary: 60000, city: "Chennai"},
            {name: "Mark", gender: "Male", salary: 57000, city: "London"},
            {name: "Pam",  gender: "Female", salary: 70000, city: "New York"},
            {name: "Todd", gender: "Male", salary: 95000, city: "Amman"}
        ];
    });