import React from "react";
import { useDataLayerValue } from "../../DataLayer";
import OverviewCard from "../OverviewCard/OverviewCard";
import "./SocialMediaOverview.css";

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
        <OverviewCard />
        <OverviewCard />
        <OverviewCard />
        <OverviewCard />

        <OverviewCard />
        <OverviewCard />
        <OverviewCard />
        <OverviewCard />
      </div>
    </div>
  );
}

export default SocialMediaOverview;
