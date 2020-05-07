  import React from "react";

  import MenuBar from './MenuBar'
  import { Container, Row, Col } from 'reactstrap';

  import ProjectCard from './ProyectCard';
  
 
  export default class Portfolio extends React.Component {
    constructor() {
      super();
      
    }
  
    
    render() {
      
      return (
        <>
          <div className="portfolio-wrapper">
            <MenuBar></MenuBar>
            
            <main className="portfolio-main">


              <Container className="card-container">
                <Row>
                
                <Col sm ={5} >
                <ProjectCard
                name = "Collapsing Margins - Responsive Layout"
                description ="Layout project. A responsive website to present a team, created using HTML5 and SASS."
                website = "https://gavimar.github.io/collapsing-margins/"
                code="https://github.com/gavimar/collapsing-margins"
                background = "collapsing"
                
                >
                  
                </ProjectCard>
                
        </Col>

        <Col sm ={5} >
                <ProjectCard
                name = "Simple Responsive Layout - jQuery"
                description ="Layout project. A simple responsive website for online yoga courses, created using HTML5, CSS and jQuery."
                website = "https://gavimar.github.io/Website-layout-jquery/"
                code="https://github.com/gavimar/Website-layout-jquery"
                background = "yoga"
                
                >
                  
                </ProjectCard>
                
        </Col>

        
        </Row>

        <Row>
        <Col sm ={5}>
      
          <ProjectCard
                name = "Awesome Profile Cards - JavaScript"
                description ="Business cards creator, using HTML, SASS, JavasScript and RESTful API services to post and get data."
                website = "https://gavimar.github.io/awesome-cards-javascript/"
                code="https://github.com/gavimar/awesome-cards-javascript"
                background = "awesome"
               
                >
          </ProjectCard>
        </Col>
        
        
        <Col sm ={5}>
        <ProjectCard
                name = "Awesome Profile Cards - Migration to React"
                description ="Editing code project implementing React and refactoring."
                website = "https://gavimar.github.io/awesome-cards-react/"
                code="https://github.com/gavimar/awesome-cards-react"
                background = "awesome-react"
                >
          </ProjectCard>
        </Col>

        </Row>

        <Row>

        <Col sm ={5}>
        <ProjectCard
                name = "Shows Finder -API Data - Javascript "
                description ="Search interface that connects to and API to get and show data. You can save your favourite items."
                website = "http://beta.adalab.es/modulo-2-evaluacion-final-gavimar//"
                code="https://github.com/Adalab/modulo-2-evaluacion-final-gavimar"
                background = "api"
                
                >
          </ProjectCard>
        </Col>
        
        <Col sm ={5}>
        <ProjectCard
                name = "Climb Around - API Data - React Hooks"
                description ="React project using hooks, geolocation and leaflet. It connects to and API to show climbing routes near the user location (also displayed in an interactive map)."
                website = "https://gavimar.github.io/mountain-proyect-api/"
                code="https://github.com/gavimar/mountain-proyect-api"
                background = "climb"
                
                >
          </ProjectCard>
        </Col>

        </Row>

        <Row>
        <Col sm ={5}>
        <ProjectCard
                name = "Character Finder - API Data - React Class Components"
                description ="Search interface that connects to and API to get and show data. If you click on an item the character details are displayed."
                website = "https://gavimar.github.io/api-react/"
                code="https://github.com/gavimar/api-react"
                background = "ricky"
                >
          </ProjectCard>
        </Col>
        </Row>
        
       

        </Container>

              
                  
                
                </main>
          
          </div>
        </>
      );
    }
  }