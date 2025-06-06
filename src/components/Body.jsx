import react from "react";
import SideBar from "./SideBar";
import { Outlet } from "react-router-dom";
import MainContainer from "./MainContainer";
const Body = () => {
  return (
    <div className="flex">
      <SideBar />
      <MainContainer />
    </div>
  );
};
export default Body;
