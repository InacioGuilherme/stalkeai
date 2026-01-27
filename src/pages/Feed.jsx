import FeedHeader from "../components/FeedComponents/FeedHeader";
import StoriesBar from "../components/FeedComponents/StoriesBar";
import FeedPost from "../components/FeedComponents/FeedPost";
import BottomNav from "../components/FeedComponents/BottomNav";
import TrialBanner from "../components/TrialComponents/TrialBanner";
import "./Feed.css";

import avChat2 from "../assets/feed/chat2.png";
import avChat1 from "../assets/feed/chat1.png";
import avChat3 from "../assets/feed/chat3.png";
import av1 from "../assets/feed/av-fallback-1.jpg";
import av2 from "../assets/feed/av-fallback-2.jpg";
import av3 from "../assets/feed/av-fallback-3.jpg";
import av4 from "../assets/feed/av-fallback-4.jpg";
import av5 from "../assets/feed/av-fallback-5.jpg";
import av6 from "../assets/feed/av-fallback-6.jpg";
import av7 from "../assets/feed/av-fallback-7.jpg";
import av8 from "../assets/feed/av-fallback-8.jpg";
import av9 from "../assets/feed/av-fallback-9.jpg";
import av10 from "../assets/feed/av-fallback-10.jpg";
import av11 from "../assets/feed/av-fallback-11.jpg";
import av12 from "../assets/feed/av-fallback-12.jpg";

const POSTS = [
  { username: "And*****", avatar: avChat2, likes: 204, comments: 73, time: "Agora" },
  { username: "Jo*****", avatar: avChat1, likes: 89, comments: 32, time: "23 min" },
  { username: "\u{1D56D}\u{1D597}\u{1D59A}****", avatar: avChat3, likes: 312, comments: 41, time: "1 h" },
  { username: "Mel*****", avatar: av7, likes: 156, comments: 28, time: "3 h" },
  { username: "Ped*****", avatar: av3, likes: 67, comments: 15, time: "5 h" },
  { username: "The*****", avatar: av9, likes: 421, comments: 89, time: "8 h" },
  { username: "Lau*****", avatar: av4, likes: 178, comments: 54, time: "9 h" },
  { username: "Enz*****", avatar: av1, likes: 95, comments: 19, time: "11 h" },
  { username: "Bea*****", avatar: av8, likes: 543, comments: 112, time: "14 h" },
  { username: "Sop*****", avatar: av2, likes: 267, comments: 63, time: "16 h" },
  { username: "Let*****", avatar: av5, likes: 134, comments: 37, time: "19 h" },
  { username: "Mar*****", avatar: av6, likes: 389, comments: 78, time: "21 h" },
  { username: "Gab*****", avatar: av10, likes: 72, comments: 11, time: "23 h" },
  { username: "Isa*****", avatar: av11, likes: 451, comments: 96, time: "1 d" },
  { username: "Raf*****", avatar: av12, likes: 213, comments: 45, time: "1 d" },
];

export default function Feed() {
  return (
    <div className="feed-page">
      <FeedHeader />

      <main className="feed-content">
        <StoriesBar />
        {POSTS.map((post, index) => (
          <FeedPost
            key={index}
            username={post.username}
            avatar={post.avatar}
            likes={post.likes}
            comments={post.comments}
            time={post.time}
            blurLevel={index}
          />
        ))}
      </main>

      <TrialBanner />
      <BottomNav />
    </div>
  );
}