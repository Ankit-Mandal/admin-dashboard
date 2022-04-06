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

const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="sidebarWrapper">
        <div className="sidebarMenu">
          <h3 className="sidebarTitle">Dashboard</h3>
          <ul className="sidebarList">
            <NavLink to="/" className="link" activeClassName="active">
              <li className="sidebarListItem">
                <LineStyle className="sidebarIcon" />
                Home
              </li>
            </NavLink>
            <li className="sidebarListItem">
              <Analytics className="sidebarIcon" />
              Analytics
            </li>
            <li className="sidebarListItem">
              <TrendingUp className="sidebarIcon" />
              Sales
            </li>
          </ul>
        </div>
        <div className="sidebarMenu">
          <h3 className="sidebarTitle">Quick Menu</h3>
          <ul className="sidebarList">
            <NavLink to="/users" className="link" activeClassName="active">
              <li className="sidebarListItem">
                <PersonOutline className="sidebarIcon" />
                Users
              </li>
            </NavLink>
            <NavLink to="/products" className="link" activeClassName="active">
              <li className="sidebarListItem">
                <Storefront className="sidebarIcon" />
                Products
              </li>
            </NavLink>

            <li className="sidebarListItem">
              <AttachMoneyOutlined className="sidebarIcon" />
              Transactions
            </li>
            <li className="sidebarListItem">
              <BarChartOutlined className="sidebarIcon" />
              Reports
            </li>
          </ul>
        </div>
        <div className="sidebarMenu">
          <h3 className="sidebarTitle">Notifications</h3>
          <ul className="sidebarList">
            <li className="sidebarListItem">
              <EmailOutlined className="sidebarIcon" />
              Mail
            </li>
            <li className="sidebarListItem">
              <DynamicFeedOutlined className="sidebarIcon" />
              Feedback
            </li>
            <li className="sidebarListItem">
              <ChatBubbleOutlineOutlined className="sidebarIcon" />
              Messages
            </li>
          </ul>
        </div>
        <div className="sidebarMenu">
          <h3 className="sidebarTitle">Staff</h3>
          <ul className="sidebarList">
            <li className="sidebarListItem">
              <WorkOutlineOutlined className="sidebarIcon" />
              Manage
            </li>
            <li className="sidebarListItem">
              <TimelineOutlined className="sidebarIcon" />
              Analytics
            </li>
            <li className="sidebarListItem">
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
