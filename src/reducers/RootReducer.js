import {LoginReducer} from './LoginReducer'
import {WidgetReducer} from './WidgetReducer'
import {UserReducer} from './UserReducer'
import {combineReducers} from 'redux'

const RootReducer = combineReducers({
    WidgetReducer: WidgetReducer,   
    LoginReducer: LoginReducer,
    UserReducer: UserReducer
});
export default RootReducer