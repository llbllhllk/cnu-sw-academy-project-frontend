// import React, {useState} from "react";
import styled from "styled-components"
import StoreMainBoard from "components/StoreBoard/StoreMainBoard";
import StoreList from "components/StoreBoard/StoreList";
import Button from "components/common/Button";
// import Paging from "components/StoreBoard/Paging"; 
import Scroll from "components/StoreBoard/Scroll";
import Example from "components/common/StoreBoard2/Example";

const Store = ({ StoreTitle }) => {
  // const [restaurant, setRestaurant] = useState("55와인포차 본점") // 기본 값이 55와인포차 본점, 기본 값 없애려면 "" 넣자
  // const handleRestaurantClick = (restaurant) => {
    // console.log(restaurant) storelist 클릭했을때 뭐 나오는 확인용
    // setRestaurant(restaurant);
    // restaurant에 클릭한 storelist 값이 들어오므로, 끌어다가 쓰면 된다 히히
  // };

  return (
    <>
      <StyledList>
        <h2 style={{ textAlign: "center" }}>Store List</h2>
        <StoreList>
          <Scroll  /> 
          {/* onRestaurantClick={handleRestaurantClick} scroll에 다시 넣어야함 */}
        </StoreList>
      </StyledList>
    
    <StyledBoard>
      <StoreMainBoard> 
        <Example/> 
        {/* 위에 title={restraunt} 속성 넣어줘야함 */}
        {/* <Paging restaurant={restaurant}/> */}
        {/* 임시로 example로 바꿔놨지만 Paging으로 다시 바꿔야함 */}
        {/* 페이지 네이션 컴포넌트임 */}
      </StoreMainBoard>
    </StyledBoard>

    <StyledButton>
      <Button width="160px" height="40px">게시판</Button>
      <Button width="160px" height="40px">식당상세정보</Button>
    </StyledButton>
    
  </>
  )
};

const StyledList = styled.div`
  position: absolute; /* 절대 위치 지정 */
  top: 80px; /* 원하는 수직 위치로 조절 */
  left: 200px; /* 원하는 수평 위치로 조절 */
`

const StyledBoard = styled.div`
  position: absolute; /* 절대 위치 지정 */
  top: 130px; /* 원하는 수직 위치로 조절 */
  left: 600px; /* 원하는 수평 위치로 조절 */
`
const StyledButton = styled.div`
  position: absolute; /* 절대 위치 지정 */
  top: 80px; /* 원하는 수직 위치로 조절 */
  left: 600px; /* 원하는 수평 위치로 조절 */
`
// StyledList, StyledBoard는 각각 StoreList,StoreMainBoard 위치 조정용이다.

export default Store;