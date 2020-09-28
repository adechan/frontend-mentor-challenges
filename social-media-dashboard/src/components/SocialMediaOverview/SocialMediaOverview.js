import React from "react";
import { useDataLayerValue } from "../../DataLayer";
import OverviewCard from "../OverviewCard/OverviewCard";
import "./SocialMediaOverview.css";

import FacebookIcon from "../../assets/icon-facebook.svg";
import TwitterIcon from "../../assets/icon-twitter.svg";
import InstagramIcon from "../../assets/icon-instagram.svg";
import YoutubeIcon from "../../assets/icon-youtube.svg";

function SocialMediaOverview() {
  const [{ isDarkMode }, dispatch] = useDataLayerValue();

  return (
    <div className="socialMediaOverview">
      <h3
        className={
          "socialMediaOverview__title " +
          (isDarkMode
            ? "socialMediaOverview__titleDark"
            : "socialMediaOverview__titleLight")
        }
      >
        Overview - Today
      </h3>

      <div className="socialMediaOverview__cards">
        <OverviewCard
          title="Page Views"
          icon={FacebookIcon}
          count={87}
          increasedPercent={3}
          decreasedPercent={0}
        />
        <OverviewCard
          title="Likes"
          icon={FacebookIcon}
          count={52}
          increasedPercent={0}
          decreasedPercent={2}
        />
        <OverviewCard
          title="Likes"
          icon={InstagramIcon}
          count={5462}
          increasedPercent={2257}
          decreasedPercent={0}
        />
        <OverviewCard
          title="Profile Views"
          icon={InstagramIcon}
          count={52000}
          increasedPercent={1375}
          decreasedPercent={0}
        />

        <OverviewCard
          title="Retweets"
          icon={TwitterIcon}
          count={117}
          increasedPercent={303}
          decreasedPercent={0}
        />
        <OverviewCard
          title="Likes"
          icon={TwitterIcon}
          count={507}
          increasedPercent={553}
          decreasedPercent={0}
        />
        <OverviewCard
          title="Likes"
          icon={YoutubeIcon}
          count={107}
          increasedPercent={0}
          decreasedPercent={19}
        />
        <OverviewCard
          title="Total Views"
          icon={YoutubeIcon}
          count={1407}
          increasedPercent={0}
          decreasedPercent={12}
        />
      </div>
    </div>
  );
}

export default SocialMediaOverview;
