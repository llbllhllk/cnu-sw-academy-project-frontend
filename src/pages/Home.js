import Chat from 'components/chat';
import Container from 'components/common/Container';
import Header from 'components/header';
import styled from 'styled-components';

const Home = () => {
  return (
    <>
      <Container>
        <Header />
        <main>
          {/* Slider */}
          <FeedBox>
            {/* <Board /> */}
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
