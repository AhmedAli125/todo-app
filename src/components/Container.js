import React from 'react'
import Input from './Input/Input'
import Todo from './Todo/Todo'
import './Container.css'

function Container() {
    return (
        <div className='container'>
            <h1 className='title'>Todo App</h1>
            <Input />
            <div className='todo-container'>
                <Todo todo={'Some Text'}/>
            </div>
        </div>
    )
}

export default Container
