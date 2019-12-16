  import React from 'react'
  import 'bootstrap/dist/css/bootstrap.min.css';
  
  
  export default class TodoListItem extends React.Component {
    constructor(props) {
      super(props);
      this.onClickClose = this.onClickClose.bind(this);
      this.onClickDone = this.onClickDone.bind(this);
    }
    onClickClose() {
      var index = parseInt(this.props.index);
      this.props.removeItem(index);
    }
    onClickDone() {
      var index = parseInt(this.props.index);
      this.props.markTodoDone(index);
    }
    render () {
      var todoClass = this.props.item.done ? 
          "done" : "undone";
      return(
        <li className="list-group-item ">
                    

          <div className={todoClass}>
          <span className="glyphicon glyphicon-ok icon" aria-hidden="true" onClick={this.onClickDone}><svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px"
width="48" height="48"
viewBox="0 0 172 172"
style={{" fill":"#000000"}}><g fill="none" fill-rule="nonzero" stroke="none" stroke-width="1" stroke-linecap="butt" stroke-linejoin="miter" stroke-miterlimit="10" stroke-dasharray="" stroke-dashoffset="0" font-family="none" font-weight="none" font-size="none" text-anchor="none" style={{"mix-blend-mode": "normal"}}><path d="M0,172v-172h172v172z" fill="none"></path><g fill="#61dafb"><path d="M21.5,57.33333c-11.10833,13.25833 -21.5,27.23333 -21.5,39.775c0,7.16667 6.09167,17.55833 21.14167,17.55833c8.24167,0 16.125,-3.225 22.575,-5.73333c10.75,-4.3 127.925,-54.10833 127.925,-54.10833c1.075,-0.71667 1.075,-1.43333 -0.35833,-1.075c-0.71667,0 -127.56667,33.68333 -127.56667,33.68333c-2.50833,0.71667 -5.01667,1.075 -7.525,1.075c-11.10833,0 -18.275,-5.375 -18.275,-16.84167c-0.35833,-4.65833 0.35833,-7.88333 3.58333,-14.33333z"></path></g></g></svg></span>
            {this.props.item.value}
            <button type="button" className="close" onClick={this.onClickClose}> <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px"
width="48" height="48"
viewBox="0 0 172 172"
style={{ fill:"#000000"}}><g fill="none" fill-rule="nonzero" stroke="none" stroke-width="1" stroke-linecap="butt" stroke-linejoin="miter" stroke-miterlimit="10" stroke-dasharray="" stroke-dashoffset="0" font-family="none" font-weight="none" font-size="none" text-anchor="none" style={{"mix-blend-mode": "normal"}}><path d="M0,172v-172h172v172z" fill="none"></path><g><path d="M121.83333,43l-21.5,-21.5h-28.66667l-21.5,21.5h-10.75v100.33333c0,7.88333 6.45,14.33333 14.33333,14.33333h64.5c7.88333,0 14.33333,-6.45 14.33333,-14.33333v-100.33333z" fill="#e74c3c"></path><path d="M87.79167,139.75h-3.58333c-2.86667,0 -5.375,-2.50833 -5.375,-5.375v-68.08333c0,-2.86667 2.50833,-5.375 5.375,-5.375h3.58333c2.86667,0 5.375,2.50833 5.375,5.375v68.08333c0,2.86667 -2.50833,5.375 -5.375,5.375zM112.875,139.75v0c-2.86667,0 -5.375,-2.50833 -5.375,-5.375v-68.08333c0,-2.86667 2.50833,-5.375 5.375,-5.375v0c2.86667,0 5.375,2.50833 5.375,5.375v68.08333c0,2.86667 -2.50833,5.375 -5.375,5.375zM59.125,139.75v0c-2.86667,0 -5.375,-2.50833 -5.375,-5.375v-68.08333c0,-2.86667 2.50833,-5.375 5.375,-5.375v0c2.86667,0 5.375,2.50833 5.375,5.375v68.08333c0,2.86667 -2.50833,5.375 -5.375,5.375z" fill="#34495e"></path><path d="M39.41667,28.66667h93.16667c3.94167,0 7.16667,3.225 7.16667,7.16667v7.16667h-107.5v-7.16667c0,-3.94167 3.225,-7.16667 7.16667,-7.16667z" fill="#34495e"></path></g></g></svg>
        </button>         
         </div>
        </li>     
      );
    }
  }
  