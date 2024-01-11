import { Typography,Box } from "@mui/material";
import React from "react";
import Todoapp from "./pages/Home/Todoapp";
// Import necessary components and styles
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Products from "./pages/Home/Products";
import Product from "./pages/Home/Product";
import Login from "./component/Login";



function App() {


  return (
    <>
      <Box>
        <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Login/>}/>
          <Route exact path="/products" element={<Products/>}/>
          <Route exact path="/todoapp" element={<Todoapp/>}/>
          <Route exact path="/products/product/:id" element={<Product/>}/>
        </Routes>
        </BrowserRouter>
      </Box>
      <ToastContainer/>
    </>
  )
}

export default App
