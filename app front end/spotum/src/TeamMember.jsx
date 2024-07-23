import React from "react";

const TeamMember = ({ imageSrc, name, email }) => {
  return (
    <div className="teamMember">
      <img
        loading="lazy"
        src={imageSrc}
        alt={`${name}'s profile`}
        className="memberImage"
      />
      <div className="memberInfo">
        <h3 className="memberName">{name}</h3>
        <p className="memberEmail">{email}</p>
      </div>
    </div>
  );
};

export default TeamMember;
