// Creating a Todo App

import { useState } from "react";
import NewTodo from "./components/NewTodo";
import Todos from "./components/Todos";
import Todo from "./models/todo";

function App() {
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
  }

  return (
    <div>
      <NewTodo onAddTodo={addTodoHandler}/>
      {/* Expects an items props from Todos or else error will result  -> we need to changes items from a string[] to a Todo[],
      since the Todo object is now the array type we are expecting.*/}
      <Todos items={todos}/>
    </div>
  );
}

export default App;
