import { fetchGetFreeBoard, fetchGetPopularBoard } from 'api/main';
import { fetchGetToken } from 'api/token';
import Board from 'components/board';
import Carousel from 'components/carousel';
import Chat from 'components/chat';
import Container from 'components/common/Container';
import Header from 'components/header';
import { useEffect, useState } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const restaurantData = [
  // 각 슬라이드에 표시할 음식점 데이터를 배열로 정의하세요
  [
    { name: '1음식점1', rank: 1, category: 'new 음식점' },
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

  useEffect(() => {
    const fetchData = async () => {
      await fetchGetToken();
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

  useEffect(() => {}, []);
  const boardField = [
    {
      title: '통합 게시판',
      board: board.freeBoard,
      link : 'http://43.201.204.106:8080/freeBoard'
    },
    {
      title: 'Hot게시판',
      board: board.popularBoard,
      link : 'http://43.201.204.106:8080/popularBoard'
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
              <Board key={idx} title={board.title} board={board.board} buttonLinks={board.link}/>
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
