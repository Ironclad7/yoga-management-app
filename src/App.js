import "./App.css";
import LogIn from "./components/LogIn";
import Form from "./components/Form";
import { Route, Routes } from "react-router";
import Navbar from "./components/NavBar";
import "./components/styles/StyleSheet.css";
import Home from "./components/Home";
import About from "./components/About";
import SignUp from "./components/SignUp";
import AuthProvider from "./AuthProvider";

function App() {
  return (
    <>
      <Navbar />
      <div class="header"></div>
      <h1>Yoga Management App</h1>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route element={<AuthProvider />}>
          <Route path="/form" element={<Form />} />
        </Route>
        <Route path="/signUp" element={<SignUp />} />
        <Route path="/logIn" element={<LogIn />} />
      </Routes>
    </>
  );
}

export default App;
