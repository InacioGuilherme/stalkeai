import "./ChatInput.css";

import cameraIcon from "../../assets/chat/camera.svg";
import micIcon from "../../assets/chat/microfone.svg";
import galleryIcon from "../../assets/chat/galeria.svg";
import stickerIcon from "../../assets/chat/sticker.svg";
import heartIcon from "../../assets/chat/coracao.svg";

export default function ChatInput() {
  return (
    <div className="message-input-container">
      <div className="message-input-wrapper">
        {/* Ícone da câmera (roxinho) */}
        <div className="message-input-icon camera-icon">
          <img src={cameraIcon} alt="Câmera" />
        </div>

        {/* Campo de texto */}
        <input
          type="text"
          className="message-input"
          placeholder="Mensagem..."
        />

        {/* Ações à direita */}
        <div className="message-input-actions">
          <div className="input-action-icon">
            <img src={micIcon} alt="Áudio" />
          </div>
          <div className="input-action-icon">
            <img src={galleryIcon} alt="Galeria" />
          </div>
          <div className="input-action-icon">
            <img src={stickerIcon} alt="Sticker" />
          </div>
          <div className="input-action-icon">
            <img src={heartIcon} alt="Curtir" />
          </div>
        </div>
      </div>
    </div>
  );
}
