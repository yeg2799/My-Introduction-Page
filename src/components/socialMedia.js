import React from "react";

const socialMedia = ({ href, Icon }) => {
  return (
    <React.Fragment>
      <a href={href} target="_blank">
        <Icon  style={{ fontSize: "40px", color: "#13285E" }}/>
      </a>
    </React.Fragment>
  );
};

export default socialMedia;
