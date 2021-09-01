import React from "react"
import Layout from "../layout/Layout"
import projects from "../json/projects.json"

export default function Blog() {


  return (
    <Layout>
      <h1>Welcome to my Art Galllery</h1>

      {projects.map((project => {
        return (<div key={project.name}>

          <h1>{project.name}</h1>
          <img src={project.image} alt={project.name}/>
          <p>{project.description}</p>
          <div>
            <a href={project.github}><button>Donate</button></a>
            <a href={project.live}><button>Purchase Print</button></a>
          </div>

        </div>)
      }))}
    </Layout>
  )
}