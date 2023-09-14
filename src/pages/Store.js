import React, { useState, useEffect } from "react";
import styled from "styled-components";
import StoreMainBoard from "components/StoreBoard/StoreMainBoard";
import StoreList from "components/StoreBoard/StoreList";
import Button from "components/common/Button";
import Paging from "components/StoreBoard/Paging";
import Scroll from "components/StoreBoard/Scroll";
import StoreInfo from "components/common/StoreBoard2/StoreInfo";

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
        <StoreList>
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

      <StyledButton>
        {/* 버튼 클릭 시 viewStore 값을 변경합니다. */}
        <Button width="160px" height="40px" onClick={() => setViewStore(true)}>
          게시판
        </Button>
        <Button width="160px" height="40px" onClick={() => setViewStore(false)}>
          식당상세정보
        </Button>
      </StyledButton>
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

const StyledButton = styled.div`
  position: absolute;
  top: 80px;
  left: 600px;
`;

export default Store;