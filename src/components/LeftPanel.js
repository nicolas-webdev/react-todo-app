import React, { useState } from "react";
import styled from "styled-components";
import PanelTab from "./PanelTab";

const LeftPanel = () => {
  const categories = ["今", "近", "後", "旧"];
  const [activeCategory, setActiveCategory] = useState(categories[0]);
  const clickHandler = () => {
    console.log("hi");
  };
  return (
    <PanelContainer>
      {categories.map((category) => (
        <PanelTab
          key={category}
          category={category}
          setActiveCategory={setActiveCategory}
          title={category}
          status={`${activeCategory === category ? "active" : "inactive"}`}
        />
      ))}
    </PanelContainer>
  );
};

const PanelContainer = styled.div`
  width: 30vw;
  height: 90vh;
  max-width: 400px;
  margin: 30px;
  padding: 30px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: linear-gradient(180deg, #74ebd5 0%, #acb6e5 100%);
  border: 3px solid rgba(255, 255, 255, 0.9);
  box-sizing: border-box;
  box-shadow: 0px 4px 10px 5px rgba(0, 0, 0, 0.1);
  border-radius: 10px;
`;

export default LeftPanel;
