import styled from "styled-components"
import StoreMainBoard from "components/StoreBoard/StoreMainBoard"; // 6-1, 6-2 큰 게시판
import StoreList from "components/StoreBoard/StoreList"; //  6-1, 6-2 스토어 리스트
import Button from "components/common/Button"; // 버튼 임포트
import Paging from "components/StoreBoard/Paging"; // 페이지 네이션
import Scroll from "components/StoreBoard/Scroll"; // 무한 스크롤링
// import Example from "components/common/StoreBoard2/Example";


const Store = ({StoreTitle}) => {
  
  return (
  <>
    <StyledList>
      <h2 style={{ textAlign: "center" }}>Store List</h2>
      <StoreList>
        <Scroll/> 
        {/* 무한스크롤 컴포넌트임. 안에 StoreBoardItem을 직접 사용함 */}
      </StoreList>
    </StyledList>
    
    <StyledBoard>
      <StoreMainBoard> 
        {/* <Example/> */}
        <Paging/>
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
