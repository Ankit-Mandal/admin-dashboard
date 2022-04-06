import "./sidebar.scss";
import {
  LineStyle,
  Analytics,
  TrendingUp,
  PersonOutline,
  Storefront,
  AttachMoneyOutlined,
  BarChartOutlined,
  EmailOutlined,
  DynamicFeedOutlined,
  ChatBubbleOutlineOutlined,
  WorkOutlineOutlined,
  TimelineOutlined,
  Report,
} from "@mui/icons-material";
import { NavLink } from "react-router-dom";
import { useState } from "react";
import { useEffect } from "react";

const Sidebar = () => {
  const [activeLink, setActiveLink] = useState();

  useEffect(() => {
    if (activeLink) {
      activeLink.classList.toggle("active");
    }
  }, [activeLink]);

  const clickHandler = (event) => {
    // console.log(event.target);
    if (activeLink) {
      activeLink.classList.toggle("active");
    }

    setActiveLink(event.target);
  };

  return (
    <div className="sidebar">
      <div className="sidebarWrapper">
        <div className="sidebarMenu">
          <h3 className="sidebarTitle">Dashboard</h3>
          <ul className="sidebarList">
            <NavLink to="/" className="link" activeClassName="active">
              <li className="sidebarListItem" onClick={clickHandler}>
                <LineStyle className="sidebarIcon" />
                Home
              </li>
            </NavLink>
            <li className="sidebarListItem" onClick={clickHandler}>
              <Analytics className="sidebarIcon" />
              Analytics
            </li>
            <li className="sidebarListItem" onClick={clickHandler}>
              <TrendingUp className="sidebarIcon" />
              Sales
            </li>
          </ul>
        </div>
        <div className="sidebarMenu">
          <h3 className="sidebarTitle">Quick Menu</h3>
          <ul className="sidebarList">
            <NavLink to="/users" className="link" activeClassName="active">
              <li className="sidebarListItem" onClick={clickHandler}>
                <PersonOutline className="sidebarIcon" />
                Users
              </li>
            </NavLink>
            <NavLink to="/products" className="link" activeClassName="active">
              <li className="sidebarListItem" onClick={clickHandler}>
                <Storefront className="sidebarIcon" />
                Products
              </li>
            </NavLink>

            <li className="sidebarListItem" onClick={clickHandler}>
              <AttachMoneyOutlined className="sidebarIcon" />
              Transactions
            </li>
            <li className="sidebarListItem" onClick={clickHandler}>
              <BarChartOutlined className="sidebarIcon" />
              Reports
            </li>
          </ul>
        </div>
        <div className="sidebarMenu">
          <h3 className="sidebarTitle">Notifications</h3>
          <ul className="sidebarList">
            <li className="sidebarListItem" onClick={clickHandler}>
              <EmailOutlined className="sidebarIcon" />
              Mail
            </li>
            <li className="sidebarListItem" onClick={clickHandler}>
              <DynamicFeedOutlined className="sidebarIcon" />
              Feedback
            </li>
            <li className="sidebarListItem" onClick={clickHandler}>
              <ChatBubbleOutlineOutlined className="sidebarIcon" />
              Messages
            </li>
          </ul>
        </div>
        <div className="sidebarMenu">
          <h3 className="sidebarTitle">Staff</h3>
          <ul className="sidebarList">
            <li className="sidebarListItem" onClick={clickHandler}>
              <WorkOutlineOutlined className="sidebarIcon" />
              Manage
            </li>
            <li className="sidebarListItem" onClick={clickHandler}>
              <TimelineOutlined className="sidebarIcon" />
              Analytics
            </li>
            <li className="sidebarListItem" onClick={clickHandler}>
              <Report className="sidebarIcon" />
              Reports
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
