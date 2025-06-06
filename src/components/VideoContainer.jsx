import React, { useEffect, useState } from "react";
import { YOUTUBE_VIDEOS_API } from "../utils/constants";
import VideoCard from "./VideoCard";
import { Link } from "react-router-dom";
const VideoContainer = () => {
  const [videos, setVideos] = useState([]);
  useEffect(() => {
    getVideos();
  }, []);
  const getVideos = async () => {
    const data = await fetch(YOUTUBE_VIDEOS_API);
    const json = await data.json();
    console.log(json.items);
    setVideos(json.items);
  };
  return (
    <div className="flex flex-wrap">
      {videos?.length > 0 ? (
        videos.map((video) => (
          <Link key={video.id} to={"/watch?v=" + video.id}>
            <VideoCard info={video} />
          </Link>
        ))
      ) : (
        <p>Loading videos...</p> // Show a loading message instead of crashing
      )}
    </div>
  );
};

const AddVideoCard = (VideoCard) => {
  return (
    <div className="border p-1 m-1 border-red-900">
      <VideoCard />
    </div>
  );
};

export default VideoContainer;
