import React from "react";

// getting the data
import TodoItem from "./TodoItem";

//normally the data for TODO list would come from an API call
import todoData from "./todoData";

// function MainContent() {
//     const todoList = todoData.map(todo => {
//         return <TodoItem key={todo.id} todo={todo} />;
//     });

//     return <div className="todo-list"> {todoList}</div>;
// }

class MainContent extends React.Component {
    constructor() {
        super();
        this.state = {};
    }

    render() {
        const todoList = todoData.map(todo => {
            return <TodoItem key={todo.id} todo={todo} />;
        });

        return <div className="todo-list"> {todoList}</div>;
    }
}

export default MainContent;
