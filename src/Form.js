import React, { useState } from 'react'

function App() {
    const [ text, setText ] = useState("")
    const [ age, setAge ] = useState('')
    function handleSubmit(e){
        e.preventDefault()
        alert(`button submitted ${text} - ${age}`)
    }

    function handleChangeName(e) {
        setText(e.target.value)
    }

    function handleChangeAge(e) {
        setAge(e.target.value)
    }


    return (
        <>
            <form onSubmit={handleSubmit}>
                <label htmlFor='name'>Name</label><br></br>
                <input type='text' id='name' name='name' value={text} onChange={handleChangeName}/><br></br>
                <label htmlFor='age'>Age</label><br></br>
                <input type='number' id='age' name='age' value={age} onChange={handleChangeAge} /><br></br>
                <button type='submit'>Submit</button>
            </form>
        </>
    )
}

export default App;
