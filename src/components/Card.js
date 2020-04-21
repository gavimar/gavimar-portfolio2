import React from "react";

import ReactCardFlip from 'react-card-flip';
import {Button} from 'reactstrap';





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
        
          
          <Button onClick={this.handleClick}>Details</Button>
          </div>
        
 
        <div>
          This is the back of the card.
          <button onClick={this.handleClick}>Click to flip</button>
          </div>
          
      </ReactCardFlip>
      </div>
      
  )}

}