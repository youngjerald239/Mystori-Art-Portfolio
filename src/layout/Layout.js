import React from "react"
import { RedH1 } from "../styles/mainstyles"
import { Link } from "gatsby"
import "../style.css"

const Layout = props => {
  return (
    <>
      <header>
        <nav className="nav">
          
          <div className="nav__links">
          <Link to="/"><img src="https://i.imgur.com/Tt4de9b.png" style={{height:"85px", width:"250px", display:"flex"}}/></Link>
            <Link to="/blog">BLOG</Link>
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
