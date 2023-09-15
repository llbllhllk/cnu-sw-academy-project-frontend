import React, { useState, useEffect } from "react";
import StoreBoardItem from "components/StoreBoard/StoreBoardItem";
import styled from "styled-components";
import axios from "axios";
import Button from "components/common/Button";
import ReviewWrite from "./ReviewWrite";

import { Call } from "@mui/icons-material";
import LocationOnIcon from '@mui/icons-material/LocationOn';
import StarIcon from '@mui/icons-material/Star';

const StoreInfo = ({ title }) => {
  const [data, setData] = useState([]); // 데이터를 저장할 상태
  const fetchAllData = async () => {
    try {
      const response = await axios.get(`http://localhost:8080/boards/${title}?`);
      const allData = response.data.posts;
      setData(allData);
    } catch (error) {
      console.error("데이터를 가져오는 중 오류 발생:", error);
    }
  };
  
  const [infoData, setInfoData] = useState([]);
  const fetchInfoData = async () => {
    try {
      const response = await axios.get(`http://localhost:8080/boards/restaurantInfo/${title}`)
      const allData = response.data;
      setInfoData(allData);
    } catch (error) {
      console.error("데이터를 가져오는 중 오류 발생:", error);
    }
  }

  useEffect(() => {
    fetchAllData();
    fetchInfoData();
  }, [title]);

  // 추가된 부분: isWriting 상태와 그 핸들러
  const [isWriting, setIsWriting] = useState(false);

  const handleWriteClick = () => setIsWriting(true);
  const handleCloseClick = () => setIsWriting(false);
  
  return (
    <>
    <Styledh1>{title}</Styledh1>
    <StoreBoardItem width='400px' height='200px'>
      <StarIcon />
      <LocationOnIcon />
      {/* 별점 */}
      <p>{infoData.address}</p>
      <Call />
      {/* 주소 */}
      <p>{infoData.phone}</p>
      {/* 전화번호 */}
      </StoreBoardItem>

      <StyledDiv>
        <h2>Review</h2>
        <ButtonWrapper> 
          {/* 버튼 클릭 시 handleWriteClick 호출 */}
          <Button width='60px' height='25px' onClick={handleWriteClick}>글쓰기</Button>
        </ButtonWrapper>

        {isWriting ? (
          // isWriting이 true일 때 ReviewWrite 컴포넌트 렌더링
          <ReviewWrite height='200px' handleCloseClick={handleCloseClick} restaurantName={title}/> 
        ) : (
          // isWriting이 false일 때 기존 컴포넌트 렌더링
          <div style={{ height: "230px", overflowY: "auto" }}>
            {data.map((restaurant, index) => (
              <div key={index} onClick={() => window.open(`http://localhost:8080/boards/${restaurant.posts}?`)}>
                <StoreBoardItem height={'80px'}>
                <p><StyledP>{restaurant.content}</StyledP></p>
                {/* href={`http://43.201.204.106:8080/boards/${restaurant.posts}?`} */}
                </StoreBoardItem>
              </div>
              // storeBoardItem에 onclik이 적용 안돼서, div태그에 key값을 주고 onclick을 넣음
            ))}
          </div>  
        )}
      </StyledDiv>
    </>
  )
}

const Styledh1 = styled.h1`
  position: relative;
  top: -20px;
`

const StyledDiv = styled.div`
  position: relative;
  top: -10px;
`

const ButtonWrapper = styled.div`
  /* 오른쪽으로 이동하는 스타일 추가 */
  position: absolute;
  top: 0;
  right: 0;
`
const StyledP = styled.a`
  background-color : blue;
  font-size : 30px;
  text-align : center;
`
export default StoreInfo;
