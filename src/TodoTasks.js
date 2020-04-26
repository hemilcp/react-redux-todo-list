import React, { Component } from 'react';

class TodoTasks extends Component{
    constructor(props){
        super(props);
    }

    createTasks(item){
        return <li key={item.key}>{item.text}</li>
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