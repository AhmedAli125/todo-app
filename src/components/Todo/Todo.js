import React from 'react'
import './Todo.css'

function Todo({todo}) {
    return (
        <div className='todoClass'>
            <p class='todoTitle'>{todo}</p>
            <button className='editClass'>Edit</button>
            <button className='deleteClass'>Delete</button>
        </div>
    )
}

export default Todo