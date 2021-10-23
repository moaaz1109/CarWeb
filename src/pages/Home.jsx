import React from "react";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import UnderNav from "../components/UnderNav";
import Cars from "../components/Cars";



const Home = () => {
  return (
    <div>
     <Navbar />
     <UnderNav />
     <Cars />
     <Footer />
   </div>
  );
};

export default Home;
