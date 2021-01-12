import './App.css';
import UpperHeader from './components/Topheader/header';
import Footer from './components/footer/footer'
import Bottomfooter from './components/footer/bottomFooter';
import MainHeader from './components/Header';
import Home from './pages/home/Home';
import Newfooter from './components/newfooter';      
import { BrowserRouter , Route , Switch , Redirect} from "react-router-dom";
import ContactUs from './containers/ContactUs'
import Submission from './containers/Submission'
import {
  HOME_ROUTE,
  CONTACT_US_ROUTE ,
  ABOUT_JOURNAL_ROUTE,
  EDITORIAL_ROUTE,
  SUBMISSION_ROUTE,
  RESEARCH_ROUTE
} from './routes'

function App() {
  return (
    <BrowserRouter>
      <div  >
        <UpperHeader/>
        <MainHeader/>
          <div>
            <Containers/>
          </div>
        <Newfooter/>
      </div>
    </BrowserRouter>    
  );
}

export const Containers = () => {
    return(
      <Switch>
        <Route path={HOME_ROUTE}  exact component={Home} />
        <Route path={CONTACT_US_ROUTE}  component={ContactUs} />
        <Route path={SUBMISSION_ROUTE}  component={Submission} />
      </Switch>
    )
}
export default App;
