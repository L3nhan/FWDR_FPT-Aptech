import React, { useState, useEffect } from 'react'

const GetTask = () => {
    //1. Khai báo Style
    const myStyle = {
        color: 'blue',
        fontSize: '33pt'
    }

    //2. Khai báo State
    const [count, setCount] = useState(0)
    const [task, setTask] = useState("[a rest]");

    //3. Khai báo useEffect
    useEffect(() => {
        document.title = `You clicked ${ count } time`
    })

    //4. Giá trị trả về
    return (
        <>
            <h1>Example 10: useState and useEffect</h1>
            <h3>Take <span style={ myStyle }>{ task }</span> today!</h3>
            <div>
                <button type="button" onClick={ () => {
                    setTask("[a meeting]")
                    setCount(count + 1)
                }}>
                    Monday-Wednessday-Friday
                </button>
            </div>
            <div>
                <button type="button" onClick={ () => {
                    setTask("[a walk]")
                    setCount(count + 1)
                }}>
                    Tuesday-Thursday
                </button>
            </div>
        </>
    );
}

export default GetTask