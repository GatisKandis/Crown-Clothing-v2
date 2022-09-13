//REACT & REACT-DOM
import React from "react";
import { Routes, Route } from "react-router-dom";

//COMPONENTS
import Navigation from "./routes/navigations/navigation.component";

//ROUTES
import Home from "./routes/home/home.component";
import SignIn from "./routes/sign-in/sign-in.components";
import Shop from "./routes/Shop/shop.component";
import Contact from "./routes/contact/contact.component";


const Cart = () => {
  return <h1>Trial Cart</h1>;
};


const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigation />}>
        <Route index element={<Home />} />
        <Route path="shop" element={<Shop />} />
        <Route path="contact" element={<Contact />} />
        <Route path="sign-in" element={<SignIn />} />
        <Route path="cart" element={<Cart />} />
      </Route>
    </Routes>
  );
};

export default App;
