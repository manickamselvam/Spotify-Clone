import React from "react";
import "../styles/common.css";
import "./HomeAndSearchCard.css";
// import { Space } from "antd";
import { HomeOutlined, SearchOutlined } from "@ant-design/icons";

const HomeAndSearchCard = () => {
  return (
    <div className="background_color border_radius home_and_searchbar_container_in_sidebar">
      <div className="border_radius">
        <p className="padding font_size">
          <HomeOutlined /> <span className="font_size padding_left">Home</span>
        </p>
        <p className="padding font_size">
          <SearchOutlined /> <span className="font_size padding_left">Search</span>
        </p>
      </div>
    </div>
  );
};

export default HomeAndSearchCard;
