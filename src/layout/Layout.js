import React from "react"
import TwitterIcon from '@material-ui/icons/Twitter';
import LocalCafeOutlinedIcon from '@material-ui/icons/LocalCafeOutlined';
import PhotoLibraryOutlinedIcon from '@material-ui/icons/PhotoLibraryOutlined';
import HomeOutlinedIcon from '@material-ui/icons/HomeOutlined';
import { Link } from "gatsby"
import {Avatar} from "@material-ui/core";
import "../style.css"

const Layout = props => {
  return (
    <>
      <header>
        <nav className="nav">
        <div className="avatar">
          <Link to="/"><Avatar src="https://pbs.twimg.com/profile_images/1466441765460787205/gxwvtcbE_400x400.jpg" style={{height:"85px", width:"100px"}}/></Link>
          
          </div>
          <div className="logo">
          <Avatar src="https://i.imgur.com/Tt4de9b.png" style={{height:"300px", width:"600px"}}/>
          </div>
          
          <div className="nav__links">
          
            
            <Link to="/projects"><PhotoLibraryOutlinedIcon/>Art Gallery</Link>
            <a href="https://twitter.com/ToriTooMuch"><TwitterIcon/>Twitter</a>
            <a href="https://t.co/IJZqyybIZy?amp=1"><LocalCafeOutlinedIcon/>Ko-fi</a>
            <Link to="/"><HomeOutlinedIcon/>Home</Link>
          </div>
        </nav>
      </header>
      <main className="main">{props.children}</main>
      <footer className="footer">
        <nav className="nav">
          <div className="nav__links">
            <Link to="/"><Avatar src="https://pbs.twimg.com/profile_images/1466441765460787205/gxwvtcbE_400x400.jpg" style={{height:"85px", width:"100px"}}/></Link>
          
          
            <Link to="/projects"><PhotoLibraryOutlinedIcon/>Art Gallery</Link>
            <a href="https://twitter.com/ToriTooMuch"><TwitterIcon/>Twitter</a>
            <a href="https://t.co/IJZqyybIZy?amp=1"><LocalCafeOutlinedIcon/>Ko-fi</a>
          </div>
        </nav>
      </footer>
    </>
  )
}

export default Layout
