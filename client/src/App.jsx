import { useState } from "react";
import "./App.css";
import Register from "./admin/Register";
import AddProduct from "./admin/AddProduct";
import UpdateProduct from "./admin/UpdateProduct";
import Protected from "./admin/Protected";
import Login from "./admin/Login";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ProductList from './admin/ProductList';
import SearchProduct from './user/Components/nav/SearchProduct';
import Category from './admin/Category';
import ProductByCategory from './admin/ProductByCategory';
import Userlist from './user/Userlist';
import ClientList from "./user/Clientlist";
import HomeScreen from "./user/screens/HomeScreen"
import ClientForm from "./user/ClientForm";
import ClientDetails from "./user/ClientDetails";
<<<<<<< HEAD
=======
import Nav from "./user/Components/nav/Nav";
<<<<<<< HEAD
import Command from "./user/Command";
=======
>>>>>>> 5225a738a57800d32c0b197205e52c6a428cf5bc
>>>>>>> e68adebaccc5a8e0e00f95a8a0320369ac84b77f
import Cart from "./user/Cart";
import Command from "./user/Command";
import Nav from "./user/Components/Nav";



function App() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />} />

          {/* //the landing page */}
          <Route path="/user" element={<Userlist />} />
          <Route path="/Home" element={<HomeScreen />} />
          <Route path="/Nav" element={<Nav/>}/>
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
<<<<<<< HEAD
          <Route path="/clients/:id" element={<ClientDetails />} />
          <Route path="/command/:id" element={<Command />} />
          <Route path="/command" element={<Command />} />
          <Route path="/carts/:id" element={<Cart />} />
=======
<<<<<<< HEAD

          {/* <Route path="/command" component={Command} /> */}
          <Route path="/command/:id" element={<Command />} />
          <Route path="/command" element={<Command />} />

          <Route path="/clients/:id" element={<ClientDetails />} />
          <Route path="/carts/:id" element={<Cart />} />
          <Route path="/Nav" element={<Nav/>}/>
          <Route path="/cart" element={<Cart />} />




=======
          {/* <Route path="/command" component={Command} /> */}
          {/* <Route path="/command/:id" element={<Command />} /> */}
          <Route path="/cart" element={<Cart />} />
>>>>>>> 5225a738a57800d32c0b197205e52c6a428cf5bc
>>>>>>> e68adebaccc5a8e0e00f95a8a0320369ac84b77f
        </Routes>

      </BrowserRouter>
    </div>
  );
}

export default App;
