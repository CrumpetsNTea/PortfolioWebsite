import "./Missions.css";
import Album from "./Album";
import ReactRoundedImage from "react-rounded-image";
import headshot from "../images/Tobias_Bond.png";
import { Slide, Fade } from "react-awesome-reveal";

const Missions = () => {
  return (
    <>
      <div className="info-container">
        <Fade triggerOnce direction="right" duration={1500}>
          <ReactRoundedImage
            image={headshot}
            imageWidth="550"
            imageHeight="550"
            roundedSize="8"
            borderRadius="500"
            roundedColor="#292929"
          />
          <div className="info-and-button">
            <h3 id="introduction">
              The name's Botell, Tobias Botell. <br /> <br />
              International man of mystery... <br /> <br /> and Full-Stack
              Developer
            </h3>
            <div className="button-container">
              <button className="button">
                <a href="#previous-missions">
                  <span data-title="WELCOME, AGENT">PREVIOUS MISSIONS</span>{" "}
                </a>
              </button>
            </div>
          </div>
        </Fade>
      </div>

      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <Slide triggerOnce>
        <div className="previous-missions" id="previous-missions">
          <h1>Previous Missions</h1>
        </div>
        <div className="missions-container">
          <div>
            <Album />
          </div>
        </div>
      </Slide>
    </>
  );
};

export default Missions;
