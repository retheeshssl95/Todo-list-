import { useState } from "react"
import { useDispatch } from "react-redux";
import { addTodo } from "../store/todoslice";

function Addtodolist(props){
    const [state,setState] = useState({newTask: ""});

    function handleChange(evnt){
        setState({newTask:evnt.target.value})
    }
    var dispatch = useDispatch();
    function addnewTask(event){
        event.preventDefault();
        // console.log(event);
        if (state.newTask === ""){
            alert ('empty task is not allowed')
            return;
        }
        dispatch(addTodo(state.newTask));
        props.add(state.newTask);
        setState({newTask:''})
    }

    return <div style={{ marginBottom: "80px"}} className="col-md-4 offset-md-4">
        <form onSubmit={addnewTask}> 
            <div className="form-group">
                <label htmlFor="task">Enter Your Task </label>
                <input value={state.newTask} onChange={handleChange} type='text' className="form-control"/>
            </div>
            <button style={{float:"right"}} type="submit" className="btn btn-primary">Submit </button>
        </form>
    </div>
}

export default Addtodolist