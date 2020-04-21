import React from "react";

import MenuBar from './MenuBar'
import { Container, Row, Col } from 'reactstrap';
import ReactCardFlip from 'react-card-flip';
import Card from './Card';




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
              
              <Col sm ={5}>
              <Card></Card>
      </Col>
      
      <Col sm ={5}>
     
        <Card></Card>
      </Col>
      
      </Row>
      </Container>
            
                
              
              </main>
         
        </div>
      </>
    );
  }
}