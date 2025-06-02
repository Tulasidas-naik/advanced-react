import React from "react";
import {Link} from 'react-router-dom'

function Home(){
    return (
        <>
        <div>
            <ul>
                <li><Link to='/'>Home</Link></li>
                <li><Link to='/About'>About</Link></li>
                <li><Link to='/Contacts'>Contacts</Link></li>
            </ul>
        </div>
        </>
    )
}

export default Home;