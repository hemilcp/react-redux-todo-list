import React, { Component } from "react";
import TodoTasks from './TodoTasks';
import "./TodoList.css";

class TodoList extends Component{
    constructor(props){
        super(props);
        this.state = {
            tasks : []
        }
        this.addTask = this.addTask.bind(this);
        this.deleteTask = this.deleteTask.bind(this);
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

    deleteTask(key){
        var filterdTasks = this.state.tasks.filter((item) => {
            return item.key !== key;
        });

        this.setState({
            tasks: filterdTasks
        });
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
                <TodoTasks taskEntries={this.state.tasks} delete={this.deleteTask} />
            </div>
        );
    }
}

export default TodoList;