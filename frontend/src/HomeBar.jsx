import { Routes, Route } from "react-router-dom";

import Chatbot from "./Chatbot";
import Home from "./Home";
import Info from "./Info";
import Settings from "./Settings";

const HomeBar = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/chatbot" element={<Chatbot />} />
        <Route path="/info" element={<Info />} />
        <Route path="/settings" element={<Settings />} />
      </Routes>
    </div>
  );
};

export default HomeBar;
