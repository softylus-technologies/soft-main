import React from "react";
import "./style/CardCustomer.css";
export const CardCustomer = ({ SubHeading, imageSrc, Title, SubProfile }) => {
  return (
    <div className="card-customer">
      <p className="text-base " >{SubHeading}</p>
      <div className="profile-card">
        <img
          src={imageSrc}
          alt="Description of the main image"
          className="img-profile"
        />
        <div>
          <h6 className="text-xs">{Title}</h6>
        </div>
      </div>
    </div>
  );
};
