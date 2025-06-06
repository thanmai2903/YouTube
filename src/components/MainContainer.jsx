import React from "react";
import ButtonList from "./ButtonList";
import VideoContainer from "./VideoContainer";
import SideBar from "./SideBar";
const MainContainer = () => {
  return (
    <div className="col-span-11 flex-1">
      <ButtonList />
      <VideoContainer />
    </div>
  );
};
export default MainContainer;
