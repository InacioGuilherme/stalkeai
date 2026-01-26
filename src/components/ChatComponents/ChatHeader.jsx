import "./ChatHeader.css";

import backIcon from "../../assets/chat/setaparaolado2.svg";
import phoneIcon from "../../assets/chat/telefone.svg";
import videoIcon from "../../assets/chat/video.svg";
import avatarFallback from "../../assets/chat/perfil-sem-foto.jpeg";

export default function ChatHeader() {
  return (
    <div className="chat-header">
      <div className="chat-header-left">
        <button className="back-button" aria-label="Voltar">
          <img src={backIcon} alt="Voltar" />
        </button>

        <div className="chat-user-info">
          <button className="chat-avatar-btn" aria-label="Avatar">
            <span className="chat-avatar-gradient">
              <span className="chat-avatar-inner">
                <img
                  src={avatarFallback}
                  alt=""
                  className="chat-avatar-img"
                />
              </span>
            </span>
          </button>

          <button className="chat-name-btn">
            <span className="chat-user-name">Jo*******</span>
            <span className="chat-user-status">Online</span>
          </button>
        </div>
      </div>

      <div className="chat-header-right">
        <button className="header-icon-btn" aria-label="Ligação de áudio">
          <img src={phoneIcon} alt="Áudio" />
        </button>

        <button className="header-icon-btn" aria-label="Ligação de vídeo">
          <img src={videoIcon} alt="Vídeo" />
        </button>
      </div>
    </div>
  );
}
