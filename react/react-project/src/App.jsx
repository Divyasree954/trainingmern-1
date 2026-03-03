// import User from "./components/User";
// import { State } from "./hooks/State";
// import Conditional from "./components/conditional";
// import Form from "./hooks/form";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Services from "./pages/Services";
import Contact from "./pages/Contact";
import Navbar from "./components/Navbar";
import ProductDetails from "./pages/ProductDetails";

const App = () => {
  return (
    <>
    {/* <User
      name="Dsree"
      age={19}
      skills={["React", "JavaScript", "Node.js","Express.js","MongoDB"]}
    />
    <hr />
      <State />
    <hr />
      <Conditional />
      <Form /> */}
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/services/:id" element={<ProductDetails />} />
      </Routes>
</>
  );
};

export default App;

