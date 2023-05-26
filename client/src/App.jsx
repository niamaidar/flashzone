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
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ProductList from './ProductList';
function App() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Login />}>
            
          </Route>
          <Route path="login" element={<Login />}>
            
          </Route>
          <Route path="add" element={<Protected Cmp={AddProduct} />} />
          <Route path="/list" element={<Protected Cmp={ProductList} />} />
          <Route path="update" element={<Protected Cmp={UpdateProduct} />} />
          <Route path="register" element={<Register />}>  
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
