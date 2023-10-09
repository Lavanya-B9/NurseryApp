import React from "react";
import "./ListingStyles.css";
import { BsArrowRightShort } from "react-icons/bs";
import { AiFillHeart } from "react-icons/ai";
import Img4 from "../../../assets/plantImg3.webp";
import Img5 from "../../../assets/plantImg4.webp";
import Img6 from "../../../assets/plantImg5.avif";
import Img7 from "../../../assets/potPlants.avif";
import Img8 from "../../../assets/se4.webp";
import Img9 from "../../../assets/se5.webp";

const Listing = () => {
  return (
    <div className="listingSection">
      <div className="heading flex">
        <h1>My Listing</h1>
        <button className="flex btn">
          See All <BsArrowRightShort className="icon" />
        </button>
      </div>

      <div className="secContainer flex">
        <div className="singleItem">
          <AiFillHeart className="icon" />
          <img src={Img4} alt="PlantImg" />
          <h3>Annual Vince</h3>
        </div>
        <div className="singleItem">
          <AiFillHeart className="icon" />
          <img src={Img5} alt="PlantImg" />
          <h3>Coffee Plant</h3>
        </div>{" "}
        <div className="singleItem">
          <AiFillHeart className="icon" />
          <img src={Img6} alt="PlantImg" />
          <h3>Button Ferm</h3>
        </div>
        <div className="singleItem">
          <AiFillHeart className="icon" />
          <img src={Img7} alt="PlantImg" />
          <h3>Spider Plant</h3>
        </div>
      </div>
      <div className="sellers flex">
        <div className="topSellers">
          <div className="heading flex">
            <h3>Top Sellers</h3>
            <button className="flex btn">
              See All <BsArrowRightShort className="icon" />
            </button>
          </div>
          <div className="card flex">
            <div className="users">
              <img src={Img8} alt="userImage" />
              <img src={Img8} alt="userImage" />
              <img src={Img8} alt="userImage" />
              <img src={Img8} alt="userImage" />
            </div>
            <div className="cardText">
              <span>
                14,556 plants sold
                <small>
                  25 sellers <span className="date">7 Days</span>
                </small>
              </span>
            </div>
          </div>
        </div>

        <div className="topSellers">
          <div className="heading flex">
            <h3>Featured Sellers</h3>
            <button className="flex btn">
              See All <BsArrowRightShort className="icon" />
            </button>
          </div>
          <div className="card flex">
            <div className="users">
              <img src={Img9} alt="userImage" />
              <img src={Img9} alt="userImage" />
              <img src={Img9} alt="userImage" />
              <img src={Img9} alt="userImage" />
            </div>
            <div className="cardText">
              <span>
                30,556 plants sold
                <small>
                  50 sellers <span className="date">30 Days</span>
                </small>
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Listing;
