import React from "react";
import FollowersCard from "../FollowersCard/FollowersCard";
import "./SocialMediaFollowers.css";

function SocialMediaFollowers() {
  return (
    <div className="socialMediaFollowers">
      <FollowersCard />
      <FollowersCard />
      <FollowersCard />
      <FollowersCard />
    </div>
  );
}

export default SocialMediaFollowers;
