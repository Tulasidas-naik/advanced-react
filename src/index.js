import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
// import App from './Hooks'
// import App from './Operator'
// import App from './Form'
import Home from './Home'
import About from './About'
import Contacts from './Contacts'
import Error from'./Error'

const root = ReactDOM.createRoot(document.getElementById('root'))
// function Main() {
//   return (
//     <>
//       <App />
//     </>
//   )
// }

function Main() {
  return (
    <>
      <Router>
        <Routes>
          <Route path='/' element={< Home />} />
          <Route path='/About' element={<About />} />
          <Route path='/Contacts' element={<Contacts />} />
          <Route path='*' element={<Error />} />
        </Routes>
      </Router>
    </>
  )
}

root.render(<Main />)