import { SocialIcon } from "react-social-icons";
import "./Nav.css";
import ReactAudioPlayer from "react-audio-player";
import Spy from "../images/sound/cool-jazz-loops-2641.mp3";
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
        <ReactAudioPlayer id="player" src={Spy} autoPlay={false} controls />
      </div>
    </Navbar>
  );
};

export default Nav;
