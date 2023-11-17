import { useDispatch } from "react-redux";
import { deleteTodo, toggleCompletion } from "../store/todoslice";

function Listitem(props) {
  var dispatch = useDispatch();
  return (
    <div className="col-md-4 offset-md-4">
      <div style={{ margin: "10px" }} className="list-group-item bg-info">
        <button style={{ float: "right", color:'red' }} onClick={()=>dispatch(deleteTodo(props.todoitem.id))}>
        <i className="fa fa-trash"></i>
        </button>
        <input
          defaultChecked={props.todoitem.completed}
          style={{ float: "left", marginTop: "5px" }}
          type="checkbox"
          onChange={()=>{dispatch(toggleCompletion(props.todoitem.id))}}
        ></input>
        <h6 
        style={
          props.todoitem.completed
          ?{color:'red', marginLeft: '20px'}
          : {marginLeft: '20px'}
        } 
        > &nbsp; {props.todoitem.title}</h6>
      </div>
    </div>
  );
}

export default Listitem;