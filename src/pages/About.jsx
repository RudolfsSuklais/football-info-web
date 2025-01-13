import React from "react";
import "./About.css";

function About() {
  return (
    <div className="about-page">
      <div className="about-page-headline">
        <h1>About Us</h1>
      </div>
      <div className="about-page-content-wrapper">
        <div className="about-page-who-are-we">
          <h2>Who Are We?</h2>
          <p>
            Welcome to Fifa history, your ultimate destination for exploring the
            lives and careers of football legends. Our mission is to provide
            fans and enthusiasts with detailed, engaging, and accurate profiles
            of some of the greatest players in football history.
          </p>
        </div>
        <div className="about-page-our-mission">
          <h2>Our Mission</h2>
          <p>
            We aim to celebrate the beautiful game by highlighting the
            achievements, stories, and legacy of iconic players from all over
            the world. Whether you’re a lifelong fan or new to the sport, we’re
            here to deepen your appreciation for football’s most influential
            figures.
          </p>
        </div>
        <div className="about-page-what-youll-find">
          <h2>What You’ll Find</h2>

          <ul>
            <li>
              Player Profiles: Comprehensive biographies of football stars like
              Zlatan Ibrahimović, Wayne Rooney, Pedro, Juan Mata, and Raheem
              Sterling.
            </li>
            <li>
              Achievements: Detailed breakdowns of their career highlights,
              records, and accolades.
            </li>
            <li>
              Inspirational Stories: Insights into their journeys, struggles,
              and triumphs on and off the pitch.
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default About;
