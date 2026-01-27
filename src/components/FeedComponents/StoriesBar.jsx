import { useState } from "react";
import styles from "./StoriesBar.module.css";
import BlockedScrollPopup from "../ChatComponents/BlockedScrollPopup";
import selfAvatar from "../../assets/feed/perfil-sem-foto.jpeg";
import av1 from "../../assets/feed/av-fallback-1.jpg";
import av2 from "../../assets/feed/av-fallback-2.jpg";
import av3 from "../../assets/feed/av-fallback-3.jpg";
import av4 from "../../assets/feed/av-fallback-4.jpg";
import av5 from "../../assets/feed/av-fallback-5.jpg";
import av6 from "../../assets/feed/av-fallback-6.jpg";
import av7 from "../../assets/feed/av-fallback-7.jpg";
import av8 from "../../assets/feed/av-fallback-8.jpg";
import av9 from "../../assets/feed/av-fallback-9.jpg";
import av10 from "../../assets/feed/av-fallback-10.jpg";

const STORIES = [
  { name: "Ped*****", type: "locked", avatar: av1 },
  { name: "Lor*****", type: "locked", avatar: av2 },
  { name: "Swi*****", type: "locked", avatar: av3 },
  { name: "Enz*****", type: "locked", avatar: av4 },
  { name: "Lau*****", type: "locked", avatar: av5 },
  { name: "Joã*****", type: "locked", avatar: av6 },
  { name: "The*****", type: "locked", avatar: av7 },
  { name: "Bea*****", type: "locked", avatar: av8 },
  { name: "Sop*****", type: "locked", avatar: av9 },
  { name: "Let*****", type: "locked", avatar: av10 },
];

export default function StoriesBar() {
  const [showPopup, setShowPopup] = useState(false);

  return (
    <>
      <section className={styles.storiesWrapper}>
        <div className={styles.storiesContainer}>

          {/* SEU STORY */}
          <div className={styles.storyItem}>
            <button className={styles.storyButton} onClick={() => setShowPopup(true)}>
              <div className={`${styles.storyRing} ${styles.self}`}>
                <div className={styles.storyAvatar}>
                  <img src={selfAvatar} alt="Seu story" />
                </div>
                <div className={styles.addStory}>
                  <span>+</span>
                </div>
              </div>
            </button>
            <span className={styles.storyUsername}>Seu story</span>
          </div>

          {/* STORIES FAKE (IG-LIKE) */}
          {STORIES.map((story, index) => (
            <div className={styles.storyItem} key={index}>
              <button className={styles.storyButton} onClick={() => setShowPopup(true)}>
                <div className={`${styles.storyRing} ${styles[story.type]}`}>
                  <div className={styles.storyAvatar}>
                    <img src={story.avatar} alt={story.name} />
                  </div>
                </div>
              </button>
              <span className={styles.storyUsername}>{story.name}</span>
            </div>
          ))}

        </div>
      </section>

      <BlockedScrollPopup
        show={showPopup}
        onClose={() => setShowPopup(false)}
        title="🔒 Story bloqueado"
        description="Seja um membro VIP do Stalkea.ai para visualizar stories"
      />
    </>
  );
}
