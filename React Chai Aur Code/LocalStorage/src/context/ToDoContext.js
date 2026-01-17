import { useContext, createContext } from "react";

export const ToDoContext = createContext({
  todo: [
    {
      id: 1,
      todo: "ToDo Message",
      completed:false
    },
  ],
  addToDo : (todo)=>{},
  updateToDo : (id,todo)=>{},
  deleteToDo : (id)=>{},
  toggleComplete:(id)=>{}
});

export const useTodo = () =>{
    return useContext(ToDoContext)
}

export const ToDoProvider = ToDoContext.Provider;