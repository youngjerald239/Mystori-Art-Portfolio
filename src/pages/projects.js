import React from "react"
import Layout from "../layout/Layout"
import Card from 'react-bootstrap/Card'
import { Container, Row, Col } from "react-bootstrap"
import projects from "../json/projects.json"

export default function Blog() {


  return (
    <Layout>
      <h1>Welcome to my Art Galllery</h1>

      {projects.map((project => {
        return (<div className="project-card-view" key={project.name}>

          <Card className="card">
  <Card.Img className="card-image" src={project.image} alt="Card image" />
</Card>

        </div>)
      }))}
    </Layout>
  )
}