import React from "react";
import "./ActivityStyles.css";
import { BsArrowRightShort } from "react-icons/bs";
import Img1 from "../../../assets/se4.webp";
const Activity = () => {
  return (
    <div className="activitySection">
      <div className="heading flex">
        <h1>Resent Activity</h1>
        <button className="btn flex">
          See All
          <BsArrowRightShort className="icon" />
        </button>
      </div>
      <div className="secContainer grid">
        <div className="singleCustomer flex">
          <img src={Img1} alt="customerImg" />
          <div className="customerDetails">
            <span className="name">Ola Martha</span>
            <small>Ordered a new plant</small>
          </div>
          <div className="duration">2 Min ago</div>
        </div>

        <div className="singleCustomer flex">
          <img src={Img1} alt="customerImg" />
          <div className="customerDetails">
            <span className="name">Ola Martha</span>
            <small>Ordered a new plant</small>
          </div>
          <div className="duration">2 Min ago</div>
        </div>
        <div className="singleCustomer flex">
          <img src={Img1} alt="customerImg" />
          <div className="customerDetails">
            <span className="name">Ola Martha</span>
            <small>Ordered a new plant</small>
          </div>
          <div className="duration">2 Min ago</div>
        </div>
        <div className="singleCustomer flex">
          <img src={Img1} alt="customerImg" />
          <div className="customerDetails">
            <span className="name">Ola Martha</span>
            <small>Ordered a new plant</small>
          </div>
          <div className="duration">2 Min ago</div>
        </div>
      </div>
    </div>
  );
};

export default Activity;
