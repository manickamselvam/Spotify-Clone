import React from "react";
import "./App.css";
import './styles/common.css'
import HomeAndSearchCard from "./sidebar_components/HomeAndSearchCard";
import LibrrayAndFooterSection from "./sidebar_components/LibrrayAndFooterSection";
import NavBar from "./common/nav_bar/NavBar";
const App = () => (
  <>
    <div className="parent_height flex margin">
      <div className="side_bar_Container">
        <HomeAndSearchCard></HomeAndSearchCard>
        <LibrrayAndFooterSection></LibrrayAndFooterSection>
      </div>
      <div className="Dashboard_container margin_left border_radius">
        <NavBar></NavBar>
      </div>
    </div>
  </>
);
export default App;
