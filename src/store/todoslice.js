import { createSlice } from "@reduxjs/toolkit";


export const todoSlice = createSlice({
    name:'todo',
    initialState: [
        {id:1, title:'My first State', completed: false},
        {id:2, title:'My second State', completed: false},
        {id:3, title:'My third State', completed: false},
        {id:4, title:'My fourth State', completed: false},
        {id:5, title:'My fifth State', completed: false},
        {id:6, title:'My sixth State', completed: false},
        {id:7, title:'My seventh State', completed: false},
    ],
    reducers: {
        addTodo: (state,action)=>{
            var todo = {
                title: action.payload,
                completed: false
            }
            var lastTodo = state[state.length-1];
            if(lastTodo){
                todo.id=lastTodo.id+1
            }else{
                todo.id=1
            }
            state.push(todo);
        },
        toggleCompletion: (state,action)=>{
            var index = state.findIndex((todo)=>todo.id===action.payload)
            if (index!== -1){
                state[index].completed=!state[index].completed;
            }
        },
        deleteTodo: (state,action)=>{
            var index = state.findIndex((todo)=>todo.id===action.payload)
            if(index!== -1){
                state.splice(index,1)
            }
        },
    }
});

export const {addTodo, toggleCompletion, deleteTodo}=todoSlice.actions;
export default todoSlice.reducer