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
import Footer from "./user/Components/nav/Footer";
import Description from "./LandingPage/Description";
import Register2 from "./admin/Register2";
import Panier from "./user/Panier";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/register" element={<Register2/>}/>
          {/* <Route path="/login" element={<Login />} /> */}
          <Route path="/login" element={<Login2 />} />
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
          <Route path="/category" element={Category} />
          <Route path="/ProductByCat/:category" element={<Protected Cmp={ProductByCategory} />} />
          {/* <Route path="register" element={<Register />} /> */}
          <Route path="register/addclient" element={<ClientForm />} />
          <Route path="/clients/:id" element={<ClientDetails />} />
          <Route path="/command/:id" element={<Command />} />
          <Route path="/command" element={<Command />} />
          <Route path="/carts/:id" element={<Cart />} />
          <Route path="/product/:id" element={<ProductDetails />} />
          <Route path="/Categories" element={<HomeCategory />} />
          {/* <Route path="/command" component={Command} /> */}
          <Route path="/command/:id" element={<Command />} />
          <Route path="/command" element={<Command />} />

          <Route path="/clients/:id" element={<ClientDetails />} />
          <Route path="/carts/:id" element={<Cart />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/Comments" element={<Comments/>}/>
   
          <Route path="/" element={
            <>
              <Navbar/>
              <Image/>
              <HomeScreen/>
              <Description/>
              <Footer/>
            </>}/>
            <Route path="/panier" element={<Panier/>}/>


        </Routes>

      </BrowserRouter>
    </div>
  );
}

export default App;



// import React from 'react'
// import { Navigate, Outlet } from 'react-router-dom'
// function ProviderAdmin() {
//     const auth =  JSON.parse(localStorage.getItem("user"));
//     return auth.role =="admin" ? <Outlet /> : <Navigate to="/login" />;
//   }

// export default ProviderAdmin