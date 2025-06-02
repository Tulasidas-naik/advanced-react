import React, { useState } from 'react'


function App() {
    const [ text, setText ] = useState('true')
    const [ model, setModel ] = useState('true')

    function handliClick(){
        setText(!text)
        setModel(!model)
    }
    return (
        <>
        {text ? <h1>very good</h1> : <h1> very Bad</h1>}
        <button type='button' onClick={handliClick}>Submit</button>
        {model && <h1> this is the Model guys</h1>}
        </>
    )
}

export default App;