import React from 'react'
import ReactDOM from 'react-dom'
import '../node_modules/bootstrap/dist/css/bootstrap.css'
import '../node_modules/font-awesome/css/font-awesome.min.css'
import { createStore } from 'redux';
import { Provider} from 'react-redux'
import RootReducer from './reducers/RootReducer'
import App from './containers/CourseManager';
import {LoginReducer} from './reducers/LoginReducer'

export let store = createStore(RootReducer);

ReactDOM.render(     
<Provider store={store}>
    <App />
</Provider>,
document.getElementById('root')
);
