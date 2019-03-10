import React from 'react'
import ModuleListItem from '../components/ModuleListItem';

export default class ModuleList extends React.Component{
    render() {
        return (
            <div>
                <ModuleListItem></ModuleListItem>
                <ModuleListItem></ModuleListItem>
                <ModuleListItem></ModuleListItem>
                <ModuleListItem></ModuleListItem>
                <ModuleListItem></ModuleListItem>
            </div>
        );
    }
}
