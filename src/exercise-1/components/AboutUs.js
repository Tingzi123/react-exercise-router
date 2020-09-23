import React, {Component} from 'react';

class AboutUs extends Component {
  render() {
    return (
      <div className="aboutUs">
        <p>Company: ThoughtWorks Local</p>
        <p>Location: Xi'an</p>
        <p>For more information, please view our  
            <span 
            onClick={()=>{
                this.props.history.push("/");
            }}>website</span></p>
      </div>
    );
  }
}

export default AboutUs;