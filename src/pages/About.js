import React from "react";
import "./About.css";
// import Header from "../components/Header";
import Wrapper from "../components/Wrapper";
import Footer from "../components/Footer";

function About() {
  return (
    <Wrapper>
      <div class="card w-100">
        <div className="container">
          <div className="profpic-md">
            <img
              id="ProfilePic"
              src="profile.jpg"
              width="250"
              height="250"
              alt="Profile Pic"
            />{" "}
            <div>
              <p className="paragraph">
                Full-Stack web developer dedicated to building web application
                with an intuitive user experience. Attended University of
                Minnesota Coding Bootcamp and acquired skills in HTML, CSS,
                JQuery, Javascript, Node.js, Express, SQL, MongoDB and React.js.
                Worked on multiple projects individually and with teams. I enjoy
                solving problems, working as a team, and presenting a
                mobile-first app that strives for user experience satisfaction.
                With additional skills such as leadership, working with a team and working
                in a fast pace environment, I look forward to leverage my skills
                to develop mobile-first web applications that provide great
                user experience. <br />
                <br />
              </p>
            </div>
            {/* <h3>
          <a href="./Assets/RESUME  - ZEKARIAS NEGASSA.pdf" target="_blank">
            Resume |
          </a>
          <a
            href="https://www.linkedin.com/in/zekarias-negassa"
            target="_blank"
          >
            | LinkedIn |
          </a>
          <a href="https://www.github.com/ZAKFENA" target="_blank">
            | GitHub{" "}
          </a>
        </h3> */}
          </div>
        </div>
      </div>
      <Footer />
    </Wrapper>
  );
}

export default About;
