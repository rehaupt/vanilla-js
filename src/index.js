// import React from 'react';
// import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { createRoot } from "react-dom/client";
import "./styles/index.scss";
import { Theme } from "@carbon/react/";
import TutorialHeader from "./components/TutorialHeader";
import FetchObservations from "./components/FetchObservations";
const nav = document.getElementById("navigation");
if (nav) {
  const navRoot = createRoot(nav);
  navRoot.render(<TutorialHeader />);
}

function Home() {
  return (
    <div style={{ padding: 20 }}>
      <h2>Home View</h2>
      <p>Lorem ipsum dolor sit amet, consectetur adip.</p>
    </div>
  );
}

function About() {
  return (
    <div style={{ padding: 20 }}>
      <h2>About View</h2>
      <p>Lorem ipsum dolor sit amet, consectetur adip.</p>
    </div>
  );
}
const currentaqi = document.getElementById("current-aqi");
const aqiroot = createRoot(currentaqi);
aqiroot.render(<FetchObservations />);
const myapp = document.querySelector(".myapp");
console.log("myapp: ", myapp);
const approot = createRoot(myapp); // createRoot(wxLinks!) if you use TypeScript
approot.render(
  <>
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "left",
        marginLeft: "2rem",
      }}
    >
      <h2 style={{ color: "rebeccapurple" }}>Hello World from Ada, Oklahoma</h2>
    </div>
    {/* <Router>
      <Link to='/'>Home</Link>
      <Link to='/about'>About</Link>
      <Routes>
        <Route exact path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
      </Routes>
    </Router> */}
  </>
);

// Create heading node
const heading = document.createElement("h1");
heading.textContent = "Interesting! (via index.js...)";

// Append heading node to the DOM
const app = document.querySelector("#demo");
const appRoot = createRoot(app);
appRoot.render(About());
