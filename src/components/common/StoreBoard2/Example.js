import React, {useState,useEffect} from "react";
import StoreBoardItem from "components/StoreBoard/StoreBoardItem"
import styled from "styled-components"
import axios from "axios";
import Button from "../Button";

const Example = ({title}) => {
  
  const [data, setData] = useState([]); // 데이터를 저장할 상태
  const fetchAllData = async () => {
    try {
      const response = await axios.get(`http://43.201.204.106:8080/boards/55와인포차 본점?`);
      const allData = response.data.posts;
      setData(allData);
    } catch (error) {
      console.error("데이터를 가져오는 중 오류 발생:", error);
    }
  };

  useEffect(() => {
    fetchAllData();
  }, []);

  return (
  <>
    <Styledh1>{title}예시</Styledh1>
    <StoreBoardItem width = '400px' height='200px'>

    </StoreBoardItem>
    <Styledh2>
      Review
      <Button width='60px' height='30px'>글쓰기</Button>
    </Styledh2>
  {/* 주석 */}

  <div style={{ height: "230px", overflowY: "auto" }}>
      <ul>
        {data.map((restaurant, index) => (
          <StoreBoardItem key={index} height={'80px'}>
            {/* 클릭 시 onClickHandler 호출 및 restaurant 전달 */}
            <p>{restaurant.content}</p>
          </StoreBoardItem>
        ))}
      </ul>
    </div>
  </>
  )
}

const Styledh1 = styled.h1`
  position : relative;
  top: -20px
`

const Styledh2 = styled.h2`
  position : relative;
  top: -10px
`

export default Example;