import React from "react";
import "../styles/common.css";
import "./LibrraryAndFooterSection.css";
import { PlusOutlined, MenuFoldOutlined } from "@ant-design/icons";
import Cards from "./Cards";

const LibrrayAndFooterSection = () => {
  return (
    <div className="background_color border_radius footer_and_librrary_parent">
      
      <div>
        <div className="padding flex justify_content_space_between">
          <section className="font_size">
            <MenuFoldOutlined /> <span className="font_size padding_left">Your Library</span>
          </section>
          <section className="font_size">
            <PlusOutlined />
          </section>
        </div>
        <div className="library_container_in_sidebar">
          <Cards></Cards>
          <Cards></Cards>
          <Cards></Cards>
          <Cards></Cards>
          <Cards></Cards>
          <Cards></Cards>
          <Cards></Cards>
          <Cards></Cards>
          <Cards></Cards>
          <Cards></Cards>
          <Cards></Cards>
        </div>
        <div className="footer_container_in_sidebar">
          <p>Footer</p>
        </div>
      </div>
    </div>
  );
};

export default LibrrayAndFooterSection;
