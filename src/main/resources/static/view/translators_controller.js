var app = angular.module('app',[]);

app.controller('TranslatorsController', ['$scope','TranslatorsService', function ($scope, TranslatorsService) {

    $scope.translator = {"id": 0, "name": "", "email": "", "sourceLanguage": "", "targetLanguage": ""};

    $scope.updateTranslator = function () {
        TranslatorsService.updateTranslator($scope.translator.id, $scope.translator.name, $scope.translator.email,
            $scope.translator.sourceLanguage, $scope.translator.targetLanguage)
            .then(function success(response){
                    $scope.message = 'Translator data updated!';
                    $scope.errorMessage = '';
                    location.reload();
                },
                function error(response){
                    $scope.errorMessage = 'Error updating translator!';
                    $scope.message = '';
                });
    }

    $scope.getTranslator = function () {
        var id = $scope.translator.id;
        TranslatorsService.getTranslator($scope.translator.id)
            .then(function success(response){
                    $scope.translator = response.data;
                    $scope.translator.id = id;
                    $scope.message='';
                    $scope.errorMessage = '';
                },
                function error (response ){
                    $scope.message = '';
                    if (response.status === 404){
                        $scope.errorMessage = 'Translator not found!';
                    }
                    else {
                        $scope.errorMessage = "Error getting translator!";
                    }
                });
    }

    $scope.addTranslator = function () {
        if ($scope.translator != null && $scope.translator.name && $scope.translator.email && $scope.translator.sourceLanguage
            && $scope.translator.targetLanguage) {
            TranslatorsService.addTranslator($scope.translator.name, $scope.translator.email, $scope.translator.sourceLanguage,
                $scope.translator.targetLanguage)
                .then (function success(response){
                        $scope.message = 'Translator added!';
                        $scope.errorMessage = '';
                        location.reload();
                    },
                    function error(response){
                        $scope.errorMessage = 'Error adding translator!';
                        $scope.message = '';
                    });
        }
        else {
            $scope.errorMessage = 'Please enter a name!';
            $scope.message = '';
        }
    }

    $scope.deleteTranslator = function () {
        TranslatorsService.deleteTranslator($scope.translator.id)
            .then (function success(response){
                    $scope.message = 'Translator deleted!';
                    $scope.translator = null;
                    $scope.errorMessage='';
                    location.reload();
                },
                function error(response){
                    $scope.errorMessage = 'Error deleting translator!';
                    $scope.message='';
                })
    }

    $scope.getAllTranslators = function () {
        TranslatorsService.getAllTranslators()
            .then(function success(response){
                    $scope.translators = response.data;
                    $scope.message='';
                    $scope.errorMessage = '';
                },
                function error (response){
                    $scope.message='';
                    $scope.errorMessage = 'Error getting translators!';
                });
    }
    $scope.getAllTranslators();

    $scope.selectTranslator = function (translator) {
        $scope.translator = translator;
    }
}]);