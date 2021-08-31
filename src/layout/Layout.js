import React from "react"
import { RedH1 } from "../styles/mainstyles"
import { Link } from "gatsby"
import {Avatar} from "@material-ui/core";
import "../style.css"

const Layout = props => {
  return (
    <>
      <header>
        <nav className="nav">
        <div className="avatar">
          <Link to="/"><Avatar src="https://pbs.twimg.com/profile_images/1423716924240900109/lrOP341Z_400x400.jpg" style={{height:"85px", width:"100px"}}/></Link>
          
          </div>
          <div className="nav__links">
          
            
            <Link to="/projects">Art-Gallery</Link>
            <a href="">Kofi</a>
            <a href="">Twitter</a>
          </div>
        </nav>
      </header>
      <main className="main">{props.children}</main>
      <footer className="footer">
        <nav className="nav">
          <div className="nav__links">
            <Link to="/blog">BLOG</Link>
            <Link to="/projects">Projects</Link>
            <a href="">Github</a>
            <a href="">Twitter</a>
          </div>
        </nav>
      </footer>
    </>
  )
}

export default Layout
