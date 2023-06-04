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
import Category from './user/Category';
import ProductByCategory from './user/ProductByCategory';
import Userlist from './user/Userlist';
import ClientList from "./user/Clientlist";
import HomeScreen from "./user/screens/HomeScreen"
import ClientForm from "./user/ClientForm";
import ClientDetails from "./user/ClientDetails";
import HomeCategory from "./user/HomeCategory";
import Nav from "./user/Components/nav/Nav";
import Cart from "./user/Cart";
import Command from "./user/Command";
import ProductDetails from "./user/Components/ProductDetails";
import Comments from "./user/Comments";
import Login2 from "./admin/LoginPage/Login2";
import Navbar from './LandingPage/Navbar'
import Image from "./LandingPage/Image";
import ProviderAdmin from "./components/ProviderAdmin";
import ProviderUser from "./components/ProviderUser";
import ProviderRoute from "./components/PrivateRoute";


function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
      <Route path="/" element={<HomeScreen />} >
      <Route path="register" element={<Register />} />

        <Route path="/admin" element={<ProviderAdmin />} >
          <Route path="add" element={<AddProduct />} />
          <Route path="/list" element={<ProductList />} />
          <Route path="/update/:id" element={<UpdateProduct />} />
          <Route path="/search" element={<SearchProduct />} />
          <Route path="/clientlist" element={<ClientList />} />

        </Route>
      

          <Route path="/login" element={<Login />} />
          <Route path="/" element={<Login2 />} />
          <Route path="/image" element={<Image/>}/>
          {/* //the landing page */}
          <Route path="/user" element={<Userlist />} />
          {/* <Route path="/Home" element={<HomeScreen />} /> */}
          <Route path="/Nav" element={<Nav/>}/>
          
          <Route path="login" element={<Login />} />
        
          <Route path="/category" element={Category} />
          <Route path="/ProductByCat/:category" element={<Protected Cmp={ProductByCategory} />} />
          
          <Route path="register/addclient" element={<ClientForm />} />
          <Route path="/clients/:id" element={<ClientDetails />} />
          <Route path="/command/:id" element={<Command />} />
          <Route path="/command" element={<Command />} />
          <Route path="/carts/:id" element={<Cart />} />
          <Route path="/products/:id" element={<ProductDetails />} />
          <Route path="/Categories" element={<HomeCategory />} />
          {/* <Route path="/command" component={Command} /> */}
          <Route path="/command/:id" element={<Command />} />
          <Route path="/command" element={<Command />} />
          <Route path="/carts/:id" element={<Cart />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/Comments" element={<Comments/>}/>
   
          <Route path="/Navbar" element={<Navbar/>}/>

      </Route>

        </Routes>

      </BrowserRouter>
    </div>
  );
}

export default App;


