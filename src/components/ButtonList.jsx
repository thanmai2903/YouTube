import React from "react";
import Button from "./Button";
const items = [
  "All",
  "Gaming",
  "Songs",
  "Cooking",
  "Live",
  "Soccer",
  "Cartoons",
  "Cricket",
  "Valentines",
  "Horror Movies",
  "Serials",
  "Home Decor",
];
const ButtonList = () => {
  return (
    <div className=" overflow-x-auto w-full">
      <div className="flex whitespace-nowrap">
        {items.map((item, i) => (
          <Button key={item} name={item} />
        ))}
      </div>
    </div>
  );
};
export default ButtonList;
