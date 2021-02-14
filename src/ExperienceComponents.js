import "./experience.css";

let obj = [
  {
    name: "Beatdapp",
    position: "Software Engineering Intern",
    startDate: "May 2020",
    endDate: "September 2020",
    description: [
      "Improved the error-handling on the company’s flagship music streamer and video streamer",
      "Implemented the front end designs and functionality for the mobile app version of Beatdapp, Renaissance",
      "Spearheaded the creation of a company internal-based mobile app, ‘AWOL’",
      "Incorporated the full designs & functionality of AWOL into React Native code",
    ],
    color: "rgba(121,0,230,255)",
  },
  {
    name: 'SAP',
    position: 'Software Engineering Intern',
    startDate: 'September 2018',
    endDate: 'August 2019',
    description: [
      "Implemented key features within the backend of the SAP’s Help Portal which boosted efficiency",
      "Implemented designs created and discussed by various stakeholders for SAP Hybris",
      "Ensured stability of SAP’s User Assistance Content Platform by writing verbose JavaScript tests to automate UI tests",
      "Migrated automation tests written in Protractor.js into Nightwatch.js to polish readability of code, and efficiency of functions"],
    color: "rgba(235,160,33,255)"
  }
];
function ExperienceComponents() {
  return (
    <div>
      {obj.map((key, index) => (
        <div key={index}>
          <div className="exp-item" style={{backgroundImage: `linear-gradient( to right, white 70%, ${key.color} 73%)`}}>
            <div className="exp-content">
              <h2>{key.name}</h2>
              <h3>{key.position}</h3>
              <h4>
                {key.startDate} - {key.endDate}
              </h4>
              <ul>
                {key.description.map((desc, i) => {
                  return  (
                  <li index={i}>{desc}</li>
                  )
                })}
              </ul>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default ExperienceComponents;
