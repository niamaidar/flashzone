import { useState } from "react";
import "./App.css";
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
import HomeScreen from "./user/screens/HomeScreen"
import ClientForm from "./user/ClientForm";
import ClientDetails from "./user/ClientDetails";
import Nav from "./user/Components/nav/Nav";
import Cart from "./user/Cart";



function App() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <BrowserRouter>
        {/* <Routes>
          <Route path="/" element={<Login />}>
          <Route path="/user" element={<Userlist />}/>
          <Route path="/Home" element={<HomeScreen />} />
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
          <Route path="/Home" element={<HomeScreen />} />
          <Route path="/Nav" element={<Nav/>}/>
          <Route path="/clientlist" element={<ClientList />} />
          {/* <Route path="/clientdetails" element={<ClientDetails />} /> */}
          <Route path="login" element={<Login />} />
          <Route path="add" element={<Protected Cmp={AddProduct} />} />
          <Route path="/list" element={<Protected Cmp={ProductList} />} />
          <Route path="/update/:id" element={<Protected Cmp={UpdateProduct} />} />
          <Route path="/search" element={<Protected Cmp={SearchProduct} />} />
          <Route path="/category" element={<Protected Cmp={Category} />} />
          <Route path="/ProductByCat/:category" element={<Protected Cmp={ProductByCategory} />} />
          <Route path="register" element={<Register />} />
          <Route path="register/addclient" element={<ClientForm />} />
          {/* <Route path="/command" component={Command} /> */}
          {/* <Route path="/command/:id" element={<Command />} /> */}
          <Route path="/cart" element={<Cart />} />
        </Routes>

      </BrowserRouter>
    </div>
  );
}

export default App;
