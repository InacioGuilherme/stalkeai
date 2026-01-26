import "./DirectItem.css";
import DirectChatItem from "./DirectChatItem";

import av1 from "../../assets/direct/av-fallback-3.jpg";
import av2 from "../../assets/direct/av-fallback-8.jpg";
import av3 from "../../assets/direct/av-fallback-10.jpg";
import av4 from "../../assets/direct/av-fallback-11.jpg";
import av5 from "../../assets/direct/av-fallback-2.jpg";
import av6 from "../../assets/direct/av-fallback-6.jpg";

export default function DirectItem() {
  return (
    <>
      {/* SVG — NÃO MEXER */}
      <svg style={{ display: "none" }}>
        <symbol id="camera-icon" viewBox="0 0 66 64" fill="none">
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M24.743 0.806959C22.974 1.01696 20.854 2.54296 18.826 5.06696C16.383 8.10696 14.966 9.00096 12.583 9.00396C10.887 9.00596 8.01 9.91596 6.19 11.026C0.838 14.289 0 17.748 0 36.582C0 51.783 0.187 53.561 2.159 57.069C5.68 63.333 8.651 64 33.052 64C55.815 64 58.402 63.529 63 58.551C65.45 55.898 65.506 55.477 65.811 37.491C66.071 22.148 65.858 18.626 64.513 16.024C62.544 12.217 57.524 9.00896 53.527 9.00396C51.336 9.00096 49.627 7.96696 47.027 5.07196C43.551 1.19996 43.384 1.13796 35.5 0.811961C31.1 0.629961 26.259 0.627959 24.743 0.806959ZM43.216 9.57496C44.622 12.66 48.789 15 52.878 15C54.903 15 56.518 15 56.518 15C59.35 15 57.5 12.313 57.5 33.052C57.5 62.313 59.35 57.5 33.052 57.5C3.655 57.5 6 59.35 6 36.204C6 20.562 6.122 19.499 8.174 17.314C9.469 15.936 11.511 15 13.224 15C17.15 15 21.289 12.696 22.954 9.58496C24.282 7.10396 24.693 6.99996 33.19 6.99996C41.731 6.99996 42.084 7.09096 43.216 9.57496ZM27 19.722C15.76 23.945 13.183 40.493 22.611 47.908C30.698 54.27 42.974 51.753 47.612 42.783C51.201 35.844 48.564 25.701 42.015 21.25C38.771 19.046 30.925 18.247 27 19.722ZM40.077 27.923C46.612 34.459 42.201 45.273 33 45.273C23.799 45.273 19.388 34.459 25.923 27.923C30.039 23.807 35.961 23.807 40.077 27.923Z"
            fill="#F9F9F9"
          />
        </symbol>
      </svg>

      <DirectChatItem
        name="Jo*******"
        avatar={av1}
        message="G adivinha o que vc esqueceu aqui…"
        time="Agora"
        unread
      />

      <DirectChatItem
        name="Edu*****"
        avatar={av2}
        message="Encaminhou um reel de jonas…"
        time="33 min"
      />

      <DirectChatItem
        name="Fel*****"
        avatar={av3}
        message="Blz depois a gente se fala"
        time="2 h"
      />

      <DirectChatItem
        name="And*****"
        avatar={av4}
        message="Reagiu com 👍 à sua mensagem"
        time="6 h"
      />

      {[
        ["Hei*****", av5, "Enviou um reel", "2 d"],
        ["Mat*****", av6, "Curtiu sua foto", "3 d"],
        ["Dan*****", av1, "Respondeu seu story", "3 d"],
        ["Car*****", av2, "Reagiu 😅 ao story", "4 d"],
        ["Leo*****", av3, "Enviou uma mensagem", "4 d"],
        ["Raf*****", av4, "Compartilhou um post", "5 d"],
        ["Gui*****", av5, "Respondeu com 👍", "5 d"],
        ["Bru*****", av6, "Mandou um áudio", "6 d"],
        ["Jon*****", av1, "Respondeu seu story", "6 d"],
        ["Vit*****", av2, "Curtiu sua mensagem", "1 sem"],
        ["Ali*****", av3, "Enviou um reel", "1 sem"],
        ["Mar*****", av4, "Reagiu ❤️ à mensagem", "2 sem"],
      ].map(([name, avatar, message, time], i) => (
        <DirectChatItem
          key={i}
          name={name}
          avatar={avatar}
          message={message}
          time={time}
          locked
        />
      ))}
    </>
  );
}
