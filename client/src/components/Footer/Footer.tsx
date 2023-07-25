import PhoneOutlinedIcon from "@mui/icons-material/PhoneOutlined";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import "./Footer.scss";

const Footer = () => {
  return (
    <div className="footer">
      <div className="top">
        <div className="item">
          <h1>Categories</h1>
          <span>Women</span>
          <span>Men</span>
          <span>Shoes</span>
          <span>Accessories</span>
          <span>New Arrivals</span>
        </div>

        <div className="item">
          <h1>Links</h1>
          <span>FAQ</span>
          <span>Pages</span>
          <span>Stores</span>
          <span>Compare</span>
          <span>Cookies</span>
        </div>

        <div className="item">
          <h1>About</h1>
          <span>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias
            delectus necessitatibus quam obcaecati fugit rerum ipsum voluptates
            tenetur dolorem earum, perferendis quas hic neque et nihil ullam
            aspernatur, odit, quisquam omnis? Similique eos vero accusantium
            libero quis ab perspiciatis, voluptatem consequuntur deleniti odio
            impedit laboriosam, rem minima facilis vel at!
          </span>
        </div>

        <div className="item">
          <h1>Contact</h1>
          <div className="contact-info">
            <PhoneOutlinedIcon />
            <span>+12345678</span>
          </div>
          <div className="contact-info">
            <EmailOutlinedIcon />
            <span>support@clothingstore.com</span>
          </div>
        </div>
      </div>

      <div className="bottom">
        <div className="left">
          <span className="logo">Clothingstore</span>
          <span className="copyright">
            © Copyright 2023. All Rights Reserved.
          </span>
        </div>

        <div className="right">
          <img src="./img/payment.png" alt="" />
        </div>
      </div>
    </div>
  );
};

export default Footer;
