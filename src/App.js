import './App.css';
import logo from './T.svg';
import Hi from './hi'
//import Said from './main/said';
//import Header from './main/header';
import { BrowserRouter , Link, Route  } from 'react-router-dom';
import Bye from './bye';

// saidbar pages import 
import ethicsAndMalpractice from './pages/said/ethicsAndMalpractice';
import manuscriptPreparation from './pages/said/manuscriptPreparation';
import submissonInformation from './pages/said/submissonInformation';
import submissionChecklist from './pages/said/submissionChecklist';
import copyRightAgreement from './pages/said/copyRightAgreement';
import callForPapers from './pages/said/callForPapers';
import callForReviewers from './pages/said/callForReviewers';
import Archive from './pages/said/Archive';

// import nav pages 
import Editorial from './pages/nav/Editorial';
import AuthorGuideline from './pages/nav/AuthorGuideline';
import PaperSubmission from './pages/nav/PaperSubmission';
import Home from './pages/Home';


function App() {
  return (
    <BrowserRouter>
    <div className="main" >
          
          <div className="sidenav">
          
              <Link to="/">
                <img src={logo} className="App-logo" alt="logo" />
                <h1>Taiz university Journal</h1></Link>
              <Link to="/ethicsAndMalpractice">ETHICS AND MALPRACTICE</Link>
              <Link to="/manuscriptPreparation">MANUSCRIPT PREPARATION</Link>
              <Link to="/submissonInformation">SUBMISSION INFORMATION</Link>
              <Link to="submissionChecklist">SUBMISSION CHECKLIST</Link>
              <Link to="/copyRightAgreement">COPYRIGHT AGREEMENT</Link>
              <Link to="/callForPapers">CALL FOR PAPERS</Link>
              <Link to="/callForReviewers">CALL FOR REVIEWERS</Link>
              <Link to="/Archive">ARCHIVE
              <a href="#">Volume 1</a>
                            <a href="#">Volume 2</a>
                            <a href="#">Volume 3</a>
                            <a href="#">Volume 4</a>
                            <a href="#">Volume 5</a>
                            <a href="#">Volume 6</a>
              </Link>
            </div>

          { /*
            <div class="navbar">
               Home
                <Link to="/Editorial">Editorial</Link>
                <Link to="/Archive">Archive</Link>
                <Link to="/AuthorGuideline">Author's Guideline</Link>
                <Link to="/PaperSubmission">Paper Submission</Link>
                </div>

          */}
                <div className="nav">
                <ul>
                  <li> <Link to="/">Home</Link></li>
                 
                  <li class="dropdown">
                      <a href="javascript:void(0)" class="dropbtn">Editorial</a>
                        <div class="dropdown-content">
                            <a href="#">Editorial Board</a>
                            <a href="#">Management Team</a>
                        </div>
                    </li>

                    <li class="dropdown">
                      <a href="javascript:void(0)" class="dropbtn">Archive</a>
                        <div class="dropdown-content">
                            <a href="#">Volume 1</a>
                            <a href="#">Volume 2</a>
                            <a href="#">Volume 3</a>
                            <a href="#">Volume 4</a>
                            <a href="#">Volume 5</a>
                            <a href="#">Volume 6</a>
                        </div>
                    </li>

                    <li class="dropdown">
                      <a href="javascript:void(0)" class="dropbtn">Author's Guideline</a>
                        <div class="dropdown-content">
                            <a href="#">Manuscript Preparation</a>  
                            <Link to="/AuthorGuideline">Submisson Information</Link>
                            <a href="#">Submission Checklist</a>
                        </div>
                    </li>

                    <li> <Link to="/PaperSubmission">Paper Submission</Link> </li>
                    <li> <Link to="/PaperSubmission">Contact Us</Link> </li>

              
                </ul>
                </div>

               {/*navbar links */}

               
                <Route path="/Editorial" component={Editorial} />
                <Route path="/AuthorGuideline" component={AuthorGuideline}/>
                <Route path="/PaperSubmission" component={PaperSubmission}/>
               
                
                
            {/*said links */}
            <Route path="/" exact component={Home} />
            <Route path="/ethicsAndMalpractice" component={ethicsAndMalpractice} />
            <Route path="/manuscriptPreparation" component={manuscriptPreparation}/>
            <Route path="/submissonInformation" component={submissonInformation}/>
            <Route path="/submissionChecklist" component={submissionChecklist}/>
            <Route path="/copyRightAgreement" component={copyRightAgreement}/>
            <Route path="/callForPapers" component={callForPapers}/>
            <Route path="/callForReviewers" component={callForReviewers}/>
            <Route path="/Archive" component={Archive}/>
            
       
    
    </div>
    </BrowserRouter>

  );
}

export default App;
