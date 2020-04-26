import React, { Component } from "react";

class TodoList extends Component{
    render(){
        return(
            <div className="todoListMain">
                <div className="header">
                    <form>
                        <input placeholder="enter task here">
                        </input>
                        <button type="submit">Add</button>
                    </form>
                </div>
            </div>
        );
    }
}

export default TodoList;