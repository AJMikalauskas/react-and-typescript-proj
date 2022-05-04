// This is the form to add a todo item
    // use refs/userRef, can also use state tracking but will be used somewhere else later in this project
//import React from "react";
import React, { useRef } from "react";
import { useContext } from "react";
import { TodosContext } from "../store/todos-context";
// Adding Css classes is literally the same in react and TS
import classes from "./NewTodo.module.css";

    // React.FC<{}> is the way to add props and make a component a functional component
        // can add onAddTodo as param with function as the type -> syntax for a type of function is () =>
            // params are passed into () with their own respective types, and after the => is what is to be returned, so in this instance
                // nothing is going to be returned so we can use void
// removed props and replaced with todosCtx or the context/useContext() hook
const NewTodo:React.FC = () => {
    // context const
    const todosCtx = useContext(TodosContext);

    // Also need to add starting value just in case this ref has been added to another HTML element
        // cannot use "" instead use null becasue input can have many different primitive types written in it
    const todoTextInputRef = useRef<HTMLInputElement>(null);
    // event can't just be used by itself as it cannot have implicit type of any -> instead, sets to type of React.FormEvent which is a listener
        // to the form submission event
    // onClick listener is React.FormEvent
    const submitHandler = (event: React.FormEvent) => {
        event.preventDefault();

        // Have to add ? in case of null which is the initial value of the Ref. If we were to use this statement above the submitHandler function
            // null whould be the return, but here, since the form submit is done, enteredText can store the value of the ref and not null 
        // Can add ! if you know connection will be established by this function and null//undefined will never be the result, which in
            // this case is true
            // These are both TypeScript operators, search up  
        const enteredText = todoTextInputRef.current!.value;

        // Minor validation added to refs
        if(enteredText.trim().length === 0) {
            // throw an error or just exit function by return
            return;
        }

        // Send this data up via props to a function in App.tsx -> not correct anymore, rather, uses context which has same logic as before
        todosCtx.addTodo(enteredText);
    }
    return (
        <form onSubmit={submitHandler} className={classes.form}>
            <label htmlFor="text">Todo text</label>
            {/* Typescript wants to know more about the ref we send in, wants to be specified to a specific HTML element because
            i guess refs can also be used on buttons which means we wouldn't want the ref to be an any implicit type ->
            pass in type of element to which the ref will be added, HTML element more specifically -> input type has HTMLInputElement ->
            to find this type, search "mdn input" -> add starting value shown above */}
            <input type="text" id="text" ref={todoTextInputRef}/>
            <button>Add Todo</button>
        </form>
    );
}

export default NewTodo;