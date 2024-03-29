import "./Contact.css";
import { Button } from "@mui/material";
import { Bounce } from "react-awesome-reveal";

const Contact = () => {
  return (
    <Bounce>
      <div className="container">
        <div className="email">
          <h1 id="contact">Contact Agent Botell:</h1>
          <form
            target="_blank"
            action="https://formsubmit.co/e1b339b9a8156e18552f3371af9f6826"
            method="POST">
            <div className="form-group">
              <div className="name-container">
                <input
                  type="text"
                  name="name"
                  className="form-control"
                  placeholder="Full Name"
                  required
                />
              </div>
              <div className="email-container">
                <input
                  type="email"
                  name="email"
                  className="form-control"
                  placeholder="Email Address"
                  required
                />
              </div>
            </div>
            <div className="message">
              <textarea
                placeholder="Your Message"
                className="message-form"
                name="message"
                rows="10"
                required></textarea>
            </div>
            <Button variant="contained" type="submit" className="submit-button">
              Send
            </Button>
          </form>
        </div>
      </div>
    </Bounce>
  );
};

export default Contact;
