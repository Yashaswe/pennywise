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
import Home from "./Home";
import Chatbot from "./Chatbot";
import HomeBar from "./HomeBar";
const { Header, Content, Footer, Sider } = Layout;
const { Title, Text } = Typography;

// Define menu items for navigation
const items = [
  { label: "Home", key: "/" },
  {
    label: "AI Consultation",
    key: "chatbot",
  },
  {
    label: "Finance Education",
    key: "info",
  },
];

// const items = ["Home", "AI Consultation", "Finance Education", "Settings"].map(
//   (label, index) => ({
//     key: String(index + 1),
//     label,
//   })
// );

const App = () => {
  const location = useLocation();
  const { pathname } = location;
  const navigate = useNavigate();

  const [sidebarLocation, setSidebarLocation] = useState(pathname);
  useEffect(() => {
    setSidebarLocation(
      pathname.includes("game-analytics")
        ? "/dashboard/game-analytics"
        : pathname
    );
  }, [pathname]);
  function handleClick(e) {
    navigate(e.key);
  }
  const [collapsed, setCollapsed] = useState(false);
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();
  return (
    <Layout style={{ minHeight: "100vh" }}>
      {/* Header with logo and navigation */}
      <Header
        style={{
          position: "sticky",
          top: 0,
          zIndex: 1,
          width: "100%",
          display: "flex",
          alignItems: "center",
          background: "#DFD3C3",
          padding: "0 40px",
          height: 75,
          boxShadow: "0 2px 8px rgba(0, 0, 0, 0.1)",
        }}
      >
        <div style={{ marginRight: "16px" }}>
          <Image
            src="/src/logo2.png"
            alt="Logo"
            preview={false}
            style={{ width: "100px", height: "85px" }}
          />
        </div>

        <Menu
          style={{
            flex: 1,
            justifyContent: "center",
            borderBottom: "none",
            backgroundColor: "#DFD3C3",
          }}
          theme="light"
          mode="horizontal"
          selectedKeys={[sidebarLocation]}
          onClick={handleClick}
          items={items}
        ></Menu>
      </Header>

      <HomeBar />

      {/* Footer */}
      <Footer
        style={{
          textAlign: "center",
          padding: "24px",
          backgroundColor: "#f0f2f5",
        }}
      >
        Ant Design ©{new Date().getFullYear()} Created by Ant UED
      </Footer>
    </Layout>
  );
};

export default App;
