app.service('TranslatorsService',['$http', function ($http) {

    this.getTranslator = function getTranslator(translatorId){
        return $http({
            method: 'GET',
            url: 'translator/'+ translatorId
        });
    }

    this.addTranslator = function addTranslator(name, email, sourceLanguage, targetLanguage){
        return $http({
            method: 'POST',
            url: 'translator',
            data: {
                name:name,
                email:email,
                sourceLanguage:sourceLanguage,
                targetLanguage:targetLanguage
            }
        });
    }

    this.deleteTranslator = function deleteTranslator(id){
        return $http({
            method: 'DELETE',
            url: 'translator/'+ id
        })
    }

    this.updateTranslator = function updateTranslator(id, name, email, sourceLanguage, targetLanguage){
        console.log(id);
        return $http({
            method: 'PUT',
            url: 'translator/'+ id,
            data: {name:name, email:email, sourceLanguage:sourceLanguage, targetLanguage:targetLanguage}
        })
    }

    this.getAllTranslators = function getAllTranslators(){
        return $http({
            method: 'GET',
            url: 'translator'
        });
    }

}]);