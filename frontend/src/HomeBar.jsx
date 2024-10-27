import { useEffect, useState } from "react";
import {
  Outlet,
  Link,
  useLocation,
  useNavigate,
  Routes,
  Route,
} from "react-router-dom";
import {
  Breadcrumb,
  Layout,
  Menu,
  theme,
  Image,
  Card,
  Typography,
  Form,
  Input,
  Button,
} from "antd";

const { Header, Content, Footer, Sider } = Layout;
const { Title, Text } = Typography;
import Chatbot from "./Chatbot";
import Home from "./Home";
import Info from "./Info";

// const items = ["Home", "AI Consultation", "Finance Education", "Settings"].map(
//   (label, index) => ({
//     key: String(index + 1),
//     label,
//   })
// );

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
