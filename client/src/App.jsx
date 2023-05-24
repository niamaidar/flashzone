import { useState } from "react";
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import "./App.css";
import Header from "./Header";
import Register from "./Register";
import AddProduct from "./AddProduct";
import UpdateProduct from "./UpdateProduct";
import Protected from "./Protected";
import Login from "./Login";
// import { BrowserRouter ,Route,Routes } from "react-router-dom";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <BrowserRouter>
        <Header />
        <h1 className="text-center"> Flash zone Project </h1>
        <Routes>
          <Route path="/" element={<Login />}>
            
          </Route>
          <Route path="login" element={<Login />}>
            
          </Route>
          {/* <Route path="add" element={<Protected/>}>  </Route> */}
          {/* <Route path="add">
            
            <Protected Cmp={AddProduct} />
          </Route> */}
          {/* <Route path="add" element={<AddProduct/>}>  </Route> */}
          {/* <Route path="update" element={<UpdateProduct/>}>  </Route> */}
          {/* <Route path="update">
            
            <Protected Cmp={UpdateProduct} />
          </Route> */}

          <Route path="add" element={<Protected Cmp={AddProduct} />} />
          <Route path="update" element={<Protected Cmp={UpdateProduct} />} />
          <Route path="register" element={<Register />}>
            
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
