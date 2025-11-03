import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

const mySkills = [
  {
    name: "JavaScript",
    comfort: 8,
    frontEnd: true,
    backend: true,
  },
  {
    name: "CSS",
    comfort: 7,
    frontEnd: true,
    backend: false,
  },
  {
    name: "HTML",
    comfort: 10,
    frontEnd: true,
    backend: true,
  },
];

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div className="skills">
        <h2 style={styles.skillsHeader}>My Skills</h2>
        <ul>
          {mySkills.map((skill, index) => (
            <li key={index} style={styles.skillItem}>
              <h3>{skill.name}</h3>
              <p>Comfort Level: {skill.comfort}/10</p>
              <p>Frontend: {skill.frontEnd ? "Yes" : "No"}</p>
              <p>Backend: {skill.backend ? "Yes" : "No"}</p>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}

const styles = {
  skillItem: {
    fontFamily: "Vend Sans, sans-serif",
    margin: "12px 0",
    padding: "16px",
    border: "1px solid transparent",
    borderImage: "linear-gradient(to right, #4e8cff, #d46cf9) 1",
    borderRadius: "6px",
    boxShadow: "0 4px 15px rgba(72, 91, 255, 0.6), 0 4px 25px rgba(215, 108, 249, 0.6)",
    listStyle: "none",
  },
  skillsHeader: {
    fontFamily: "Vend Sans, sans-serif",
    fontSize: "32px",
    fontWeight: "bold",
    marginBottom: "20px",
    marginLeft: "20px",
    textTransform: "uppercase",
    background: "linear-gradient(to right, #4e8cff, #d46cf9)",
    display: "inline-block",
    WebkitBackgroundClip: "text",
    color: "transparent",
    textAlign: "center",
    width: "100%",
  },
};

export default App;
