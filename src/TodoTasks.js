import React, { Component } from 'react';

class TodoTasks extends Component{
    constructor(props){
        super(props);
        this.createTasks = this.createTasks.bind(this);
    }

    createTasks(item){
        return <li onClick={() => this.delete(item.key)} key={item.key}>{item.text}</li>
    }

    delete(key){
        this.props.delete(key);
    }

    render(){
        var tasksEntries = this.props.taskEntries;
        var taskItems = tasksEntries.map(this.createTasks);
        return(
            <ul className="task">
                {taskItems}
            </ul>
        );
    }
};
export default TodoTasks;