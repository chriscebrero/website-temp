import "./skills.css";
import FrontEnd from "./desktop-solid.svg";
import BackEnd from "./code-branch-solid.svg";
import ToolBox from "./toolbox-solid.svg";

function Skills() {
  return (
    <div className="skills-container">
      <div>
        <h1 style={{ marginLeft: "30px" }}>Skills</h1>
      </div>
      <div className="skills-content">
        <div>
          <div>
            <img alt="front-end" id="front" className="image" src={FrontEnd} />
          </div>
          <h1>Front-end</h1>
          <ul style={{ listStyleType: "none" }}>
            <li>HTML5/CSS3</li>
            <li>React.js</li>
            <li>JavaScript</li>
            <li>React Native</li>
            <li>TypeScript</li>
            <li>Angular.js</li>
          </ul>
        </div>
        <div>
          <div>
            <img alt="back-end" id="back" className="image" src={BackEnd} />
          </div>
          <h1>Back-end</h1>
          <ul style={{ listStyleType: "none" }}>
            <li>Java</li>
            <li>Python</li>
            <li>C/C++</li>
            <li>Golang</li>
            <li>Node/Express</li>
            <li>MongoDB</li>
            <li>MySQL</li>
          </ul>
        </div>
        <div>
          <div>
            <img alt="tools" id="tools" className="image" src={ToolBox} />
          </div>
          <h1 style={{ marginLeft: "15px" }}>Tools</h1>
          <p>AWS</p>
          <p>Git</p>
          <p>Linux</p>
          <p>Serverless</p>
          <p>Unit Testing</p>
        </div>
      </div>
    </div>
  );
}

export default Skills;
