import React, { useState, useEffect } from "react";
import styled from "styled-components";
import StoreMainBoard from "components/StoreBoard/StoreMainBoard";
import StoreList from "components/StoreBoard/StoreList";
import Paging from "components/StoreBoard/Paging";
import Scroll from "components/StoreBoard/Scroll";
import StoreInfo from "components/StoreBoard2/StoreInfo";
import { Link } from "react-router-dom";


const Store = () => {
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
        <Link to='/'>
          <StyledBtn>Home</StyledBtn>
        </Link>
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
  position: absolute;
  top: 80px;
  left: 600px;
`;

const StyledButton = styled.button`
  border-radius: 14px;
  padding: 4px 12px;
  background-color: ${({ active }) => (active ? "#0072BC" : "silver")};
  color: #fff;
  font-weight: 700;
  transition: background-color 0.2s ease, box-shadow 0.2s ease-out;
  width: 160px;
  height: 40px;
  margin-left: ${({ marginLeft }) => marginLeft || "0"}; // 마진을 추가합니다.

  &:hover {
    background-color: #0072BC;
    box-shadow: 3px -3px 0px 0px rgba(255, 255, 255, 0.45) inset;
  }
`;

const StyledBtn = styled.div`
position: absolute;
font-size: 20px;
left : 620px;
top : 0px;
pointer: cursor;
border : 1px solid silver;
padding : 3px 10px;
border-radius : 7px;
`

export default Store;