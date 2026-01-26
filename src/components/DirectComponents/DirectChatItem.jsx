export default function DirectChatItem({
  name,
  avatar,
  message,
  time,
  unread = false,
  locked = false,
}) {
  return (
    <div
      className={`chat-item ${unread ? "chat-unread" : ""} ${
        locked ? "chat-locked" : ""
      }`}
    >
      <div className="chat-avatar-container">
        <div className={`chat-avatar-wrapper ${locked ? "locked" : ""}`}>
          <img className="chat-photo blurred" src={avatar} alt="" />

          {locked && (
            <div className="chat-lock-overlay">
              <svg
                className="chat-lock-icon"
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
              >
                <path
                  d="M6 10V8a6 6 0 0112 0v2"
                  stroke="#fff"
                  strokeWidth="2"
                  strokeLinecap="round"
                />
                <rect
                  x="5"
                  y="10"
                  width="14"
                  height="10"
                  rx="2"
                  stroke="#fff"
                  strokeWidth="2"
                />
              </svg>
            </div>
          )}
        </div>
      </div>

      <div className="chat-content">
        <h3 className="chat-name">{name}</h3>
        <div className="chat-message-row">
          <span className="chat-message-text">{message}</span>
          <span className="chat-time"> · {time}</span>
        </div>
      </div>

      <div className="chat-actions">
        {unread && <span className="chat-unread-dot" />}

        <svg className="chat-camera-icon" width="19.2" height="19.2">
          <use href="#camera-icon" />
        </svg>
      </div>
    </div>
  );
}
