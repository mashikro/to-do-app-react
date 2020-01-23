import React from "react";

function TodoItem(props) {
    return (
        <div className="todo-list">
            <input type="checkbox" checked={props.todo.completed} />
            <p>{props.todo.text}</p>
        </div>
    );
}

export default TodoItem;
