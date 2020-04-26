import React, { Component } from "react";
import TodoTasks from './TodoTasks';

class TodoList extends Component{
    constructor(props){
        super(props);
        this.state = {
            tasks : []
        }
        this.addTask = this.addTask.bind(this);
    }

    addTask(e){
        if(this._taskInputElement.value !== ""){
            var newTask = {
                text: this._taskInputElement.value.trim(),
                key: Date.now()
            };
            this.setState((prevState)=>{
                return{
                    tasks: prevState.tasks.concat(newTask)
                }
            });
            this._taskInputElement.value = "";
        }
        console.log("tasks: " + this.state.tasks);
        e.preventDefault();
    }

    render(){
        return(
            <div className="todoListMain">
                <div className="header">
                    <form onSubmit={this.addTask}>
                        <input ref={(a) => this._taskInputElement = a} placeholder="enter task here">
                        </input>
                        <button type="submit">Add</button>
                    </form>
                </div>
                <TodoTasks taskEntries={this.state.tasks} />
            </div>
        );
    }
}

export default TodoList;