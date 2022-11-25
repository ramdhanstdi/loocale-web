import React from "react";
import Cookies from "js-cookie";

const index = () => {
  console.log(Cookies.get("token"));
  return <div>index</div>;
};

export default index;
