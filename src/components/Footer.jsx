import React from 'react'
import InstagramIcon from '@material-ui/icons/Instagram';
import FacebookIcon from '@material-ui/icons/Facebook';
import TwitterIcon from '@material-ui/icons/Twitter';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import "../styles/Footer.css";

function Footer() {
  return (
    <div className='footer'>
        <div className='socialMedia'>
            <FacebookIcon/>
            <TwitterIcon/>
            <InstagramIcon/>
            <LinkedInIcon/>
        </div>
        <p> &copy; 2022 Johnson-ad</p>
    </div>
  )
}

export default Footer