import React, { useEffect, useState } from "react";
import axios from "axios";
import StoreBoardItem from './StoreBoardItem'
import styled from "styled-components";

const Scroll = ({ onRestaurantClick }) => {
  const [data, setData] = useState([]); // 데이터를 저장할 상태
  const fetchAllData = async () => {
    try {
      const response = await axios.get(`http://43.201.204.106:8080/boards/restaurantList`);
      console.log(response)
      const allData = response.data.restaurantList;
      setData(allData);
    } catch (error) {
      console.error("데이터를 가져오는 중 오류 발생:", error);
    }
  };

  useEffect(() => {
    fetchAllData();
  }, []);

  const onClickHandler = (restaurant) => {
    onRestaurantClick(restaurant); // 클릭 시 전달하는 함수 호출
  };

  return (
    <div style={{ height: "550px", overflowY: "auto" }}>
      <ul>
        {data.map((restaurant, index) => (
          <StyleDiv  key={index} onClick={() => onClickHandler(restaurant)} >
          <StoreBoardItem height={'80px'}>
            {/* 클릭 시 onClickHandler 호출 및 restaurant 전달 */}
            <p>{restaurant}</p>
          </StoreBoardItem>
          </StyleDiv>
        ))}
      </ul>
    </div>
  );
};

const StyleDiv = styled.div`
  &:hover {
    background-color: #ff9704;
    border-radius : 7px;
    transition: background-color 0.2s ease, box-shadow 0.2s ease-out;
  }
`
export default Scroll;