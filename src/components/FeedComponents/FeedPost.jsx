import { useState } from "react";
import styles from "./FeedPost.module.css";
import BlockedScrollPopup from "../ChatComponents/BlockedScrollPopup";

import likeIcon from "../../assets/feed/coracao.svg";
import commentIcon from "../../assets/feed/comentario.svg";
import repostIcon from "../../assets/feed/repost.svg";
import sendIcon from "../../assets/feed/enviar.svg";
import saveIcon from "../../assets/feed/salvar.svg";

export default function FeedPost({ username, avatar, likes, comments, time }) {
  const [showPopup, setShowPopup] = useState(false);

  const handleBlocked = () => setShowPopup(true);

  return (
    <>
      <article className={styles.feedPost}>

        {/* HEADER */}
        <header className={styles.postHeader}>
          <div className={styles.postUser}>
            <img src={avatar} alt="Usuário" className={styles.postAvatar} />
            <span className={styles.postUsername}>{username}</span>
          </div>

          <button className={styles.postMenu} onClick={handleBlocked}>⋯</button>
        </header>

        {/* CONTEÚDO BLOQUEADO */}
        <div className={styles.postImageContainer} onClick={handleBlocked}>
          <div className={styles.postRestricted}>

            <svg
              className={styles.restrictedIcon}
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

            <p className={styles.restrictedTitle}>Conteúdo restrito</p>
            <p className={styles.restrictedTime}>{time} · 16:53</p>
          </div>
        </div>

        {/* AÇÕES */}
        <div className={styles.postActions}>
          <div className={styles.postActionsLeft}>

            <div className={styles.actionItem} onClick={handleBlocked}>
              <img src={likeIcon} alt="Curtir" />
              <span>{likes}</span>
            </div>

            <div className={styles.actionItem} onClick={handleBlocked}>
              <img src={commentIcon} alt="Comentar" />
              <span>{comments}</span>
            </div>

            <div className={styles.actionItem} onClick={handleBlocked}>
              <img src={repostIcon} alt="Repostar" />
            </div>

            <div className={styles.actionItem} onClick={handleBlocked}>
              <img src={sendIcon} alt="Enviar" />
            </div>

          </div>

          <div className={styles.actionItem} onClick={handleBlocked}>
            <img src={saveIcon} alt="Salvar" />
          </div>
        </div>

        {/* TEMPO */}
        <div className={styles.postTime}>{time}</div>

      </article>

      <BlockedScrollPopup
        show={showPopup}
        onClose={() => setShowPopup(false)}
        title="🔒 Conteúdo bloqueado"
        description="Seja um membro VIP do Stalkea.ai para interagir com as publicações"
      />
    </>
  );
}
