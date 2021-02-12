import './skills.css';
import FrontEnd from './desktop-solid.svg';
import BackEnd from './code-branch-solid.svg';
import ToolBox from './toolbox-solid.svg';

function Skills() {
  return (
    <div className="skills-container">
        <div>
            <h1 style={{marginLeft: '30px'}}>Skills</h1>
        </div>
        <div className="skills-content">
            <div>
                <div>
                    <img alt="front-end" id="front" className="image" src={FrontEnd} />
                </div>
                <h1>Front-end</h1>
                <p>HTML5/CSS3</p>
                <p>React.js</p>
                <p>JavaScript</p>
                <p>React Native</p>
                <p>TypeScript</p>
                <p>Angular.js</p>
            </div>
            <div>
                <div>
                    <img alt="back-end" id="back" className="image" src={BackEnd} />
                </div>
                <h1>Back-end</h1>
                <p>Java</p>
                <p>Python</p>
                <p>C/C++</p>
                <p>Golang</p>
                <p>Node/Express</p>
                <p>MongoDB</p>
                <p>MySQL</p>
            </div>
            <div>
                <div>
                    <img alt="tools" id="tools" className="image" src={ToolBox} />
                </div>
                <h1>Tools</h1>
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
