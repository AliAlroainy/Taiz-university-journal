import './App.css';
import logo from './T.svg';
import Hi from './hi'
//import Said from './main/said';
import Header from './main/header';
import { BrowserRouter , Link, Route  } from 'react-router-dom';
import Bye from './bye';
import Footer from './main/footer'



// import nav pages 
import Editorial from './pages/nav/Editorial';
import AuthorGuideline from './pages/nav/AuthorGuideline';
import PaperSubmission from './pages/nav/PaperSubmission';
import Home from './pages/Home';
import Said from './main/said';


function App() {
  return (
    
       
    <div  >
       <Header/>
       <Said/>
       <Footer/>
    
    </div>
 

  );
}

export default App;
