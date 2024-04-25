import React from "react";
import "./style/CardCustomer.css";
export const CardCustomer = ({ SubHeading, imageSrc, Title, SubProfile }) => {
  return (
    <div className="card-customer">
      <p className="text-sm">{SubHeading}</p>
      <div className="profile-card">
        <img
          src={imageSrc}
          alt="Description of the main image"
          className="img-profile"
        />
        <div>
          <h6 className="text-xs">{Title}</h6>
          <p className="text-xs">{SubProfile}</p>
        </div>
      </div>
    </div>
  );
};
