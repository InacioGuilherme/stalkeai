import "./FeedPost.css";

import avatar from "../../assets/perfil-sem-foto.jpeg";

import likeIcon from "../../assets/coracao.svg";
import commentIcon from "../../assets/comentario.svg";
import repostIcon from "../../assets/repost.svg";
import sendIcon from "../../assets/enviar.svg";
import saveIcon from "../../assets/salvar.svg";

export default function FeedPost() {
  return (
    <article className="feed-post">

      {/* HEADER */}
      <header className="post-header">
        <div className="post-user">
          <img src={avatar} alt="Usuário" className="post-avatar" />
          <span className="post-username">And*****</span>
        </div>

        <button className="post-menu">⋯</button>
      </header>

      {/* CONTEÚDO BLOQUEADO */}
      <div className="post-image-container">
        <div className="post-restricted">

          {/* CADEADO (SVG inline igual ao original) */}
          <svg
            className="restricted-icon"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="1.6"
              d="M12 11c1.1 0 2-.9 2-2V7a2 2 0 10-4 0v2c0 1.1.9 2 2 2zm6 0v7a2 2 0 01-2 2H8a2 2 0 01-2-2v-7a2 2 0 012-2h8a2 2 0 012 2z"
            />
          </svg>

          <p className="restricted-title">Conteúdo restrito</p>
          <p className="restricted-time">Agora · 16:53</p>
        </div>
      </div>

      {/* AÇÕES */}
      <div className="post-actions">
        <div className="post-actions-left">

          <div className="action-item">
            <img src={likeIcon} alt="Curtir" />
            <span>204</span>
          </div>

          <div className="action-item">
            <img src={commentIcon} alt="Comentar" />
            <span>73</span>
          </div>

          <div className="action-item">
            <img src={repostIcon} alt="Repostar" />
          </div>

          <div className="action-item">
            <img src={sendIcon} alt="Enviar" />
          </div>

        </div>

        <div className="action-item">
          <img src={saveIcon} alt="Salvar" />
        </div>
      </div>

      {/* TEMPO */}
      <div className="post-time">Agora</div>

    </article>
  );
}
