import styled from "styled-components"
import { useState,useEffect } from "react";
import StoreMainBoard from "components/StoreBoard/StoreMainBoard"; // 6-1, 6-2 큰 게시판
import StoreBoardItem from "components/StoreBoard/StoreBoardItem"; // storelist 및 게시판에 들어가는 흰 박스
import StoreList from "components/StoreBoard/StoreList"; //  6-1, 6-2 스토어 리스트
import Button from "components/common/Button"; // 버튼 임포트
import { fetchGetStoreList } from "api/main";
import Paging from "components/StoreBoard/Paging";

const Store = ({StoreTitle}) => {
  const [storeData, setStoreData] = useState([]); // API 데이터를 저장할 상태
  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await fetchGetStoreList();
        setStoreData(data);
      } catch (error) {
        console.error('API 호출 중 에러 발생:', error);
      }
    };
    fetchData(); 
  }, []);  // storelist 부분 끌어오는 useEffect임 

  return (
  <>
    <StyledList>
      <h2 style={{ textAlign: "center" }}>Store List</h2>
      <StoreList>
        {storeData.map((store)=>{
          return <StoreBoardItem height ='80px' key={store.id}>
            {store.title}
          </StoreBoardItem>
        })} 
      {/* storeData는 storelist 끌어오는 api 저장하는 객체임. 이걸 스토어보드아이템의 자식요소로 넣음 */}
      {/* 지금은 더미데이터 끌어와서 쓰는데, 데이터 경로 바꾸고, 이제 여기서 무한 스크롤링 구현해야함 */}

      </StoreList>
    </StyledList>
    
    <StyledBoard>
      <StoreMainBoard> 
        <MainBoardTitle>{StoreTitle}</MainBoardTitle>
        <Paging/>
      </StoreMainBoard>
    </StyledBoard>

    <StyledButton>
      <Button width="160px" height="40px">게시판</Button>
      <Button width="160px" height="40px">식당상세정보</Button>
    </StyledButton>
    
  </>
  )
};

const MainBoardTitle = styled.h1`
  position: relative;
  top : -20px;
`
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