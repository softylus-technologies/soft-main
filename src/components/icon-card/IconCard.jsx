import React from "react";
import { FormattedMessage } from "react-intl";

function IconCard({ text, imageUrl, textId }) {
  return (
    <div className="flex items-center gap-2">
      <img src={imageUrl} alt="" className="w-fit h-fit" />
      <h6 className="m-0">
        {textId ? (
          <FormattedMessage id={textId} defaultMessage={text} />
        ) : (
          text
        )}
      </h6>
    </div>
  );
}

export default IconCard;