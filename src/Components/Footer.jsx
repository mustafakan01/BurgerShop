import React from 'react'
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import '../Styles/Footer.css';


export const Footer = () => {
  return (
    <div className='footer'>
        <div className='socialMedia'>
            <FacebookIcon></FacebookIcon>
            <InstagramIcon></InstagramIcon>
            <TwitterIcon></TwitterIcon>
        </div>
        <p>Tüm hakları saklıdır | Burger Yiyelim</p>
    </div>
  )
}
