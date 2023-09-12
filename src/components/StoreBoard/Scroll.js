import React, { useEffect, useState } from "react";
import axios from "axios";
import StoreBoardItem from './StoreBoardItem'
import styled from "styled-components";

const Scroll = ({ onRestaurantClick }) => {
  const [data, setData] = useState([]); // 데이터를 저장할 상태
  const fetchAllData = async () => {
    try {
      const response = await axios.get(`http://43.201.204.106:8080/boards/restaurantList`);
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
          <StoreBoardItem key={index} height={'80px'}>
            {/* 클릭 시 onClickHandler 호출 및 restaurant 전달 */}
            <StyleP onClick={() => onClickHandler(restaurant)}>{restaurant}</StyleP>
          </StoreBoardItem>
        ))}
      </ul>
    </div>
  );
};

const StyleP = styled.p`
  width : 250px;
  height: 80px;
  text-align : center;
`
export default Scroll;