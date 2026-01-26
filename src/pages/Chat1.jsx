import "./chat1.css";
import ChatHeader from "../components/ChatComponents/ChatHeader";
import ChatInput from "../components/ChatComponents/ChatInput";

export default function Chat1() {
  return (
    <div className="chat-page">
      <ChatHeader />
      <ChatInput />
    </div>
  );
}
