import React, { useState, useEffect } from "react";

function App() {
    // const [ text, setText ] = useState("good morning")
    const [ users, setUsers ] = useState([])

    async function getData() {
        const userList = await fetch('https://api.github.com/users')
        const value = await userList.json();
        setUsers(value)
    }
    
    useEffect(() => {
        getData();     
    },[])

    // function handleOnClick(){
    //     setText('')
    // }

    return (
        <>
            {/* <h1>{text}</h1>
            <button type='button' onClick={handleOnClick}>submit</button> */}

            {
                users.map((singleUser) => {
                    return (
                    <div key = {singleUser.id}>
                        <li>{singleUser.login}</li>
                    </div>
                    )
                })
            }
        </>
    )
}

export default App;