import React from "react";
const Button = ({ name }) => {
  return (
    <div>
      <button className="px-5 py-2 m-2 rounded-lg whitespace-nowrap bg-gray-100">
        {name}
      </button>
    </div>
  );
};
export default Button;
