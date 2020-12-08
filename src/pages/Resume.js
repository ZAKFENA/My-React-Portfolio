import React from "react";
import Footer from "../components/Footer";
import Wrapper from "../components/Wrapper";
import "./Resume.css"

function Resume() {
  return (
    
      <div class="card w-60">
        <object
          className="resumePage"
          data="./Resume-Zekarias-Negassa.pdf"
          type="application/pdf"
          width="80%"
          height="500px"
        ></object>
        {/* <a href ="Resume.Zekarias.Negassa.pdf" width="100%" height="300%">

          </a> */}
          <Footer />
      </div>

      
    
  );
}

export default Resume;
