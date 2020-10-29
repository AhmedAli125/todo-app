import React, { useState } from 'react'
import './Input.css'

function Input() {
    return (
        <div>
            <form className='formClass'>
                <input class='inputClass' placeholder='Add Todo' />
                <button className='addClass'>Add Todo</button>
                <button className='deleteAll'>Clear All</button>
            </form>
        </div>
    )
}

export default Input