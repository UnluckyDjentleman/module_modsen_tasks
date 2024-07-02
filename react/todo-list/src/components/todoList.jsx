import { useState } from "react";
import TodoItem from "./todoItem";
import AddTodo from "./addTodo";
let index=1;


function TodoList(){
    const [todos, setTodos]=useState([
        {
            id: 0,
            title: "Todo List Example",
            isCompleted: false
        }
    ])
    

    function addTodo(title){
        console.log(index);
        setTodos([...todos, 
            {
                id: index,
                title: title,
                completed: false
            }
        ]);
        index=index+1;
    }

    function editTodo(nextTodo){
        setTodos(
            todos.map((todo) => {
              if (todo.id === nextTodo.id) {
                return nextTodo;
              } else {
                return todo;
              }
            })
        );
    }

    function deleteTodo(id){
        setTodos(todos.filter(todo=>todo.id!==id))
    }  

    return(
        <>
            <AddTodo onAdd={addTodo}></AddTodo>
            <ul>
                {
                    todos.map((el)=>(
                        <li key={el.id}>
                            <TodoItem todo={el} onDelete={deleteTodo} onEdit={editTodo}></TodoItem>
                        </li>
                    ))
                }
            </ul>
        </>
    )
}

export default TodoList;