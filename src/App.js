import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { useState } from 'react';
import './App.css';
import Navbar from './Components/Navbar';
import Signup from './Components/Signup';
import Home from './Components/Home';
import Watchlist from './Components/Watchlist';
import Footer from './Components/Footer';
import Movies from './Components/Movies';
import TVSeries from "./Components/TVSeries";

const PrivateRoute = (props) => {
  const { isSignin, children } = props;
  return isSignin ? children : <Navigate to="/signin" />
}
function App() {
  const [isSignin, setIsSigned] = useState("");
  const [user, setUser] = useState("");
  return (
    <div className="App">
      <BrowserRouter>
        {/* <Navbar /> */}
        <Navbar isSignin={isSignin} setIsSigned={setIsSigned} setUser={setUser} />
        <Routes>
          <Route path='/' element={<Home />} />
          {/* <Route path='/signup' element={<Signin />} /> */}
          {/* <Route path='/watchlist' element={<PrivateRoute ><Watchlist /></PrivateRoute>} />
          <Route path='/movies' element={<PrivateRoute><Movies /></PrivateRoute>} />
          <Route path="/tvseries" element={<PrivateRoute ><TVSeries /></PrivateRoute>} /> */}
          <Route path='/signup' element={<Signup isSignin={isSignin} setIsSigned={setIsSigned} setUser={setUser} />} />
          <Route path='/watchlist' element={<PrivateRoute isSignin={isSignin}><Watchlist /></PrivateRoute>} />
          <Route path='/movies' element={<PrivateRoute isSignin={isSignin}><Movies /></PrivateRoute>} />
          <Route path="/tvseries" element={<PrivateRoute isSignin={isSignin} ><TVSeries /></PrivateRoute>} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
