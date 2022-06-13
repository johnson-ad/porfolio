import React from 'react'; 
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import EmailIcon from '@material-ui/icons/Email';
import GithubIcon from '@material-ui/icons/GitHub';
import "../styles/Home.css";

function Home() {
  return (
    <div className='home'>
        <div className="about">
          <h2>Hi, My Name is Johnson</h2>
          <div className="prompt">
            <p>A React developer junoir with a passion for learning and creating.</p>            
            <a href='https://www.linkedin.com/'><LinkedInIcon/></a>
            <a href='https://mail.google.com/'><EmailIcon/></a>
            <a href='https://github.com/johnson-ad'><GithubIcon/></a>
          </div>
        </div>
        <div className="skills">
          <h1>Skills</h1>
          <ol className="list">
            <li className="item">
              <h2>Front-End</h2>
              <span>
                ReactJS, NextJS, RxJS, React Native, Redux toolkit, HTML, CSS, Sass, NPM, BootStrap, MateriaUI, Yarn, StyledComponents
              </span>
            </li>
            <li className="item">
              <h2>Back-End</h2>
              <span>NodeJS, ExpressJs, MongoDB, GraphSQ, AWS S3</span>
            </li>
            <li className="item">
              <h2> Languages </h2>
              <span>JavaScript, TypeScript, Python</span>
            </li>
          </ol>
        </div>
        <br/>         
    </div>
  )
}

export default Home