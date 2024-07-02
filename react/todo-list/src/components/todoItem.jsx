import {useState} from 'react'

function TodoItem({todo, onDelete, onEdit}){
    const [isEditing, setIsEditing]=useState(false)

    let editContent;

    if(isEditing){
        editContent=(
            <>
                <input type="text" onChange={(e)=>onEdit({...todo,title:e.target.value,})} value={todo.title}></input>
                <button onClick={()=>setIsEditing(false)}>Save</button>
            </>
        )
    }
    else{
        editContent=(
            <>
                <p style={todo.isCompleted?
                    {textDecoration: 'line-through'}:
                    {textDecoration: 'none'}
                }>
                    {todo.title}
                </p>
                <button onClick={()=>setIsEditing(true)}>Edit</button>
            </>
        )
    }
    return(
        <label>
            <input type="checkbox" checked={todo.isCompleted} onChange={(e)=>onEdit({...todo, isCompleted: e.target.checked,})}></input>
            {
                editContent
            }
            <button onClick={()=>onDelete(todo.id)}>Delete</button>
        </label>
    )
}

export default TodoItem;