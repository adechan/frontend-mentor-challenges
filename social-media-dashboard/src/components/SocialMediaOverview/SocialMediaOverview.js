import React from "react";
import OverviewCard from "../OverviewCard/OverviewCard";
import "./SocialMediaOverview.css";

function SocialMediaOverview() {
  return (
    <div className="socialMediaOverview">
      <h3 className="socialMediaOverview__title">Overview - Today</h3>

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
