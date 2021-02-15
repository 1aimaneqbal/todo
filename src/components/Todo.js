import React from 'react'
const Todo = ({ todo , todos , setTodos }) => {
    const deleteHandler = () => {
        setTodos(todos.filter((el) => el.id !== todo.id))
    };
    const completedHandler = () =>{
        setTodos(todos.map((item) => {
            if(item.id===todo.id){
                return{
                    ...item, completed: !item.completed
                }
            }
            return item;
        }))
    }
    return (
        <div className="todoCard">
            <div className={`todoTextClass ${todo.completed ? 'completedTask' : ''} `}>
                <p>{todo.text}</p>
            </div>
            <div className="btnDiv">
                <button onClick={completedHandler} className={`${todo.completed ? 'btn1c' : 'btn1'} `}>
                    {todo.completed ? "Completed" : "Not completed"}
                </button>
                <button onClick={deleteHandler} className="btn2">
                    Remove
                </button>
            </div>
        </div>
    )
}

export default Todo