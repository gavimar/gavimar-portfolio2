import React from "react";

import MenuBar from './MenuBar'
import { Container, Row, Col } from 'reactstrap';
import ReactCardFlip from 'react-card-flip';





export default class Portfolio extends React.Component {
  constructor() {
    super();
      this.state = {
      isFlipped: false
    };
    this.handleClick = this.handleClick.bind(this);
  }
 
  handleClick(e) {
    e.preventDefault();
    this.setState(prevState => ({ isFlipped: !prevState.isFlipped }));
  }
  render() {
    
    return (
      <>
        <div className="portfolio-wrapper">
          <MenuBar></MenuBar>
          {/* <header className="portfolio-hero"><p>projects</p></header> */}
          <main className="portfolio-main">

            <Container>
              <Row>
              <Col sm={{ size: 'auto', offset: 1 }}>
              <h3 className="project-title"> Collapsing Margins. Website layout.</h3>
              <div className ="card"></div>
              <ReactCardFlip isFlipped={this.state.isFlipped} flipDirection="vertical">
        <div>
          This is the front of the card.
          <button onClick={this.handleClick}>Click to flip</button>
          </div>
        
 
        <div>
          This is the back of the card.
          <button onClick={this.handleClick}>Click to flip</button>
          </div>
      </ReactCardFlip>
      </Col>
      <Col sm={{ size: 'auto', offset: 1 }}>
      <h3 className="project-title"> Collapsing Margins. Website layout.</h3>
              <div className ="card">
      <ReactCardFlip isFlipped={this.state.isFlipped} flipDirection="vertical">
        <div>
          This is the front of the card.
          <button onClick={this.handleClick}>Click to flip</button>
          </div>
        
 
        <div>
          This is the back of the card.
          <button onClick={this.handleClick}>Click to flip</button>
          </div>
      </ReactCardFlip>
      </div>
      </Col>
      
      </Row>
      </Container>
            
                
              
              </main>
         
        </div>
      </>
    );
  }
}