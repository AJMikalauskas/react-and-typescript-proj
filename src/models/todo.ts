// Create what a todo will look like, not a component with JSX due to only .ts not .tsx
    // create class which can instantiated more than once outside this file
        // add constructor so that values/keys of id and text are used -> receive value not just setting type
class Todo {
    // add properties and define their types
    id: string;
    text: string;

    // add constructor to define the values of the properties by using this keyword
        // todoText is the parameter passed in when Todo is called in other files
    constructor(todoText: string) {
        this.text = todoText;
        this.id = new Date().toISOString();
    }
}

export default Todo;