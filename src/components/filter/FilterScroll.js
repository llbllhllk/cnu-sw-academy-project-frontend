import React, { useEffect, useState } from "react";
import axios from "axios";
import StoreBoardItem from "components/StoreBoard/StoreBoardItem";
import styled from "styled-components";

const FilterScroll = ({ food,department,place,jehyu }) => {
  const [data, setData] = useState([]); // 데이터를 저장할 상태
  const fetchAllData = async () => {
    try {
      const response = await axios.get(`http://43.201.204.106:8080/restaurantConditionalSearch?category=${food}&college=${department}&region=${place}`);
      console.log(response)
      const allData = response.data;
      setData(allData);
    } catch (error) {
      console.error("데이터를 가져오는 중 오류 발생:", error);
    }
  };

  useEffect(() => {
    fetchAllData();
  }, [food],[department],[place],[jehyu]);

  return (
    <div style={{ height: "550px", overflowY: "auto" }}>
      <ul>
        <p>{food}{department}{place}{jehyu}</p>
        {data.map((restaurant, index) => (
          <StoreBoardItem key={index} height={'80px'}>
            <StyleP>{restaurant}</StyleP>
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
export default FilterScroll;