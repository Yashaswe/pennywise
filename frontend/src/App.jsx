import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { Layout, Menu, theme, Image, Typography } from "antd";

import HomeBar from "./HomeBar";
const { Header, Content, Footer, Sider } = Layout;

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
  {
    label: "Settings",
    key: "settings",
  },
];

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

  return (
    <Layout style={{ minHeight: "100vh" }}>
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

    <Link to="/" style={{ marginRight: "16px" }}>
      <Image
      src="/src/logo2.png"
      alt="Logo"
      preview={false}
      style={{ width: "100px", height: "85px" }}
      />
    </Link>

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

      <Footer
       style={{
      textAlign: "center",
      padding: "24px",
      backgroundColor: "#f0f2f5",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
  }}
>
      <div>
      Ant Design ©{new Date().getFullYear()} 
      <p>Created by A, B, C, D, E</p>
      </div>
      <div style={{ marginTop: "8px", fontSize: "14px", color: "#888" }}>
    </div>
    </Footer>
    </Layout>
  );
};

export default App;
