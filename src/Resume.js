import React from "react";
import Experience from "./Experience"; // Import Experience component
import Achievement from "./Achievement"; // Optional: Import Achievement component

function Resume() {
  const experiences = [
    {
      company: "Site Reliability Engineer Intern",
      work_mode: "Remote",
      location: "Oanda Corporation, Toronto, CA",
      dates: "Jan.~Apr.2023",
      achievements: [
        "Created and maintained an IM-DB (Incident Management Database) with Python and SQL.",
        "Automated the role management process on Confluence Kafka, significantly reducing time spent on management.",
        "Developed a Kafka cost calculator using Pandas and Numpy to perform calculations on a spreadsheet, significantly reducing team workload and improving overall efficiency.",
      ],
},
    // Add more experience objects following the same structure
  ];

return (
  <div className="resume">
    <h1 className="resume-title">Your Name</h1>
    {experiences.map((experience) => (
      <Experience key={experience.company} {...experience} />
      // display the achievements by looping through the achievements array

    ))}

  </div>
);
}

export default Resume;
