import React from "react";
import FollowersCard from "../FollowersCard/FollowersCard";
import "./SocialMediaFollowers.css";

import FacebookIcon from "../../assets/icon-facebook.svg";
import TwitterIcon from "../../assets/icon-twitter.svg";
import InstagramIcon from "../../assets/icon-instagram.svg";
import YoutubeIcon from "../../assets/icon-youtube.svg";

function SocialMediaFollowers() {
  return (
    <div className="socialMediaFollowers">
      <FollowersCard
        icon={FacebookIcon}
        account="nathanf"
        followers={1987}
        increasedToday={12}
        decreasedToday={0}
      />
      <FollowersCard
        icon={TwitterIcon}
        account="nathanf"
        followers={1044}
        increasedToday={99}
        decreasedToday={0}
      />
      <FollowersCard
        icon={InstagramIcon}
        account="realnathanf"
        followers={11000}
        increasedToday={1099}
        decreasedToday={0}
      />
      <FollowersCard
        icon={YoutubeIcon}
        account="Nathan F."
        followers={8239}
        increasedToday={0}
        decreasedToday={144}
      />
    </div>
  );
}

export default SocialMediaFollowers;
