import Listcontainer from "./components/listcontainer";
import Addtodolist from "./components/Addtodolist";
import { useState } from "react";
import Navbar from "./components/navbar";
import checkAuth from "./components/auth/checkAuth";

function App() {
  var [state,setState] = useState({
    todos:[
      {id:1, title:'My first State', completed: false},
      {id:2, title:'My second State', completed: false},
      {id:3, title:'My third State', completed: false},
      {id:4, title:'My fourth State', completed: false},
      {id:5, title:'My fifth State', completed: false},
      {id:6, title:'My sixth State', completed: false},
      {id:7, title:'My seventh State', completed: false},

    ]
  })

function addtodo(newTask){
  var x = state.todos.length+1;
  setState({
    todos: state.todos.concat({
      id: x,
      title: newTask,
      completed: false 
    })
  })

}

function updateStatus(id) {
    setState({
      todos: state.todos.map((todo)=>{
        if(todo.id===id){
          todo.completed=!todo.completed;
        }
        return todo;
      })
    })
  }

function removeItem(id){
  setState({
    todos: state.todos.filter((todo)=>{
      return todo.id!==id;
    })
  })
}

  return (
  <div>
    <Navbar></Navbar>
    <div className="container">
      <Addtodolist add={addtodo}/>
      <Listcontainer 
      todos={state.todos} 
      toggleMark={updateStatus}
      deleteItem={removeItem}/>
    </div> 
  </div>  
  );
}

export default checkAuth(App);
