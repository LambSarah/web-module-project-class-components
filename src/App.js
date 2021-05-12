import React from 'react';
import TodoList from './components/TodoList.js'
import TodoForm from './components/TodoForm.js'
class App extends React.Component {
  // you will need a place to store your state in this component.
  constructor() {
    super();
    this.handleSubmit = this.handleSubmit.bind(this);
    this.toggleCompleted = this.toggleCompleted.bind(this);
    this.state = {
      idCounter: 1001,
      todos: [{
        task: 'Learn more about React Class Components',
        id: 1000,
        completed: false
      }],
      newtask: ''
    }
  }
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
  updateNewTask = (event) => {
    this.setState({ newtask: event.target.value });
  }

  toggleCompleted = itemId => {
    this.setState({
      todos: this.state.todos.map(item => {
        if (itemId === item.id) {
          return { ...item, completed: !item.completed }
        }
        return item;
      })
    });
  }


  handleSubmit = event => {
    event.preventDefault();
    const newTask = {
      task: this.state.newtask,
      id: this.state.idCounter, completed: false
    };
    this.setState(prevState => ({
      todos: [...prevState.todos, newTask]
    }));
    this.setState({ idCounter: this.state.idCounter + 1 })
    this.setState({ newtask: '' });

  }

  clearForm = event => {
    this.setState({ newtask: "" })
  }
  render() {
    return (
      <div>
        All State: <pre>{JSON.stringify(this.state)}</pre>
        idcounter: <pre>{JSON.stringify(this.state.idCounter)}</pre>
        todos:<pre>{JSON.stringify(this.state.todos)}</pre>
        <h2>Welcome to your Todo App!</h2>
        <TodoList todos={this.state.todos} toggleCompleted={this.toggleCompleted} />
        <TodoForm updateNewTask={this.updateNewTask} handleSubmit={this.handleSubmit} />
      </div>
    );
  }
}

export default App;
