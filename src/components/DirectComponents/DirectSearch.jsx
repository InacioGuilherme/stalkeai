import "./DirectSearch.css";

export default function DirectSearch() {
  return (
    <div className="direct-search-wrapper">
      <div className="direct-search">
        <span className="direct-search-icon">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            width="16"
            height="16"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <circle cx="11" cy="11" r="8" />
            <line x1="21" y1="21" x2="16.65" y2="16.65" />
          </svg>
        </span>

        <input
          type="text"
          className="direct-search-input"
          placeholder="Interaja com a Meta AI ou pesquise"
        />
      </div>
    </div>
  );
}
