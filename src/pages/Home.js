import { fetchGetFreeBoard, fetchGetPopularBoard } from 'api/main';
import Board from 'components/board';
import Carousel from 'components/carousel';
import Chat from 'components/chat';
import Container from 'components/common/Container';
import Header from 'components/header';
import { useEffect, useState } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
// import axios from 'axios';


const restaurantData = [
  // 각 슬라이드에 표시할 음식점 데이터를 배열로 정의하세요
  [
    { name: '예시예시', rank: 1, category: 'new 음식점' },
    { name: '1음식점2', rank: 2, category: 'new 음식점' },
    { name: '1음식점3', rank: 3, category: 'new 음식점' },
  ],
   // 다른 슬라이드에 대한 데이터도 추가하세요
  // ...
  [
    { name: '2음식점1', rank: 1, category: '주간 맛집' },
    { name: '2음식점2', rank: 2, category: '주간 맛집' },
    { name: '2음식점3', rank: 3, category: '주간 맛집' },
  ],
  [
    { name: '3음식점1', rank: 1, category: 'Best 맛 평가' },
    { name: '3음식점2', rank: 2, category: 'Best 맛 평가' },
    { name: '3음식점3', rank: 3, category: 'Best 맛 평가' },
  ],
  [
    { name: '4음식점1', rank: 1, category: 'Event중 인 음식점' },
    { name: '4음식점2', rank: 2, category: 'Event중 인 음식점' },
    { name: '4음식점3', rank: 3, category: 'Event중 인 음식점' },
  ],
];

const Home = () => {
  const [board, setBoard] = useState({
    freeBoard: [],
    popularBoard: [],
  });
  
  // const [restaurantData1, setRestaurantData] = useState([])

  useEffect(() => {
    const fetchData = async () => {
      const [freeBoard, popularBoard] = await Promise.all([
        fetchGetFreeBoard(),
        fetchGetPopularBoard(),
      ]);
      setBoard({
        freeBoard,
        popularBoard,
      });
    };
    fetchData();
  }, []);

  // useEffect(()=>{
  //   const fecthRecentData = async () => {
  //     try{
  //     const response = await axios.get('http://223.130.131.136:8080/main/slide/recent')
  //     const a = [response.data];
  //     const parsedData = a[0].map(item => ({
  //       ...item,
  //       rank: parseInt(item.rank, 10)
  //     }));
  //     setRestaurantData([parsedData])
  //     }catch(err){
  //       console.log(err)
  //     }
  //   }
  //   fecthRecentData();
  // },[])
  // console.log(restaurantData1)
  // console.log(restaurantData)

  const boardField = [
    {
      title: '통합 게시판',
      board: board.freeBoard,
      link: '/popular',
    },
    {
      title: 'Hot 게시판',
      board: board.popularBoard,
      link: '/hot',
    },
  ];

  return (
    <>
      <Container>
        <Header />
        <main>
          <Link to='./store'><Carousel data={restaurantData} /></Link>
          <FeedBox>
            {boardField.map((board, idx) => (
              <Board key={idx} title={board.title} board={board.board} buttonLinks={board.link} hideWriteButton={idx === 1} />
            ))}
            <Chat />
          </FeedBox>
        </main>
      </Container>
    </>
  );
};

const FeedBox = styled.section`
  display: flex;
  flex-wrap: wrap;
  gap: 50px;
  justify-content: space-between;
`;

export default Home;