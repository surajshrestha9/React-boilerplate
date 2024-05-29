import { FaTimes } from "react-icons/fa";
import Wrapper from "../assets/wrappers/SmallSidebar";
import { useDashboardContext } from "../pages/DashboardLayout";
import links from "../utils/links";
import Logo from "./Logo";
import { NavLink } from "react-router-dom";

const SmallSidebar = () => {
  const data = useDashboardContext();
  console.log(data);
  return (
    <Wrapper>
      <div className="sidebar-container show-sidebar">
        <div className="content">
          <button type="button" className="close-btn">
            <FaTimes />
          </button>
          <header>
            <Logo />
          </header>
          {/* callback funcn in a map pass grammer*/}
          <div className="nav-links">
            {links.map((link) => {
              // our object has 3 properties
              const { text, path, icon } = link;
              return (
                <NavLink to={path} key={text} className="nav-link">
                  <span className="icon"> {icon} </span>
                  {text}
                </NavLink>
              );
            })}
          </div>
        </div>
      </div>
    </Wrapper>
  );
};
export default SmallSidebar;
