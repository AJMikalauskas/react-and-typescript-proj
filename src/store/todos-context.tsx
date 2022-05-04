import React, { useState } from "react";
import Todo from "../models/todo";

// create type alias due to reptitive use of :{
//     items: Todo[];
//     addTodo: () => void;
//     removeTodo: (todoId:string) => void
// }>
// Very simple to create type alias
type TodosContextObj = {
    items: Todo[];
    addTodo: (todoName: string) => void;
    removeTodo: (todoId:string) => void;
};

// similar to any other context API by setting intial values/functions in this React.createContext object.
    // Define generic type of the context by <>, define property types in <> and their values are set in the actual object in React.createContext()
        // Sets types of properties in <> using TS, sets initial values in actual React.createContext({})
export const TodosContext = React.createContext<TodosContextObj>({
    items: [],
    addTodo: (todoName:string) =>  {},
    removeTodo: (todoId:string) => {}
});

// Provider to manage the above state
const TodosContextProvider: React.FC<{children?: JSX.Element | JSX.Element[]}> = (props) => {
      // change todos to useState() -> passing in empty array, TS can't/isn't inferring with  types are in the empty array  
    // todos is a never[] which means it must always be an empty array LOL! -> useState() is a generic function can set type by <>
      // by adding <Todo[]>, it means this useState() manages an array of Todo objects
        // sets intial value by whats in the(), with original value of empty array -> similar to useRef()
  const [todos, setTodos] = useState<Todo[]>([]);

  const addTodoHandler = (todoName: string) => {
    // Create a new Todo class with instantiationb y using passed in string todoName param
      // instantiate todo.ts by Todo, todoText in constructor is the param passed into Todo() 
    const addingNewTodo = new Todo(todoName);
    // use anonymous function with param to get previously stored state, and just concat new Todo, which also creates a new array by .concat();
    setTodos((prevTodos) => { return prevTodos.concat(addingNewTodo)});
  };


  // Remove Todo Handler Function
  const removeTodoHandler = (todoId: string) => {
    // filter out the todo item which has the same id as the passed in param -> runs check againt all todo items and creates new array from filtered Array
      // similar logic to add Todo Handler above
        // need to pass in id as param part of props for both TodoItem.tsx and Todos.tsx
    setTodos((prevTodos) => {
      return prevTodos.filter(todo => todo.id !== todoId);
    });
  };

  // use this const as value to be set equal to value property in provider tags below
  const contextValue: TodosContextObj = {
      items: todos,
      addTodo: addTodoHandler,
      removeTodo: removeTodoHandler
  }

    return <TodosContext.Provider value={contextValue}>{props.children}</TodosContext.Provider>
} 
export default TodosContextProvider;