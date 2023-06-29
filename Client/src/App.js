import { Route, Router, Routes } from "react-router-dom";
import AdminLogin from "./Components/AdminLogin";
import Footer from "./Components/Footer";
import Header from "./Components/Header";
import Home from "./Components/Home";
import SignUp from "./Components/SignUp";
import UserLogin from "./Components/UserLogin";


function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Home/>} exact></Route>
        <Route path="/user" element={<UserLogin />}></Route>
        <Route path="/admin" element={<AdminLogin />}></Route>
        <Route path="/signup" element={<SignUp />}></Route>
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
