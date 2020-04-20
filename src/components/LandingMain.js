
import React from "react";
// import snow from './snow'
import startSnow from './snow';




class LandingMain extends React.Component {
  constructor(){
    super()
  }

  componentDidMount() {
    console.log('Component did mount!')
    startSnow();
 }

 componentWillUnmount(){
  startSnow();

 }
  

 
  render() {

    return (
      <div className="landing-main">
<div className="landing-title">
  <h1 className="title1">Gádor Villanueva Martos</h1>
  <h1 className="title2">Front-end Developer</h1>
</div>

        <div className="bg">
  <div className="mountain">
    <div className="mountain-top">
      <div className="mountain-cap-1"></div>
      <div className="mountain-cap-2"></div>
      <div className="mountain-cap-3"></div>
    </div>
  </div>
  <div className="mountain-two">
    <div className="mountain-top">
      <div className="mountain-cap-1"></div>
      <div className="mountain-cap-2"></div>
      <div className="mountain-cap-3"></div>
    </div>
  </div>
   <div className="mountain-three">
    <div className="mountain-top">
      <div className="mountain-cap-1"></div>
      <div className="mountain-cap-2"></div>
      <div className="mountain-cap-3"></div>
    </div>
  </div>
  <div className="mountain-four">
    <div className="mountain-top">
      <div className="mountain-cap-1"></div>
      <div className="mountain-cap-2"></div>
      <div className="mountain-cap-3"></div>
    </div>
  </div>
  <div className="mountain-five">
    <div className="mountain-top">
      <div className="mountain-cap-1"></div>
      <div className="mountain-cap-2"></div>
      <div className="mountain-cap-3"></div>
    </div>
  </div>
  <div className="cloud"></div>
</div>
  



      </div>
    )
  }
}

export default LandingMain;