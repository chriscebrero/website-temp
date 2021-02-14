import "./projects.css";

let projects = [
  {
    name: "AWOL - Beatdapp",
    skills: ["React Native", "React.js", "MySQL", "Sequelize", "Expo", "Node.js", "Express.js"],
    description: [
      "Keeps track of company’s internal games, track points, and user statistics which are then used to calculate an employee’s elo",
      "Designed to showcase how well companies fare against other companies in terms of certain games based on win rate ratio",
      "Reach achievements & badges based on how good/bad one is in a game",
      "Creating a website counterpart where users can register/view statistics on their computer",
    ],
    color: "rgba(27,59,98,255)",  
  },
  {
    name: "Ren - Beatdapp",
    skills: ["React Native", 'Expo', 'Node.js', 'Express.js', 'Spotify API'],
    description: [
      'Application used to interpret the idea of "Renaissance"',
      'Utilizes Spotify API to capture amount of streams a user has listening to a song',
      'Calculating streams and activity on the application earns a user some rewards',
      'Host streaming parties where fans with similar taste can connect'
    ],
    color: 'black'
  },
  {
    name: 'Radiate Web',
    skills: ["React.js", "CSS3", "Node.js", "Express.js", "MongoDB", "Redux"],
    description: [
      "Web Application used to simulate the same functionality of the mobile app, 'Radiate'",
      'List all upcoming festivals based on date where one can RSVP, and meet other concert-goers prior to the date',
      'Users can RVSP, and then are given to event-exclusive discussions and other people can connect'
    ],
    color: 'blue'
  }
];

function ProjectsComponents() {
  return (
    <div>
      {projects.map((key, index) => (
        <div
          className="proj-item"
          key={index}
          style={{
            backgroundImage: `linear-gradient( to right, white 70%, ${key.color} 73%)`,
          }}
        >
          <div className="proj-content">
            <h2>{key.name}</h2>
            <div>
              <ul className="proj-skills" style={{ listStyleType: "none" }}>
                {key.skills.map((skill, i) => {
                  return <li key={i}>{skill}</li>;
                })}
              </ul>
            </div>
            <div className="proj-description-container">
              <ul className="proj-desc">
                {key.description.map((desc, i) => {
                  return <li key={i}>{desc}</li>
                })}
              </ul>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default ProjectsComponents;
