import React from "react";
import Footer from "../components/Footer";
import Wrapper from "../components/Wrapper";
import "./Resume.css";

function Resume() {
  return (
    <div>
      <div class="card w-60">
        <a className= "download" href="./Resume-Zekarias-Negassa.pdf" width="100%" height="300%" download>
          Download Resume{" "}
        </a>
        <object
          className="resumePage"
          data="./Resume-Zekarias-Negassa.pdf"
          type="application/pdf"
          width="80%"
          height="600px"
        ></object>
      </div>
      <Footer />
    </div>
  );
}

export default Resume;
