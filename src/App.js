import logo from './logo.svg';
import './App.css';
import Footer from './components/Shared/Footer/Footer';
import Header from './components/Shared/Navbar/Header';
import Home from './components/Home/Home';

function App() {
  return (
    <div>
      <Header></Header>
      <Home></Home>
      <Footer></Footer>
    </div>
  );
}

export default App;
