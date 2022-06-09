import React from 'react'
import InstagramIcon from '@material-ui/icons/Instagram';
import FacebookIcon from '@material-ui/icons/Facebook';
import TwitterIcon from '@material-ui/icons/Twitter';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import GithubIcon from '@material-ui/icons/GitHub';
import "../styles/Footer.css";

function Footer() {
  return (
    <div className='footer'>
        <div className='socialMedia'>
            <a href='https://www.linkedin.com/'><LinkedInIcon/></a>
            <a href='https://github.com/johnson-ad'><GithubIcon/></a>
             <a href='https://www.facebook.com/johnson.pandi.39/'><FacebookIcon/></a>
            <a href='https://twitter.com/Johnson007king'><TwitterIcon/></a>
            <a href='https://www.instagram.com'><InstagramIcon/></a>
        </div>
        <p> &copy; 2022 Johnson-ad</p>
    </div>
  )
}

export default Footer