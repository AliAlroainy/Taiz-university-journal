import React from 'react'
import './said.css'
import logo from '../../src/T.svg'
import { BrowserRouter , Route , Link } from 'react-router-dom';

// saidbar pages import 
import ethicsAndMalpractice from '../pages/said/ethicsAndMalpractice';
import manuscriptPreparation from '../pages/said/manuscriptPreparation';
import submissonInformation from '../pages/said/submissonInformation';
import submissionChecklist from '../pages/said/submissionChecklist';
import copyRightAgreement from '../pages/said/copyRightAgreement';
import callForPapers from '../pages/said/callForPapers';
import callForReviewers from '../pages/said/callForReviewers';
import Archive from '../pages/said/Archive';
import Home from "../pages/Home";

 const Said = () => {
    return (
      
              <BrowserRouter>
          <div className="sidenav">
          
          { /*<img src={logo} className="App-logo" alt="logo" /> */ }
            
          <Link to="/ethicsAndMalpractice">Ethics and malpractice</Link>
          <Link to="/manuscriptPreparation">Manuscript and preparation</Link>
          <Link to="/submissonInformation">Submation information</Link>
          <Link to="submissionChecklist">Submisiion checklist</Link>
          <Link to="/copyRightAgreement">CopyRight agreement</Link>
          <Link to="/callForPapers">Call for papers</Link>
          <Link to="/callForReviewers">Call for reviewers</Link>
          <Link to="/Archive">Archive
          <a href="#">Volume 1</a>
                        <a href="#">volume 2</a>
                        <a href="#">volume 3</a>
                        <a href="#">volume 4</a>
                        <a href="#">volume 5</a>
                        <a href="#">volume 6</a>
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
            
           {/*navbar links */}

           
            
            
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
        
   

        </BrowserRouter> 
    )
}

export default Said;