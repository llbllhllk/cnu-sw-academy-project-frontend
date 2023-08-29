import Board from 'components/board';
import Carousel from 'components/carousel';
import Chat from 'components/chat';
import Container from 'components/common/Container';
import Header from 'components/header';
import styled from 'styled-components';

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
  return (
    <>
      <Container>
        <Header />
        <main>
          <Carousel data={restaurantData} />
          <FeedBox>
            <Board title='자유게시판' />
            <Board title='HOT 게시판' />
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
