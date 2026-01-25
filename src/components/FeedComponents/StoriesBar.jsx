import "./StoriesBar.css";
import avatar from "../../assets/perfil-sem-foto.jpeg";

const STORIES = [
  { name: "Dav*****", type: "locked" },
  { name: "Fel*****", type: "locked" },
  { name: "Lar*****", type: "locked" },
  { name: "Cam*****", type: "locked" },
  { name: "Isa*****", type: "locked" },
  { name: "Gab*****", type: "locked" },
  { name: "Dan*****", type: "locked" },
  { name: "Mat*****", type: "locked" },
  { name: "Vit*****", type: "locked" },
  { name: "Car*****", type: "locked" },
];

export default function StoriesBar() {
  return (
    <section className="stories-wrapper">
      <div className="stories-container">

        {/* SEU STORY */}
        <div className="story-item">
          <button className="story-button">
            <div className="story-ring self">
              <div className="story-avatar">
                <img src={avatar} alt="Seu story" />
              </div>
              <div className="add-story">
                <span>+</span>
              </div>
            </div>
          </button>
          <span className="story-username">Seu story</span>
        </div>

        {/* STORIES FAKE (IG-LIKE) */}
        {STORIES.map((story, index) => (
          <div className="story-item" key={index}>
            <button className="story-button">
              <div className={`story-ring ${story.type}`}>
                <div className="story-avatar">
                  <img src={avatar} alt={story.name} />
                </div>
              </div>
            </button>
            <span className="story-username">{story.name}</span>
          </div>
        ))}

      </div>
    </section>
  );
}
