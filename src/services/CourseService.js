let _singleton = Symbol();
const COURSE_API_URL =
    'https://webdev-summer-2018-dt.herokuapp.com/api/course';
class CourseService {
    constructor(singletonToken) {
        if (_singleton !== singletonToken)
            throw new Error('Cannot Instantiate Directly')

    }
    static get instance() {
        if (!this[_singleton])
            this[_singleton] = new CourseService(_singleton)
        return this[_singleton]
    }
    findAllCourses(){
        return fetch(COURSE_API_URL)
        .then(function(response){
            return response.json()
        });
    }
    createCourse(course){
        return fetch(COURSE_API_URL, {
            body: JSON.stringify(course),
            headers: {
                'Content-Type' : 'application/json'
            },
            method: 'POST'

        }).then (function(response){
            return response.json();
        })
    }
    deleteCourse(courseId){
        let url = COURSE_API_URL.concat('/').concat(courseId);
        console.log('Delete URL ', url)
         return fetch(url, {
            headers: {
                'Content-Type' : 'application/json'
            },
            method: 'DELETE'
  
         })
    }
}

export default CourseService;