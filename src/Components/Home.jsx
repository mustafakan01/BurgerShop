import React from 'react'
import { Link } from 'react-router-dom';
import FastfoodIcon from '@mui/icons-material/Fastfood';
import BannerImage from '../assets/banneryeni.jpg'
import '../Styles/Home.css'


export const Home = () => {
  return (
    <div className='mainPage' style={{backgroundImage:`url(${BannerImage})`}}>

   
      <div className='order' >
        <Link to="/menu">
        <button>SİPARİŞ VER <FastfoodIcon></FastfoodIcon></button>
        </Link>      
      </div>
    </div>
  )
}
