import { Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./components/Home";
import About from "./components/About";
import Contact from "./components/Contact";
import User from "./components/User";
import GitHub from "./components/GitHub";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/about" element={<About/>} />
        <Route path="/contact" element={<Contact/>} />
        <Route path="/user/:userid" element={<User/>} />
        <Route path="/gitHub" element={<GitHub/>} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
