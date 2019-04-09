import React from 'react'
import ReactDOM from 'react-dom'
import '../node_modules/bootstrap/dist/css/bootstrap.css'
import '../node_modules/font-awesome/css/font-awesome.min.css'
import { createStore } from 'redux';
import { Provider} from 'react-redux'
import {LoginReducer} from './reducers/LoginReducer'
import {App} from './AppLogin/Login'
import CourseManager from './containers/CourseManager';

export let store = createStore(LoginReducer);

ReactDOM.render(     
<Provider store={store}>
    <CourseManager />
</Provider>,
document.getElementById('root')
);
