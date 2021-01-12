import './App.css';
import UpperHeader from './components/Topheader/header';
import Footer from './components/footer/footer'
import Bottomfooter from './components/footer/bottomFooter';
import MainHeader from './components/Header';
import Home from './pages/home/Home';
import { BrowserRouter } from "react-router-dom";
import Newfooter from './components/newfooter';


function App() {
  return (
  <BrowserRouter>
    <div  >
       <UpperHeader/>
       <MainHeader/>
       <Home/>
      <Newfooter/>
    </div>
  </BrowserRouter>       
  );
}

export default App;
