import React from "react";







export default class ProjectCard extends React.Component {
  constructor() {
    super();
      this.state = {
      isFlipped: false
    };
    this.handleClick = this.handleClick.bind(this);
  }

  render(){
    return(
      <div className="cv">
        <img src ="../images/cv.pdf"></img>
      </div>
    )
  }
}