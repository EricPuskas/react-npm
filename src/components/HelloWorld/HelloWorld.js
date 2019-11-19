import React, { useEffect } from "react";

export const HelloWorld = () => {
  useEffect(() => {
    console.log("component did mount");
  }, []);
  return <div>Hello World!</div>;
};
