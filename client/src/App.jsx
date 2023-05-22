import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'
import Header from './Header';
import Register from './Register';
import AddProduct from './AddProduct';
import UpdateProduct from './UpdateProduct';
import Login from './Login';
import { BrowserRouter } from "react-router-dom";
function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <BrowserRouter>
        <Header/>
        <h1 className='text-center'> Flash zone Project </h1>
        <Router path="./login"> <Login/> </Router>
        <Router path="./add"> <AddProduct/> </Router> 
        <Router path="./update"> <UpdateProduct/> </Router> 
        <Router path="./register"> <Register/> </Router> 
 
      </BrowserRouter>       
    </div>
  )
}

export default App
