import './App.css';
import UpperHeader from './components/Topheader/header';
import Footer from './components/footer/footer'
import Bottomfooter from './components/footer/bottomFooter';
import MainHeader from './components/Header';
import { BrowserRouter } from "react-router-dom";


function App() {
  return (
  <BrowserRouter>
    <div  >
       <UpperHeader/>
       <MainHeader/>
       <Footer/>
       <Bottomfooter/>
    </div>
  </BrowserRouter>       
  );
}

export default App;
