import {
  AppstoreOutlined,
  SnippetsOutlined,
  ContainerOutlined,
  UserOutlined,
  ControlOutlined,
  LogoutOutlined
} from "@ant-design/icons";
import { Menu } from "antd";
import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

function SideBar() {
  const location = useLocation();
  const [selectedKeys, setSelectedKeys] = useState("/");

  useEffect(() => {
    const pathName = location.pathname;
    setSelectedKeys(pathName);
  }, [location.pathname]);

  const navigate = useNavigate();
  return (
    <div className="SideMenu" style={{ width: 350 }}>
      <Menu
        className="SideMenuVertical"
        style={{ width: 250, fontSize: 20 }}
        mode="vertical"
        onClick={(item) => {
          navigate(item.key);
        }}
        selectedKeys={[selectedKeys]}
        items={[
          {
            label: "Dashbaord",
            key: "/dashboard",
            icon: <AppstoreOutlined />,
          },
          {
            label: "ControlRoom",
            key: "/control-room",
            icon: <ControlOutlined />,
          },
          {
            label: "Report",
            key: "/report",
            icon: <SnippetsOutlined />,
          },
          {
            label: "News",
            key: "/news",
            icon: <ContainerOutlined />,
          },
          {
            label: "About",
            key: "/about",
            icon: <UserOutlined />,
          },
          {
            label: "Logout",
            key: "/",
            icon: <LogoutOutlined />,
          }
        ]}
      ></Menu>
    </div>
  );
}
export default SideBar;
