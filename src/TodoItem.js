import React from "react";

function TodoItem(props) {
    return (
        <div className="todo-list">
            <input type="checkbox" />
            <p>{props.text}</p>
            <p>{props.completed}</p>
        </div>
    );
}

export default TodoItem;
