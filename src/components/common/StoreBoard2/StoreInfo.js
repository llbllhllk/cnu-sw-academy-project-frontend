import React, { useState, useEffect } from "react";
import StoreBoardItem from "components/StoreBoard/StoreBoardItem";
import styled from "styled-components";
import axios from "axios";
import Button from "../Button";
import ReviewWrite from 'components/common/StoreBoard2/ReviewWrite';

import { Call } from "@mui/icons-material";
import LocationOnIcon from '@mui/icons-material/LocationOn';
import StarIcon from '@mui/icons-material/Star';

const StoreInfo = ({ title }) => {
  const [data, setData] = useState([]); // 데이터를 저장할 상태
  const fetchAllData = async () => {
    try {
      const response = await axios.get(`http://43.201.204.106:8080/boards/${title}?`);
      const allData = response.data.posts;
      setData(allData);
    } catch (error) {
      console.error("데이터를 가져오는 중 오류 발생:", error);
    }
  };
  
  const [infoData, setInfoData] = useState([]);
  const fetchInfoData = async () => {
    try {
      const response = await axios.get(`http://43.201.204.106:8080/boards/restaurantInfo/${title}`)
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

       <Styledh2>
        Review
        <ButtonWrapper> 
          {/* 버튼 클릭 시 handleWriteClick 호출 */}
          <Button width='60px' height='25px' onClick={handleWriteClick}>글쓰기</Button>
        </ButtonWrapper>

        {isWriting ? (
          // isWriting이 true일 때 ReviewWrite 컴포넌트 렌더링
          <ReviewWrite height='200px' handleCloseClick={handleCloseClick}/> 
        ) : (
          // isWriting이 false일 때 기존 컴포넌트 렌더링
          <div style={{ height: "230px", overflowY: "auto" }}>
            {data.map((restaurant, index) => (
              <StoreBoardItem key={index} height={'80px'}>
                <a href={`http://43.201.204.106:8080/boards/${restaurant.posts}?`}>{restaurant.content}</a>
              </StoreBoardItem>
            ))}
          </div>  
        )}
      </Styledh2>
    </>
  )
}

const Styledh1 = styled.h1`
  position: relative;
  top: -20px;
`

const Styledh2 = styled.h2`
  position: relative;
  top: -10px;
`

const ButtonWrapper = styled.div`
  /* 오른쪽으로 이동하는 스타일 추가 */
  position: absolute;
  top: 0;
  right: 0;
`

export default StoreInfo;
