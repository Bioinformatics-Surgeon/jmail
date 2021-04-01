import { NavBar } from "antd-mobile";
import React from "react";
import { Link, withRouter } from "react-router-dom";
import { Icon } from "../buttons";

const rightIcons = ["search", "reload", "settings"];

const TopNav = ({ unReads }) => {
  // const [isOnEmailPage, setIsOnAccountPage] = useState(
  //   props.location.pathname.includes("/account")
  // );

  // const nav1 = <Btn text="Account" icon={<Icon icon="mail" />} />;
  // const nav2 = <Btn text="Folder" icon={<Icon icon="folder" />} />;
  // const leftComps = isOnEmailPage ? nav2 : nav1;

  // useEffect(() => {
  //   setIsOnAccountPage(props.location.pathname.includes("/account"));
  // });
  return (
    <NavBar
      style={{ backgroundColor: "#000" }}
      leftContent={
        <Link to={`/home`}>
          <Icon badgeCount={unReads} text="JQ Mail" />
        </Link>
      }
      rightContent={rightIcons.map((icon, i) => {
        return <Icon key={i} icon={icon} />;
      })}
    />
  );
};

export default withRouter(TopNav);
