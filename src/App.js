import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Feed from "./pages/Feed";
import Direct from "./pages/Direct";
import Chat1 from "./pages/Chat1";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/feed" element={<Feed />} />
        <Route path="/direct" element={<Direct />} />
        <Route path="/chat1" element={<Chat1 />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
