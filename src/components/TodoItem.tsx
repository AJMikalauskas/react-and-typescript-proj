// Adding CSS classes same in react and TS as basic react
import React from "react";
import classes from "./TodoItem.module.css";

//import Todo from "../models/todo";

//import React from "react";
    // React import isn't neccessary even if you use React.FC, not import full Todo because id is unneccessary and would cause repetition
        // use TodoItem not Todo.tsx because it could cause naming conventions problems
            // onRemoveTodo is a param as a function with onClick event expected and void from return just as adding a todo returns void
const TodoItem: React.FC<{text: string; onRemoveTodo: () => void}> = (props) => {


    // Removing Item Handler handled in next level, could see where it would be useful to have context API here
        // because this is going to have to be passed up two levels maybe?
    return (
        // Pass in id via Todos.tsx where we will put ths component in the JSX of Todos.tsx
            // function is expected from props.onRemoveTodo() which will be in Todos.tsx
        <li className={classes.item} onClick={props.onRemoveTodo}>
            {props.text}
        </li>
    );
}

export default TodoItem;