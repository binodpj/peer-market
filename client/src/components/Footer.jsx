import "../styles/Footer.scss";
import { LocationOn, LocalPhone, Email } from "@mui/icons-material";
const Footer = () => {
  return (
    <div className="footer">
      <div className="footer_left">
        <a
          href="/"
          style={{
            textDecoration: "none",
            display: "flex",
            alignItems: "center",
          }}
        >
          <p
            style={{
              fontFamily: "Arial",
              fontSize: "36px",
              fontWeight: "bold",
              color: "#2d2d2d",
              margin: 0,
            }}
          >
            PeerMarket
          </p>
        </a>
      </div>

      <div className="footer_center">
        <h3>Useful Links</h3>
        <ul>
          <li>About Us</li>
          <li>Terms and Conditions</li>
          <li>Return and Refund Policy</li>
        </ul>
      </div>

      <div className="footer_right">
        <h3>Contact</h3>
        <div className="footer_right_info">
          <LocalPhone />
          <p>+91 12345 67890</p>
        </div>
        <div className="footer_right_info">
          <Email />
          <p>peermarket@support.com</p>
        </div>
        <img src="/assets/payment.png" alt="payment" />
      </div>
    </div>
  );
};

export default Footer;
