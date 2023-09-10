// 무한 스크롤링 컴포넌트임 storeboarditem을 여기서 써서, 오류 생기면 이거 고쳐야함
import React, { useEffect, useState } from "react";
import axios from "axios";
import StoreBoardItem from './StoreBoardItem'

const Scroll = () => {
  const [data, setData] = useState([]); // 데이터를 저장할 상태


  const fetchAllData = async () => {
    try {
      // Axios를 사용하여 모든 JSON 데이터 가져오기
      const response = await axios.get(`https://jsonplaceholder.typicode.com/posts`);
      const allData = response.data;

      // 모든 데이터를 저장
      setData(allData);
    } catch (error) {
      console.error("데이터를 가져오는 중 오류 발생:", error);
    }
  };

  useEffect(() => {
    // 컴포넌트가 마운트될 때 모든 데이터를 가져옵니다.
    fetchAllData();
  }, []);

  return (
    <div style={{ height: "550px", overflowY: "auto" }}>
      <ul>
        {data.map((post) => (
          <StoreBoardItem key={post.id} height={'80px'}>{post.title}</StoreBoardItem>
        ))}
      </ul>
    </div>
  );
};

export default Scroll;