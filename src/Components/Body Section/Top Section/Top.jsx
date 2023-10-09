import React from "react";
import "./TopStyles.css";
import { BiSearchAlt } from "react-icons/bi";
import { TbMessageCircle } from "react-icons/tb";
import { IoMdNotificationsOutline } from "react-icons/io";
import { BsArrowRightShort } from "react-icons/bs";
import Img1 from "../../../assets/plantImg1.webp";
import Img2 from "../../../assets/plantImg4.webp";
import Img3 from "../../../assets/plantImg2.webp";

const Top = () => {
  return (
    <div className="topSection">
      <div className="headerSection flex">
        <div className="title">
          <h1>Wecomoe to nursery</h1>
          <p>Find indoor plants here</p>
        </div>
        <div className="searchBar flex">
          <input type="text" placeholder="Search Dashboard" />
          <BiSearchAlt className="icon" />
        </div>
        <div className="adminDiv flex">
          <TbMessageCircle className="icon" />
          <IoMdNotificationsOutline className="icon" />
          <div className="adminImage">
            <img src={Img1} alt="AdminImag" />
          </div>
        </div>
      </div>
      <div className="cardSection flex">
        <div className="rightCard flex">
          <h1>Create and sell extraordinary products</h1>
          <p>
            The world's fast growing industry today are neutral made products
          </p>
          <div className="buttons flex">
            <button className="btn button">Explore more</button>
            <button className="btn transparent">Top Sellers</button>
          </div>
          <div className="imgDiv">
            <img src={Img2} alt="Image2" />
          </div>
        </div>
        <div className="leftCard flex">
          <div className="main flex">
            <div className="textDiv">
              <h1>My Start</h1>
              <div className="flex">
                <span>
                  Today
                  <br />
                  <small>4 Orders</small>
                </span>
                <span>
                  This Month
                  <br />
                  <small>180 Orders</small>
                </span>
              </div>
              <span className="flex link">
                Go to my orders
                <BsArrowRightShort className="icon" />
              </span>
            </div>

            <div className="ImgDiv">
              <img src={Img3} alt="plantImg" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Top;
