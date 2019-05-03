import {SAVE_WIDGETS, ADD_WIDGET, FIND_ALL_WIDGETS, DELETE_WIDGET, HEADING_SIZE_CHANGED, HEADING_TEXT_CHANGED} from '../constants/index'

export const WidgetReducer = (state = {widgets:[]}, action) => {
    switch (action.type) {
        case HEADING_SIZE_CHANGED:
            return {
                widgets: state.widgets.map(widget=> {
                    if(widget.id === action.id){
                        widget.size = action.size
                    }
                    return Object.assign({},widget)
                })
            }

        case HEADING_TEXT_CHANGED:
        return {
            widgets: state.widgets.map(widget=> {
                if(widget.id === action.id){
                    widget.text = action.text
                }
                return Object.assign({},widget)
            })
        }

        case 'SELECT_WIDGET_TYPE':
            let newState={
                widgets:state.widgets.filter((widget) =>{
                    if(widget.id === action.id){
                        widget.widgetType = action.widgetType
                    }
                    return true;
                })
            }
            return JSON.parse(JSON.stringify(newState)) 

        case SAVE_WIDGETS:
        fetch('https://webdev-summer-2018-dt.herokuapp.com/api/widget/save/', {
            method: 'post',
            body: JSON.stringify(state.widgets),
            headers: {
                'content-type': 'application/JSON'}
            }
            
        )
        return state;

        case FIND_ALL_WIDGETS:
        return{
            widgets:action.widgets
        }

        case ADD_WIDGET:
            return {
                widgets: [
                    ...state.widgets,
                    { id: state.widgets.length + 1, 
                        name: 'New Widget',
                        text: 'some text',
                        widgetType: 'Paragraph',
                        dtype: 'Widget',
                        src : 'CourseManager' 
                    }
                ]
            }

        case DELETE_WIDGET:
            return {
                widgets: state.widgets.filter(widget => {
                    return widget.id !== action.id
                })
            }
        
        default:
        console.log('WidgetReducer State ', state)
            return state
    }
}