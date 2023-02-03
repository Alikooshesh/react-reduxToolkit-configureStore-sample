import { createSlice } from "@reduxjs/toolkit";

const todosReducer = createSlice({
    name : "todoReducer",
    initialState : [],
    reducers: {
        add: (state,action)=>{
            state.push({id : Date.now() , ...action.payload})
        },
        remove: (state,action)=>{
            state.pop()
        }
    }
})

export const {add,remove} = todosReducer.actions
export default todosReducer.reducer