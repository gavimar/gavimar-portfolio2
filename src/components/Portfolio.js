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
        
        <Col sm ={5}>
      
          <ProjectCard
                name = "Awesome Profile Cards - JavaScript"
                description ="Business cards creator, using HTML, SASS, JavasScript and RESTful API services to post and get data."
                website = "http://beta.adalab.es/project-promo-i-module-2-team-4-afternoon/"
                code="https://github.com/Adalab/project-promo-i-module-2-team-4-afternoon"
                background = "awesome"
               
                >
          </ProjectCard>
        </Col>
        
        </Row>

        <Row>
        <Col sm ={5}>
        <ProjectCard
                name = "Awesome Profile Cards - Migration to React"
                description ="Editing code project implementing React and refactoring."
                website = "http://beta.adalab.es/project-promo-i-module-2-team-4-afternoon/"
                code="https://github.com/Adalab/project-promo-i-module-2-team-4-afternoon"
                background = "awesome-react"
                >
          </ProjectCard>
        </Col>
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
        </Row>

        <Row>
        <Col sm ={5}>
        <ProjectCard
                name = "Character Finder - API Data - React"
                description ="Search interface that connects to and API to get and show data. If you click on an item the character details are displayed."
                website = "http://beta.adalab.es/modulo-3-evaluacion-final-gavimar/#/"
                code="https://github.com/Adalab/modulo-3-evaluacion-final-gavimar"
                background = "ricky"
                >
          </ProjectCard>
        </Col>
        {/* <Col sm ={5}>
        <ProjectCard
                name = "Shows Finder"
                description ="Javascript project: Search interface that connects to and API to get and show data. You can save your favourite items."
                website = "http://beta.adalab.es/modulo-2-evaluacion-final-gavimar/"
                code="https://github.com/Adalab/modulo-2-evaluacion-final-gavimar"
                background = "api"
                
                >
          </ProjectCard>
        </Col> */}
        </Row>

        </Container>

              
                  
                
                </main>
          
          </div>
        </>
      );
    }
  }