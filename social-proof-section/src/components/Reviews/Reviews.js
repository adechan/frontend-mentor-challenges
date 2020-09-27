import React from "react";
import ReviewCard from "../ReviewCard/ReviewCard";
import ImageColton from "../../assets/image-colton.jpg";
import ImageAnne from "../../assets/image-anne.jpg";
import ImageIrene from "../../assets/image-irene.jpg";
import "./Reviews.css";

function Reviews() {
  return (
    <div className="reviews">
      <ReviewCard
        name="Colton Smith"
        avatar={ImageColton}
        buyerType="Verified"
        description="We needed the same printed design as the one we had ordered a week
        prior. Not only did they find the original order, but we also received
        it in time. Excellent!"
      />
      <ReviewCard
        name="Irene Roberts"
        avatar={ImageIrene}
        buyerType="Verified"
        description="Customer service is always excellent and
        very quick turn around. Completely delighted with the 
        simplicity of the purchase and the speed of delivery."
      />

      <ReviewCard
        name="Anne Wallace"
        avatar={ImageAnne}
        buyerType="Verified"
        description="Put an order with this company and can
        only praise them for the very high standard. Will 
        definitely use them again and recommend them to 
        everyone!"
      />
    </div>
  );
}

export default Reviews;
