import React from "react";

import TodoItem from "./TodoItem";

//normally the data for TODO list would come from an API call
import todoData from "./todoData";

function MainContent() {
    const todoList = todoData.map(todo => {
        return (
            <TodoItem
                key={todo.id}
                text={todo.text}
                completed={todo.completed}
            />
        );
    });

    return <div className="todo-list">{todoList}</div>;
}
export default MainContent;
