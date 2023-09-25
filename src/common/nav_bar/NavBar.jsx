import React from "react";
import "../../styles/common.css";
import "./NavBar.css";
import { LeftOutlined, RightOutlined } from "@ant-design/icons";
import SignupButton from "../Button/SignupButton";
import Button from "../Button/button";

const NavBar = () => {
  return (
    <div className="background_color nav_bar_height flex justify_content_space_between align_item_center nav_bar">
      <div className="flex">
        <div>
          <LeftOutlined />
        </div>
        <div>
          <RightOutlined />
        </div>
      </div>
      <div className="flex">
        <div><SignupButton></SignupButton></div>
        <div><Button></Button></div>
      </div>
    </div>
  );
};

export default NavBar;
