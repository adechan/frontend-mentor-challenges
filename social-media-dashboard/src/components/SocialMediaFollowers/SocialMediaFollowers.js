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
        borderColour="hsl(208, 92%, 53%)"
        account="nathanf"
        followers={1987}
        increasedToday={12}
        decreasedToday={0}
      />
      <FollowersCard
        icon={TwitterIcon}
        borderColour="hsl(203, 89%, 53%)"
        account="nathanf"
        followers={1044}
        increasedToday={99}
        decreasedToday={0}
      />
      <FollowersCard
        icon={InstagramIcon}
        borderColour="linear-gradient(to right, hsl(37, 97%, 70%), hsl(329, 70%, 58%))"
        account="realnathanf"
        followers={11000}
        increasedToday={1099}
        decreasedToday={0}
      />
      <FollowersCard
        icon={YoutubeIcon}
        borderColour="hsl(348, 97%, 39%)"
        account="Nathan F."
        followers={8239}
        increasedToday={0}
        decreasedToday={144}
      />
    </div>
  );
}

export default SocialMediaFollowers;
