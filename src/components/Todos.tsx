import React from "react";
import Todo from "../models/todo";
import TodoItem from "./TodoItem";
// Creating a Todo App <ul></ul>
    // Must assign props type explicitly or else adjust tsconfig.json
        // it can have items part of the object and it would have to have children
            // Solution to this props is generics, make function anonymous with const statement
                // uses React.FC type which acts as a functional component type, Generic Type
                    // Letting typescript how it should treat this function internally with props deifned by us and already added props.children
// Merges our object type in<{}>  with the original {} which includes children, so any thing we add in <{}> is part of props 

// Adding CSS classes same in react and TS as basic react
import classes from "./TodoItem.module.css";

const Todos: React.FC<{ items: Todo[] }> = (props) => {

    // remove todo item by onclick which leads to this function by props
    const removeTodoHandler = () => 
    {
        const itemToBeDeleted = props.items.find((removedItem) => removedItem.id)
    }

    return ( 
    <ul className={classes.todos}>
        {/*  Make these dynamic and removable/addable later */}
        {/* <li>Learn React</li>
        <li>Learn Typescript</li> */}
        {/* Key property key in kvp required for <li> items */}
        {/* Uses Todo[] which todo.ts is an object, so keys have to be the property of id and the dynamic text is the property of text */}
        {/* React.FC in TodoItem.ts is very special and helpful. <li> items require a key property, it's not part of 
        the props in TodoItem.tsx, but React,FC helps to see the special needed property in <li> items */}
        
        {props.items.map(item => <TodoItem key={item.id} text={item.text} onRemoveTodo={removeTodoHandler}/>)}
    </ul>
    );
}

export default Todos;