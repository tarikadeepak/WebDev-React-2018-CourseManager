let _singleton = Symbol();
let MODULE_API_URL = 'http://localhost:8080/api/course';
class ModuleService {
    constructor(singletonToken) {
        if (_singleton !== singletonToken)
            throw new Error('Cannot Instantiate Directly')

    }
    static get instance() {
        if (!this[_singleton])
            this[_singleton] = new ModuleService(_singleton)
        return this[_singleton]
    }
    findModulesByCourseId(courseId){
        let url = MODULE_API_URL.concat('/').concat(courseId).concat('/module');
        return fetch(url)
        .then(function(response){
            return response.json()
        });
    }
    createModule(courseId, module){
        let url = MODULE_API_URL.concat('/').concat(courseId).concat('/module');
        return fetch(url, {
            body: JSON.stringify(module),
            headers: {
                'Content-Type' : 'application/json'
            },
            method: 'POST'

        }).then (function(response){
            return response.json();
        })
    }
}

export default ModuleService;