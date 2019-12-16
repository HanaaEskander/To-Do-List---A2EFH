import React from "react";
import logo from "./logo.svg";
import "./App.css";
import TodoHeader from "./TodoHeader";
import TodoList from "./TodoList";
import TodoForm from './TodoForm'




class App extends React.Component {
  constructor (props) {
    super(props);
    this.addItem = this.addItem.bind(this);
    this.removeItem = this.removeItem.bind(this);
    this.markTodoDone = this.markTodoDone.bind(this);
    this.state = {initItems: this.props.initItems};
  }
  addItem(todoItem) {
    this.props.initItems.unshift({
      index: this.props.initItems.length+1, 
      value: todoItem.newItemValue, 
      done: false
      
    });
    this.setState({initItems: this.props.initItems});
  }
  removeItem (itemIndex) {
    this.props.initItems.splice(itemIndex, 1);
    this.setState({initItems: this.props.initItems});
  }
  markTodoDone(itemIndex) {
    var todo = this.props.initItems[itemIndex];
    this.props.initItems.splice(itemIndex, 1);
    todo.done = !todo.done;
    todo.done ? this.props.initItems.push(todo) : this.props.initItems.unshift(todo);
    this.setState({initItems: this.props.initItems});  
  }
  render() {
    return (
      <div id="main">
        <TodoHeader />
        <TodoList items={this.props.initItems} removeItem={this.removeItem} markTodoDone={this.markTodoDone}/>
        <TodoForm addItem={this.addItem} />
      </div>
    );
  }
}



export default App;
