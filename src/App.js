import './App.css';
import Footer from './components/Shared/Footer/Footer';
import Header from './components/Shared/Navbar/Header';
import Home from './components/Home/Home';
import { Routes, Route } from 'react-router-dom';
import Cart from './components/Cart/Cart';
import SingleCartItem from './components/Cart/SingleCartItem';

function App() {
  return (
    <div>
      <Header></Header>
      <Home></Home>
      {/* <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='cart' element={<Cart></Cart>}></Route>
      </Routes> */}
      <Cart></Cart>
      {/* <SingleCartItem></SingleCartItem> */}
      <Footer></Footer>
    </div>
  );
}

export default App;
