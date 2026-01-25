import FeedHeader from "../components/FeedComponents/FeedHeader";
import StoriesBar from "../components/FeedComponents/StoriesBar";
import FeedPost from "../components/FeedComponents/FeedPost";
import BottomNav from "../components/FeedComponents/BottomNav";
import "./Feed.css";

export default function Feed() {
  return (
    <div className="feed-page">
      <FeedHeader />

      <main className="feed-content">
        <StoriesBar />
        <FeedPost />
        <FeedPost />
        <FeedPost />
      </main>

      <BottomNav />
    </div>
  );
}
