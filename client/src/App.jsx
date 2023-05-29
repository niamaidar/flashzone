import { useState } from "react";
import "./App.css";
import Header from "./admin/Header";
import Register from "./admin/Register";
import AddProduct from "./admin/AddProduct";
import UpdateProduct from "./admin/UpdateProduct";
import Protected from "./admin/Protected";
import Login from "./admin/Login";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ProductList from './admin/ProductList';
import SearchProduct from './admin/SearchProduct';
import Category from './admin/Category';
import ProductByCategory from './admin/ProductByCategory';
import Userlist from './user/Userlist';
import ClientList from "./user/Clientlist";
import ClientForm from "./user/ClientForm";
import ClientDetails from "./user/ClientDetails";



function App() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <BrowserRouter>
        <Header />
        {/* <Routes>
          <Route path="/" element={<Login />}>
          <Route path="/user" element={<Userlist />}/>
          <Route path="clientlist" element={<ClientList />} />
          </Route>
          <Route path="login" element={<Login />}>
          </Route>
          <Route path="add" element={<Protected Cmp={AddProduct} />} />
          <Route path="/list" element={<Protected Cmp={ProductList} />} />
          <Route path="/update/:id" element={<Protected Cmp={UpdateProduct} />} />
          <Route path="/search" element={<Protected Cmp={SearchProduct} />} />
          <Route path="/category" element={<Protected Cmp={Category} />} />
          <Route path="/ProductByCat/:category" element={<Protected Cmp={ProductByCategory} />} />
          <Route path="register" element={<Register />}>  
          </Route>
        </Routes> */}
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/user" element={<Userlist />} />
          <Route path="/clientlist" element={<ClientList />} />
          <Route path="login" element={<Login />} />
          <Route path="add" element={<Protected Cmp={AddProduct} />} />
          <Route path="/list" element={<Protected Cmp={ProductList} />} />
          <Route path="/update/:id" element={<Protected Cmp={UpdateProduct} />} />
          <Route path="/search" element={<Protected Cmp={SearchProduct} />} />
          <Route path="/category" element={<Protected Cmp={Category} />} />
          <Route path="/ProductByCat/:category" element={<Protected Cmp={ProductByCategory} />} />
          <Route path="register" element={<Register />} />
          <Route path="register/addclient" element={<ClientForm />} />
          <Route path="/clients/:id" element={<ClientDetails />} />

        </Routes>

      </BrowserRouter>
    </div>
  );
}

export default App;
