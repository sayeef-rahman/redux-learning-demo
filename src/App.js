import './App.css';
import Footer from './components/Shared/Footer/Footer';
import Header from './components/Shared/Navbar/Header';
import Home from './components/Home/Home';
import { Routes, Route } from 'react-router-dom';
import Cart from './components/Cart/Cart';
import SingleCartItem from './components/Cart/SingleCartItem';
import Login from './components/Login/Login';

function App() {
  return (
    <div>
      <Header></Header>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="login" element={<Login />}></Route>
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
