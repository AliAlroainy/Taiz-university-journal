import './App.css';
import logo from './T.svg';
import Hi from './hi'
//import Said from './main/said';
import Header from './components/Header';
import { BrowserRouter , Link, Route  } from 'react-router-dom';
import Bye from './bye';
import Footer from './main/footer'



// import nav pages 
import Editorial from './pages/nav/Editorial';
import AuthorGuideline from './pages/nav/AuthorGuideline';
import PaperSubmission from './pages/nav/PaperSubmission';
import Home from './pages/Home';


function App() {
  return (
    
  <BrowserRouter>
    <div  >
       <Header/>
       <Footer/>
    </div>
  </BrowserRouter>       
    

  );
}

export default App;
