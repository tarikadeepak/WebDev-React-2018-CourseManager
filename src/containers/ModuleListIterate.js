import React from 'react'
import ModuleListItem from '../components/ModuleListItem';

export default class ModuleListIterate extends React.Component{
    constructor(){
        super();
        this.state = {
            module: {title: ''},
            modules: [
                {title: 'Module 1 - jQuery',    id:1},
                {title: 'Module 2 - React',     id:2},
                {title: 'Module 3 - ReactN',    id:3},
                {title: 'Module 4 - Redux',     id:4},
                {title: 'Module 5 - Angular',   id:5},
                {title: 'Module 6 - Node',      id:6}
            ]
        };
        this.titleChanged = this.titleChanged.bind(this)
        this.createModule = this.createModule.bind(this)
    }

    renderListOfModules(){
        let  modules = this.state.modules.map(function(module){
                return<ModuleListItem key={module.id} title={module.title} />
            }
        )
        return modules;
    }

    titleChanged(event){
    
        this.setState({
            module: {title:event.target.value}
        })
    }
    createModule(event){
        console.log(this.state.module)
      
    }
    render() {
        return (
            <div>
                <input className="form-control" 
                    onChange={this.titleChanged}
                    placeholder="title"/>
                    <button className="btn btn-primary btn-block"
                        onClick={this.createModule}>
                        <i className="fa fa-plus"></i>
                    </button>
                <ul className="list-group">
                    {this.renderListOfModules()}
                </ul>
            </div>
        );
    }
}
