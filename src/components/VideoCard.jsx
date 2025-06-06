import React from "react";

const VideoCard = ({ info }) => {
  const { snippet, statistics } = info;
  const { channelTitle, title, thumbnails } = snippet;

  return (
    <div className="w-72 h-[300px] m-3 p-2 shadow-lg rounded-lg flex flex-col justify-between">
      <img
        className="w-full h-40 object-cover rounded-lg"
        alt="thumbnail"
        src={thumbnails?.medium?.url}
      />
      <ul className="mt-2 text-sm">
        <li className="font-bold">{title}</li>
        <li className="text-gray-600">{channelTitle}</li>
        <li className="text-gray-500">{statistics?.viewCount} views</li>
      </ul>
    </div>
  );
};

export default VideoCard;
