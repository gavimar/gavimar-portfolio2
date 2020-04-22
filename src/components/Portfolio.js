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
                name = "Collapsing Margins"
                description ="Layout project. A responsive website to present a team, created using HTML5 and SASS."
                website = "https://gavimar.github.io/collapsing-margins/"
                code="https://github.com/gavimar/collapsing-margins"
                background = "collapsing"
                >
                  
                </ProjectCard>
                
        </Col>
        
        <Col sm ={5}>
      
          <ProjectCard
                name = "Awesome Profile Cards - Javascript"
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
                name = "Awesome Profile Cards - React"
                description ="Business cards creator, using HTML, SASS, JavasScript and RESTful API services to post and get data."
                website = "http://beta.adalab.es/project-promo-i-module-2-team-4-afternoon/"
                code="https://github.com/Adalab/project-promo-i-module-2-team-4-afternoon"
                background = "awesome"
                >
          </ProjectCard>
        </Col>
        <Col sm ={5}>
        <ProjectCard
                name = "Awesome Profile Cards - React"
                description ="Business cards creator, using HTML, SASS, JavasScript and RESTful API services to post and get data."
                website = "http://beta.adalab.es/project-promo-i-module-2-team-4-afternoon/"
                code="https://github.com/Adalab/project-promo-i-module-2-team-4-afternoon"
                background = "awesome"
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