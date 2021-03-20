import React from "react";

const socialMedia = ({ href, Icon }) => {
  return (
    <React.Fragment>
      <a href={href} target="_blank" rel="noreferrer">
        <Icon class="socialMedia-icon"/>
      </a>
    </React.Fragment>
  );
};

export default socialMedia;
