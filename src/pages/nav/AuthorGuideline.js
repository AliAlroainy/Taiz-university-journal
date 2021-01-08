import React from 'react'
import Home from '../Home'
import './style/AuthorGuideline.css'

const AuthorGuideline = () => {
    return (
        <div className="dd">
            <h2>Guide for Authors</h2>
           
            <h1>For authors</h1>
           
            <p>At JIICT, we want to make the process of submitting your manuscript as simple as possible. Please carefully follow our step-by-step process, completing each step before progressing to the next.</p>
          
            <h3>Step 1: Before you submit</h3>
            <p>Before you begin the process of submitting your manuscript, you should
                <br/> ensure that you have completed the following:
                <br/> Check our aims and scope
                <br/> Is your research relevant to the scope and aims of JIICT? Click <a href="#">here</a> to find out.
                <br/> Prepare your manuscript
                <br/> Have you prepared your manuscript in line with the JIICT submission guidelines? Visit our<a href="#"> submissions guidelines</a> page to find out more.
            </p>
        <h1>Submission guidelines</h1>
        <h3>Format of articles</h3>
        <p>
        JIICT publishes original research in one format: Article. <br/>In most cases, we do not impose strict limits on word count or page number.<br/> However, we strongly recommend that you write concisely and stick to the following guidelines:
        </p>
        <ul>
            <li>Articles should ideally be no more than 11 typeset pages</li>
            <li>The main text should be no more than 4,500 words (not including Abstract, Methods, References and figure legends)</li>
            <li>The title should be no more than 20 words</li>
            <li>The abstract should be no more than 200 words</li>
        </ul>
        <h3>Abstract</h3>
        <p>Please do not include any references in your Abstract. Make sure it serves both as a general introduction to the topic and as a brief, non-technical summary of the main results and their implications.</p>
        <h3>Manuscript</h3>
        <p>Your manuscript text file should start with a title page that shows author affiliations and contact information, identifying the corresponding author with an asterisk. We recommend that each section includes an introduction of referenced text that expands on the background of the work. Some overlap with the Abstract is acceptable.</p>
        <p>For the main body of the text, there are no specific requirements. You can organize it in a way that best suits your research. However, the following structure will be suitable in many cases:</p>
        <ul>
            <li>Introduction</li>
            <li>Results (with subheadings)</li>
            <li>Discussion (without subheadings)</li>
            <li>Methods</li>
        </ul>
        <p>You should then follow the main body of text with:</p>
        <ul>
            <li>References (limited to 60 references, though not strictly enforced)</li>
            <li>Acknowledgements (optional)</li>
            <li>Author contributions (names must be given as initials)</li>
            <li>Additional Information (including a Competing Interests Statement)</li>
            <li>Figure legends (these are limited to 350 words per figure)</li>
            <li>Tables (maximum size of one page)</li>
        </ul>
        <p>Please note, footnotes should not be used.</p>
        <p>You may include a limited number of uncaptioned molecular structure graphics and numbered mathematical equations if necessary. Display items are limited to 8 (figures and/or tables). However, to enable typesetting of papers, we advise making the number of display items commensurate with your overall word length. So, for Articles of 2,000 words or less, we suggest including no more than 4 figures/tables. Please note that schemes should not be used and should be presented as figures instead.</p>
        <p>Finally, you should state whether you have had any prior discussions with a JIICT Editorial Board Member about the work described in your manuscript.</p>
        <h3>Revised manuscripts</h3>
        <p>For revised manuscripts, you should provide all textual content in a single file, prepared using either Microsoft Word or LaTeX. Please note, we do not accept PDF files for the article text of revised manuscripts. Make sure you:</p>
        <ul>
            <li>Format the manuscript file as single-column text without justification.</li>
            <li>Number the pages using an Arabic numeral in the footer of each page.</li>
            <li>Use the default Computer Modern fonts for your text, and the 'symbols' font for any Greek characters.</li>
            <li>Supply any figures as individual files.</li>
            <li>Combine and supply any Supplementary Information as a separate file, preferably in PDF format.</li>
            <li>Include the title of the manuscript and author list in the first page of the Supplementary Information file.</li>
        </ul>
        <p>If you do not wish to incorporate the manuscript text and figures into a single file, please provide all textual content in a separate single file, prepared using either Microsoft Word or LaTeX.</p>
       <h3>References</h3>
       <p>We don’t copy edit your references. Therefore, it’s essential you format them correctly, as they will be linked electronically to external databases where possible. At JIICT, we use the standard  referencing style. So, when formatting your references, make sure they:</p>
       <ul>
            <li>Run sequentially (and are always numerical).</li>
            <li>Sit within square brackets.</li>
            <li>Only have one publication linked to each number.</li>
            <li>Only include papers or datasets that have been published or accepted by a named publication, recognized preprint server or data repository (if you include any preprints of accepted papers in your reference list, make sure you submit them with the manuscript).</li>
            <li>Include published conference abstracts and numbered patents, if you wish.</li>
            <li>Don’t include grant details and acknowledgements.</li>
       </ul>
       <p>Sorry, we cannot accept BibTeX (.bib) bibliography files for references. If you are making your submission by LaTeX, it must either contain all references within the manuscript .tex file itself, or (if you’re using the Overleaf template) include the .bbl file generated during the compilation process as a ‘LaTeX supplementary file’ (see the "Manuscripts" section for more details).</p>
       <p>In your reference list, you should:</p>
       <ul>
            <li>Include all authors unless there are more than six authors, in which case only the first three authors should be given, followed by 'et al.'.</li>
            <li>List authors by initials (followed by full stops) first, followed by the last name of given names and then followed by comma. The same style for the second author and so on.</li>
            <li>Use Roman text for Article and dataset titles, with only the first word of the title having an initial capital and written exactly as it appears in the work cited, ending with a full stop.</li>
            <li>Use italics for book titles, giving all words in the title an initial capital letters except for articles (a, an, the), prepositions (e. g. to, for, etc.) and conjunctions (e.g. and, but, etc.).</li>
            <li>Use italics for journal, conference, and data repository names, The titles of journals are preferred to be given in full. In… before the title of proceedings.</li>
            <li>Use bold for volume (vol.) and the issue (no.)</li>
            <li>Give the full page range (or article number), where appropriate.</li>
       </ul>
       <p>Examples</p>
       <p>Published papers:</p>
       <p>Printed journals</p>
       <p>D. H. Schott, R. N. Collins, A. Bretscher, “Secretory vesicle transport velocity in living cells depends on the myosin V lever arm length,”  J. Cell Biol.  vol. 156, no. 1, PP. 35-39, 2002.</p>
       <p>Conferences:</p>
       <p>L. Datashvili, H. Baier, “Derivation of different types of antenna reflectors from the principle of highly flexible structures,” In Proceedings of the 8th European Conference on Antennas and Propagation (EuCAP), The Hague (Netherlands), 2014, PP. 4–8. DOI: 10.1109/EuCAP.2014.6901677</p>
       <p>Books</p>
       <p>K. C. Gupta, R. Garg, I. Bahl, P. Bhartia, “Microstrip Lines and Slotlines,”. 2nd ed., rev. London (UK): Artech House, 1996. ISBN: 9780890067666</p>
       <p>Online only <br/>
            D.L., Bellin, H. Sakhtah, Y. Zhang, et al., “Electrochemical camera chip for simultaneous imaging of multiple metabolites in biofilms,”. Nat. Commun. vol. 7, no. 1, PP. 1-10, 2016. 10.1038/ncomms10535.
        </p>
        <h3>Acknowledgements</h3>
        <p>Please keep any acknowledgements brief, and don’t include thanks to anonymous referees and editors, or any effusive comments. You may acknowledge grant or contribution numbers. You should also acknowledge assistance from medical writers, proof-readers and editors.</p>
        <h3>Please be aware:</h3>
        <ul>
            <li>The author name you give as the corresponding author will be the main contact during the review process and should not change.</li>
            <li>The information you provide in the submission system will be used as the source of truth when your paper is published.</li>
        </ul>
        </div>
    )
}

export default AuthorGuideline ;