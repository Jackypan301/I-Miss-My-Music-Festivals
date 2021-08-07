import React, {useState, useEffect} from 'react';
import '../styles/About.css'

export default class Modal extends React.Component {
  render() {
    if(!this.props.show){
        return null;
    }
  return <div class="modal" id="modal" onClick={()=>{this.props.close(this.props.show)}}>
  <h2>Thanks For Visting</h2>
  <div class="content">Hi Thanks for visiting my website. This was just a fun side-project that I wanted to do. The site was inspired by other sites such as I miss my cafe and I miss my bar. I do not own any of the audio you hear here. Please come check out my portfolio page to learn more about me at <br /> <a href={"https://jackypanportfolio.netlify.app/"}>Click here to go to my home page</a> <br /> <br /><br /> Please click on window again to close</div>

</div>;
  }
}