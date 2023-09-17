import React, { useState, useEffect } from "react";
import styled from "styled-components";
import StoreMainBoard from "components/StoreBoard/StoreMainBoard";
import StoreList from "components/StoreBoard/StoreList";
import Paging from "components/StoreBoard/Paging";
import Scroll from "components/StoreBoard/Scroll";
import StoreInfo from "components/StoreBoard2/StoreInfo";

const Store = ({ StoreTitle }) => {
  const [restaurant, setRestaurant] = useState("55와인포차 본점");
  const handleRestaurantClick = (restaurant) => {
    console.log(restaurant);
    setRestaurant(restaurant);
  };

  const [viewStore, setViewStore] = useState(true);
  
  useEffect(() => {
  }, [viewStore]);

  return (
    <>
      <StyledList>
        <h2 style={{ textAlign: "center" }}>Store List</h2>
        <StoreList width="300px" height="630px">
          <Scroll onRestaurantClick={handleRestaurantClick} />
        </StoreList>
      </StyledList>

      <StyledBoard>
        <StoreMainBoard>
          {viewStore ? (
              <Paging restaurant={restaurant}/>
          ) : (
              <StoreInfo title={restaurant}/>
          )}
        </StoreMainBoard>
      </StyledBoard>

      <StyledButtonContainer>
        {/* 버튼 클릭 시 viewStore 값을 변경합니다. */}
        <StyledButton
          onClick={() => setViewStore(true)}
          active={viewStore}
        >
          게시판
        </StyledButton>
        <StyledButton
          onClick={() => setViewStore(false)}
          active={!viewStore}
          marginLeft="5px" // 여기에 마진을 추가합니다.
        >
          식당상세정보
        </StyledButton>
      </StyledButtonContainer>
    </>
  );
};

const StyledList = styled.div`
  position: absolute;
  top: 80px;
  left: 200px;
`;

const StyledBoard = styled.div`
  position: absolute;
  top: 130px;
  left: 600px;
`;

const StyledButtonContainer = styled.div`
  position: relative;
  top: 80px;
  left: 600px;
`;

const StyledButton = styled.button`
  border-radius: 14px;
  padding: 4px 12px;
  background-color: ${({ active }) => (active ? "#ff9704" : "silver")};
  color: #fff;
  font-weight: 700;
  transition: background-color 0.2s ease, box-shadow 0.2s ease-out;
  width: 160px;
  height: 40px;
  margin-left: ${({ marginLeft }) => marginLeft || "0"}; // 마진을 추가합니다.

  &:hover {
    background-color: #ff9704;
    box-shadow: 3px -3px 0px 0px rgba(255, 255, 255, 0.45) inset;
  }
`;

export default Store;
