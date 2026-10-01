import React from "react";

const CampusesLocationFrame = ({ url }) => {
  return (
    <>
      <div className="w-full h-fit">
        <iframe className="w-full h-130" src={url}></iframe>
      </div>
    </>
  );
};

export default CampusesLocationFrame;
