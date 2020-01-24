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

//Changed the <MainContent /> component into a stateful class component
// and load the imported `todosData` into state.
class MainContent extends React.Component {
    constructor() {
        super();
        this.state = { todos: todoData };
    }

    render() {
        const todoList = this.state.todos.map(todo => {
            return <TodoItem key={todo.id} todo={todo} />;
        });

        return <div className="todo-list"> {todoList}</div>;
    }
}

export default MainContent;
