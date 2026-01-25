import "./FeedHeader.css";
import instaLogo from "../../assets/logo-insta.png";
import heartIcon from "../../assets/coracao.svg";
import sendIcon from "../../assets/enviar.svg";

export default function FeedHeader() {
  return (
    <header className="feed-header">
      <div className="feed-header-left">
        <img src={instaLogo} alt="Instagram" className="feed-logo" />
      </div>

      <div className="feed-header-right">
        <button className="icon-button">
          <img src={heartIcon} alt="Curtidas" />
          <span className="notification-dot" />
        </button>

        <button className="icon-button">
          <img src={sendIcon} alt="Directs" />
          <span className="notification-badge">2</span>
        </button>
      </div>
    </header>
  );
}
