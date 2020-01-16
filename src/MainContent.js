import React from "react";

import TodoItem from "./TodoItem";

function MainContent() {
    const fullName = "Aaron Iba";
    return (
        <div>
            <TodoItem />
            <TodoItem />
            <TodoItem />
        </div>
    );
}
export default MainContent;
