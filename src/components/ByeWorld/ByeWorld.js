import React, { useState } from "react";

export const ByeWorld = () => {
  const [title, setTitle] = useState("");
  const handleClick = () => {
    setTitle("Bye World");
  };
  return (
    <div>
      {title}
      <button onClick={handleClick}> Click </button>
    </div>
  );
};
