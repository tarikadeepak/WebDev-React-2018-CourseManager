import React from 'react';
import {connect } from 'react-redux'
import {findAllWidgets, saveWidgets, addWidget} from '../actions/index'
import {Widget} from '../components/Widget'
class WidgetList extends React.Component {
    constructor(props) {
        super(props)
        this.props.findAllWidgets(this.props.moduleId)
    }
    render() {
        console.log("WL Module Id ", this.props.moduleId)
        return (
            <div>
                <h1>Widget List {(this.props.widgets.length)}</h1>
                <button onClick={this.props.saveWidgets}>Save</button>
                <ul>
                    {this.props.widgets.map(widget => (
                        <WidgetContainer widget={widget}
                            key={widget.id} />
                    ))}
                </ul>
                <button onClick={this.props.addWidget}>Add</button>
            </div>
        )
    }
}

const WidgetContainer = connect()(Widget)

const stateToPropertiesMapper = (state) => (
    {
        widgets: state.WidgetReducer.widgets
    }
)

const dispatchToPropertiesMapper 
= dispatch => ({
        findAllWidgets: (moduleId) => findAllWidgets(dispatch, moduleId),
        addWidget: () => addWidget(dispatch),
        saveWidgets: () => saveWidgets(dispatch)
})

const WidgetListContainer = connect(stateToPropertiesMapper,
                    dispatchToPropertiesMapper
                    )(WidgetList)

export default WidgetListContainer