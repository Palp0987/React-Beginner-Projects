import React from "react";

import ReactDOM from "react-dom/client";

// TO Import THe CSS Files from The Source Folder

import "./index.css";

const allSkills = [
  {
    skill: "HTML+CSS",
    level: "advanced",
    color: "#2662EA",
  },
  {
    skill: "JavaScript",
    level: "advanced",
    color: "#EFD81D",
  },
  {
    skill: "Web Design",
    level: "advanced",
    color: "#C3DCAF",
  },
  {
    skill: "Git and GitHub",
    level: "intermediate",
    color: "#E84F33",
  },
  {
    skill: "React",
    level: "advanced",
    color: "#60DAFB",
  },
  {
    skill: "Svelte",
    level: "beginner",
    color: "#FF3B00",
  },
];

function App() {
  return (
    <div className="card">
      <Image />
      <Data />
    </div>
  );
}

// -----------------------------------------------------

function Image() {
  return (
    <div className="profileImage">
      <img
        src="https://images.unsplash.com/photo-1568585105565-e372998a195d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjMyfHxtYW58ZW58MHwwfDB8fHww&auto=format&fit=crop&w=500&q=60"
        alt="Image of Me"
      />
    </div>
  );
}

// -----------------------------------------------------

function Data() {
  return (
    <div className="data">
      <Name name="Pradeep Pal" />

      <Bio
        bio="
        Full-stack web developer. When not coding, I like to play board games, to cook (and eat), or to
        just enjoy the  Street of Lucknow.
      "
      />

      <Skillset />
    </div>
  );
}

// -----------------------------------------------------

function Name(props) {
  return <h2>{props.name}</h2>;
}

// -----------------------------------------------------

function Bio(props) {
  return <p>{props.bio}</p>;
}

// -----------------------------------------------------

function Skillset() {
  return (
    <div className="skill-list">
      {allSkills.map((uniqueSkill) => (
        <Skill
          skillName={uniqueSkill.skill}
          skillLevel={uniqueSkill.level}
          skillColor={uniqueSkill.color}
        />
      ))}
    </div>
  );
}

function Skill({ skillName, skillLevel, skillColor }) {
  return (
    <div className="skill" style={{ backgroundColor: skillColor }}>
      <span>{skillName}</span>
      <span>
        {skillLevel === "beginner" && "🙂"}
        {skillLevel === "intermediate" && "✌️"}
        {skillLevel === "advanced" && "💪"}
      </span>
    </div>
  );
}

// ----------------------------------------------------
// ---------------------   For Rendering ---------------------

// After React 18
const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
