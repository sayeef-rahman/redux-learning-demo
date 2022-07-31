import './App.css';
import Footer from './components/Shared/Footer/Footer';
import Header from './components/Shared/Navbar/Header';
import Home from './components/Home/Home';
import { Routes, Route } from 'react-router-dom';
import Cart from './components/Cart/Cart';
import SingleCartItem from './components/Cart/SingleCartItem';
import Login from './components/Login/Login';
import SignUp from './components/Login/SignUp';
import MenClothing from './components/ProductCategories/Men/MenClothing';
import WomenClothing from './components/ProductCategories/Women/WomenClothing';
import Shoes from './components/ProductCategories/Shoes/Shoes';
import Bags from './components/ProductCategories/Bags/Bags';
import Sunglasses from './components/ProductCategories/Sunglasses/Sunglasses';
import Career from './components/Career/Career';
import Blogs from './components/Blogs/Blogs';

function App() {
  return (
    <div>
      <Header></Header>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="login" element={<Login />}></Route>
        <Route path="signup" element={<SignUp />}></Route>
        <Route path="men_clothing" element={<MenClothing />}></Route>
        <Route path="women_clothing" element={<WomenClothing />}></Route>
        <Route path="shoes" element={<Shoes />}></Route>
        <Route path="bags" element={<Bags />}></Route>
        <Route path="sunglasses" element={<Sunglasses />}></Route>
        <Route path='career' element={<Career />}></Route>
        <Route path='blogs' element={<Blogs />}></Route>
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
