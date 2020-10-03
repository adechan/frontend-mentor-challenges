import React from "react";
import DescriptionCard from "../DescriptionCard/DescriptionCard";
import "./Description.css";

import SnappyProcessLogo from "../../assets/icon-snappy-process.svg";
import AffortablePricesLogo from "../../assets/icon-affordable-prices.svg";
import PeopleFirstLogo from "../../assets/icon-people-first.svg";

function Description({ mobile }) {
  return (
    <div className="description">
      <div className="description__header">
        <p className="description__line"></p>

        <h3>We’re different</h3>
      </div>

      <div className="description__cards">
        <DescriptionCard
          icon={SnappyProcessLogo}
          title="Snappy Process"
          description="Our application process can be completed in
        minutes, not hours. Don't get stuck filling in 
        tedious forms."
        />

        <DescriptionCard
          icon={AffortablePricesLogo}
          title="Affortable Prices"
          description="We don't want you worrying about
          high monthly costs. Our prices may be low, but we still 
          offer the best coverage possible."
        />

        <DescriptionCard
          icon={PeopleFirstLogo}
          title="People First"
          description="Our plans aren't full of conditions and clauses 
          to prevent payouts. We make sure you're covered when you need it."
        />
      </div>
    </div>
  );
}

export default Description;
