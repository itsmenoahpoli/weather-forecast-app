import React from "react";

type TUserProfileData = {
  user: any;
};

export const UserProfileData: React.FC<TUserProfileData> = (props) => {
  return (
    <div className="user-info">
      <h3 className="user-info-name">{props.user.name}</h3>
      <a
        href={`https://github.com/${props.user.nickname}`}
        className="user-info-github-url"
      >
        https://github.com/{props.user.nickname}
      </a>
    </div>
  );
};
