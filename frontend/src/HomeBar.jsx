import { Routes, Route } from "react-router-dom";

import Chatbot from "./Chatbot";
import Home from "./Home";
import Info from "./Info";

const HomeBar = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/chatbot" element={<Chatbot />} />
        <Route path="/info" element={<Info />} />
      </Routes>
    </div>
  );
};

export default HomeBar;
