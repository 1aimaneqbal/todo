import React from 'react'
import NoTask from './NoTask'
import Todo from "./Todo"
const TodosSection = ({ todos, setTodos }) => {
    return (
        <div className="container">
            <div className="todoSection">
                {(todos.length!==0) 
                ?
                    todos.map((todo) => (
                        <Todo key={todo.id} todo={todo} todos={todos} setTodos={setTodos}/>
                    ))
                :
                <NoTask/>    
                }
            </div>
        </div>
    )
}

export default TodosSection

