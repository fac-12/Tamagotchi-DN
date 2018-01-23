import React from "react";

export const UserInfo = ({ login, avatar_url }) => (
  <div>
    <figure>
      <img src={avatar_url} />
    </figure>
    <h2>Username: {login}</h2>
  </div>
);
