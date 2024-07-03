import React from "react";

const SvgIcon = ({ svgContent }) => {
  return (
    <div className="service-icon-container" dangerouslySetInnerHTML={{ __html: svgContent }} />
  );
};

export default SvgIcon;
