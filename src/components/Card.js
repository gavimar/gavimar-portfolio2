import React from "react";

import ReactCardFlip from 'react-card-flip';
import {Button} from 'reactstrap';
import image from '../images/collapsing.jpg'





export default class Card extends React.Component {
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
    
    
    <div className ="card">
      <h3 className="project-title"> Collapsing Margins. Website layout.</h3>
              <ReactCardFlip isFlipped={this.state.isFlipped} flipDirection="vertical">
                
        <div className ="card-front">
        
          
          <Button className="button" onClick={this.handleClick}>Details</Button>
          </div>
        
 
          <div className ="card-back">
            <img src={image}/>
        
          
        <Button className="button" onClick={this.handleClick}>Back</Button>
        </div>
          
      </ReactCardFlip>
      </div>
      
  )}

}