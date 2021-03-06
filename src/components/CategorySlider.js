import React from "react";
import styled from "styled-components";
import LeftArrow from "../img/left-arrow.svg";
import RightArrow from "../img/right-arrow.svg";

const CategorySlider = ({ category }) => {
  return (
    <StyledCategorySlider className="category-slider">
      <Arrow className="left-arrow">
        <img src={LeftArrow} alt="" />
      </Arrow>
      <StyledSliderTab className="slider-tab">
        <p>{category}</p>
      </StyledSliderTab>
      <Arrow className="right-arrow">
        <img src={RightArrow} alt="" />
      </Arrow>
    </StyledCategorySlider>
  );
};

const StyledCategorySlider = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 260px;
`;

const Arrow = styled.div`
  margin-top: 12px;
  cursor: pointer;
`;

const StyledSliderTab = styled.div`
  cursor: default;
  width: 180px;
  height: 60px;
  background: linear-gradient(180deg, #74ebd5 0%, #acb6e5 100%);
  border: 2px solid rgba(255, 255, 255, 0.9);
  box-shadow: 0px 4px 10px 5px rgba(0, 0, 0, 0.1);
  border-radius: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: "Noto Sans JP", sans-serif;
  font-weight: bold;
  font-size: 24px;
  color: #ffffff;
  p {
    margin-top: -5px;
  }
`;

export default CategorySlider;
