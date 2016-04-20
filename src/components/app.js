import React from 'react';
import CreateTodo from './create-todo'
import TodosList from './todos-list';

const todos = [
  {
    task: 'make React tutorial',
    isCompleted: false
  },
  {
    task: 'eat dinner',
    isCompleted: true
  }
];

export default class App extends React.Component{
  constructor(props){
    super(props);

    this.state = {
      todos //todos: todos
    }
  }

  render() {
    return (
      <div>
        <h1>React ToDo App</h1>
        <CreateTodo createTask={this.createTask.bind(this)} validateInput={this.validateInput.bind(this)}/>
        <TodosList todos={this.state.todos} toggleTask={this.toggleTask.bind(this)} saveTask={this.saveTask.bind(this)} deleteTask={this.deleteTask.bind(this)}/>
      </div>
    );
  }

  createTask(task){
    this.state.todos.push({
      task,
      isCompleted: false
    })
    this.setState({todos: this.state.todos});
  }

  toggleTask(task){
    const foundToDo = _.find(this.state.todos, todo => todo.task === task);
    foundToDo.isCompleted = !foundToDo.isCompleted;
    this.setState({todos: this.state.todos})
  }

  saveTask(oldTask, newTask){
    const foundTodo = _.find(this.state.todos, todo => todo.task === oldTask);
    foundTodo.task = newTask;
    this.setState({todos: this.state.todos});
  }

  deleteTask(task){
    _.remove(this.state.todos, todo => todo.task === task);
    this.setState({todos: this.state.todos});
  }

  validateInput(input){
    if(!input || input === ''){
      return 'Please enter task';
    }
    const foundToDo = _.find(this.state.todos, todo => todo.task === input);
    if(foundToDo){
      return 'This task is exist'
    }
    return null;
  }

}
