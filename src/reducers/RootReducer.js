import {LoginReducer} from './LoginReducer'
import {WidgetReducer} from './WidgetReducer'
import {UserReducer} from './UserReducer'
import {combineReducers} from 'redux'

const RootReducer = combineReducers({
    LoginReducer: LoginReducer,
    WidgetReducer: WidgetReducer,   
    UserReducer: UserReducer
});
export default RootReducer