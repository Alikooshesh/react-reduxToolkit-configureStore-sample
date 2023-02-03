
import {createContext, useEffect, useReducer, useState} from "react";
import { useDispatch, useSelector } from "react-redux";
import Input from "./components/input"
import {add, remove} from './redux/reducers/todos/todosReducer'

// export const PlayersContext = createContext()

function App() {

  const dispatch = useDispatch()

  const todoList = useSelector((state)=> state.todo)

  // const [players , setPlayers] = useState({playerOne : {name : "" , char : ""} , playerTwo : {name : "" , char : ""}})

  // const [counter , setCounter] = useState(0)

  // const reducer = (state , action)=>{
  //   console.log({state , action})
  //   if(action.setCounterTo){
  //     return action.setCounterTo
  //   }
  //   switch(action.type) {
  //     case "INCREASE" :
  //       return state + 1
  //     case "DECREASE" :
  //       return state -1
  //     default:
  //       return state
  //   }
  // }


  // const [newCounter , newCounterDispatch] = useReducer(reducer , 0)

  return (
    // <PlayersContext.Provider value={{newCounter,newCounterDispatch}}>
    //   <Input/>
    // </PlayersContext.Provider>

    // <>
    // <button onClick={()=> setCounter(counter+1)}>+</button>
    // <p>{counter}</p>
    // <p>new counter : </p>
    // <button onClick={()=> newCounterDispatch({type : "INCREASE"})}>+</button>
    // <p>{newCounter}</p>
    // <button onClick={()=> newCounterDispatch({setCounterTo : 90})}>set to 90</button>
    // </>

    <>
    {console.log(todoList)}
      <p>{todoList.length}</p>
      <button onClick={()=> dispatch(add({text : "go to gym" , time : 1659832442}))}>+</button>
      <button onClick={()=> dispatch(remove())}>-</button>
    </>
  );
}

export default App;
