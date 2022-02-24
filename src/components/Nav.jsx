import { SocialIcon } from "react-social-icons";
import "./Nav.css";
import ReactAudioPlayer from "react-audio-player";
import Spy from "../images/007  - James Bond  - Theme.mp3";
import { Navbar } from "react-bootstrap";

const Nav = () => {
  return (
    <Navbar sticky="top">
      <div className="socials">
        <SocialIcon
          url="https://www.linkedin.com/in/tobiasbotell/"
          bgColor="white"
          fgColor="#D4AF37"
        />
        <SocialIcon
          url="https://github.com/CrumpetsNTea"
          bgColor="white"
          fgColor="#D4AF37"
          className="github"
        />
      </div>

      <div>
        <ReactAudioPlayer id="player" src={Spy} autoPlay={true} controls />
      </div>
    </Navbar>
  );
};

export default Nav;
