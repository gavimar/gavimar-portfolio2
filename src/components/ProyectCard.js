import React from "react";

import ReactCardFlip from 'react-card-flip';
import {Button} from 'reactstrap';
import image from '../images/collapsing.jpg';
import { Fragment } from 'react';






export default class ProjectCard extends React.Component {
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

 

render () {
  
  return(
    
    <Fragment>
    
              
              <ReactCardFlip  isFlipped={this.state.isFlipped} flipDirection="vertical">
                
        <div className ={`card-front ${this.props.background}`}>
          
        
          
          <Button className="button" onClick={this.handleClick}>Details</Button>
          </div>
        
 
          <div className ="card-back">
            <div className = "card-back-container">
            <h3 className="project-title"> {this.props.name}</h3>
            <div className="project-links">
            <a href={this.props.website}><i className="fas fa-desktop"></i>Website</a>
            <a href={this.props.code}><i className="fas fa-code-branch"></i>Code</a>
            </div>
            <p className="project-description">{this.props.description}</p>
            
          </div>

          
        <Button className="button" onClick={this.handleClick}>Back</Button>
        </div>
          
      </ReactCardFlip>
      
      </Fragment>
  )}

}