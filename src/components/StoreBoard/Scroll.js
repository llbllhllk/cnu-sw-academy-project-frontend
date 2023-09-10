import React, { useEffect, useState } from "react";
import axios from "axios";
import StoreBoardItem from './StoreBoardItem'

const Scroll = () => {
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

  return (
    <div style={{ height: "550px", overflowY: "auto" }}>
      <ul>
        {data.map((restaurant, index) => (
          <StoreBoardItem key={index} height={'80px'}>
            {restaurant}
          </StoreBoardItem>
        ))}
      </ul>
    </div>
  );
};

export default Scroll;
