import "./DirectStories.css";

import perfilEspionado from "../../assets/direct/perfil-sem-foto.jpeg";
import avatar1 from "../../assets/direct/av-fallback-1.jpg";
import avatar2 from "../../assets/direct/av-fallback-2.jpg";
import avatar3 from "../../assets/direct/av-fallback-3.jpg";
import avatar4 from "../../assets/direct/av-fallback-4.jpg";
import avatar5 from "../../assets/direct/av-fallback-5.jpg";
import avatar6 from "../../assets/direct/av-fallback-6.jpg";
import avatar7 from "../../assets/direct/av-fallback-7.jpg";
import avatar8 from "../../assets/direct/av-fallback-8.jpg";
import avatar9 from "../../assets/direct/av-fallback-9.jpg";
import swing from "../../assets/direct/StorySwing.png";
import playboy from "../../assets/direct/playboy.jpg";

/* ===============================
   NOTA DE MÚSICA
   =============================== */

const MusicNote = ({ music }) => {
  const isShortTitle = music.title === "APT.";

  return (
    <div className="music-note-content">
      <div className="music-header">
        <div className="music-icon">
          <svg viewBox="0 0 24 30" width="8" height="10">
            <rect height="19" rx="2" width="4" y="5" />
            <rect height="21" rx="2" width="4" x="10" y="4" />
            <rect height="19" rx="2" width="4" x="20" y="5" />
          </svg>
        </div>

        {isShortTitle ? (
          <span className="music-title">APT.</span>
        ) : (
          <div className="music-title-container">
            <span className="music-title scrolling">
              {music.title}
              <span className="music-gap">{music.title}</span>
            </span>
          </div>
        )}
      </div>

      <span className="music-artist">{music.artist}</span>
    </div>
  );
};

/* ===============================
   STORIES DATA
   =============================== */

const STORIES = [
  {
    name: "Sua nota",
    note: "Conte as novidades",
    avatar: perfilEspionado,
    isOwnStory: true
  },
  {
    name: "Ped*******",
    note: "Preguiça Hoje 🥱🥱",
    avatar: avatar1,
    blurred: true
  },
  {
    name: "Lor*******",
    isMusicNote: true,
    music: {
      title: "Coração Partido (Ao Vivo)",
      artist: "Grupo Menos É Mais"
    },
    avatar: avatar2,
    blurred: true
  },
  {
    name: "Swi*******",
    note: "O vontde fudê a 3 😈",
    avatar: swing,
    blurred: true
  },
  {
    name: "Enz*******",
    note: "25/01❤️",
    avatar: avatar3,
    blurred: true
  },
  {
    name: "Marc*******",
    note: "📍💦",
    avatar: playboy,
    blurred: true
  }
];

export default function DirectStories() {
  return (
    <div className="direct-stories">
      <div className="stories-wrapper">
        <div className="stories-scroll">
          {STORIES.map((story, index) => (
            <div className="story-card" key={index}>
              {/* NOTA (overlay absoluto, SEM quebrar layout) */}
              <div className={`story-note ${story.isMusicNote ? "music" : ""}`}>
                {story.isMusicNote ? (
                  <MusicNote music={story.music} />
                ) : (
                  <span className="story-note-text">
                    {story.isOwnStory ? "Conte as novidades" : story.note}
                  </span>
                )}
              </div>

              {/* AVATAR */}
              <div className={`story-avatar ${story.blurred ? "blurred" : ""}`}>
                <img src={story.avatar} alt={story.name} />
              </div>

              {/* USERNAME */}
              <span className={`story-username ${story.isOwnStory ? "own" : ""}`}>
                {story.name}
              </span>
            </div>
          ))}
        </div>

        <div className="stories-gradient" />
      </div>
    </div>
  );
}
