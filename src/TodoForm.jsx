import React from 'react'
// import TodoList from './TodoList';
// import TodoListItem from './TodoListItem';



class TodoForm extends React.Component {
    constructor(props) {
      super(props);
      this.onSubmit = this.onSubmit.bind(this);
    }
    componentDidMount() {
      this.refs.itemName.focus();
    }
    onSubmit(event) {
      event.preventDefault();
      var newItemValue = this.refs.itemName.value;
      
      if(newItemValue) {
        this.props.addItem({newItemValue});
        this.refs.form.reset();
      }
    }
    render () {
      return (
        <form ref="form" onSubmit={this.onSubmit} className="form-inline">
           <button type="submit"  className="btn btn-default"><svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px"
width="48" height="48"
viewBox="0 0 172 172"
style={{ fill:"#000000"}}><g fill="none" fill-rule="nonzero" stroke="none" stroke-width="1" stroke-linecap="butt" stroke-linejoin="miter" stroke-miterlimit="10" stroke-dasharray="" stroke-dashoffset="0" font-family="none" font-weight="none" font-size="none" text-anchor="none" style={{"mix-blend-mode": "normal"}}><path d="M0,172v-172h172v172z" fill="none"></path><g><path d="M157.66667,86c0,39.57792 -32.08875,71.66667 -71.66667,71.66667c-39.57792,0 -71.66667,-32.08875 -71.66667,-71.66667c0,-39.57792 32.08875,-71.66667 71.66667,-71.66667c39.57792,0 71.66667,32.08875 71.66667,71.66667z" fill="#e74c3c"></path><path d="M78.83333,53.75h14.33333v64.5h-14.33333z" fill="#ffffff"></path><path d="M53.75,78.83333h64.5v14.33333h-64.5z" fill="#ffffff"></path></g></g></svg>
               </button>
               
          <input type="text" ref="itemName" className="form-control" placeholder="add a new todo..."/>
                 </form>
      );   
    }
  }

  export default TodoForm;