import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
import GoogleIcon from "@mui/icons-material/Google";
import YouTubeIcon from "@mui/icons-material/YouTube";
import "./Contact.scss";

const Contact = () => {
  return (
    <div className="contact">
      <div className="wrapper">
        <span>Get in touch with us:</span>

        <div className="mail">
          <input type="text" placeholder="Enter you email" />
          <button>Join us</button>
        </div>

        <div className="icons">
          <FacebookIcon />
          <InstagramIcon />
          <TwitterIcon />
          <GoogleIcon />
          <YouTubeIcon />
        </div>
      </div>
    </div>
  );
};

export default Contact;
