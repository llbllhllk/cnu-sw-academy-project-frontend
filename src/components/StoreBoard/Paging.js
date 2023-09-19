import axios from 'axios';
import { useEffect, useState } from 'react';
import Pagination from 'react-js-pagination';
import styled from 'styled-components';
import StoreBoardItem from './StoreBoardItem';
import Button from 'components/common/Button';

const Paging = ({ restaurant }) => { // restaurant 값을 props로 받음
  const [data, setData] = useState([]);
  const [page, setPage] = useState(1);
  const items = 4;

  useEffect(() => {
    const getClick = async () => {
      try {
        const response = await axios.get(`http://43.201.204.106:8080/boards/${restaurant}?`);
        setData(response.data);
      } catch (error) {
        console.error('데이터를 가져오는 중 오류 발생:', error);
      }
    };
    getClick();
  }, [restaurant]); // restaurant 값이 변경될 때만 데이터를 다시 가져옴

  const handlePageChange = (page) => {
    setPage(page);
  };

  if (!data.posts) {
    return null; 
  }

  return (
    <StyledDiv>
      <MainBoardTitle>{restaurant}</MainBoardTitle>
      <ButtonWrapper>
        <Button width='70px' height='30px' onClick={() => { window.location.href = 'http://43.201.204.106:8080/boards/post'}}>글쓰기</Button>
      </ButtonWrapper>
      {data.posts
        .slice(items * (page - 1), items * page)
        .map((post, i) => {
          return (
            <div key={i} onClick={() => window.location.href=`http://43.201.204.106:8080/boards/post/${post.postId}/detail`}>
              <StoreBoardItem height='90px'>
                {console.log(post)}
                <TestDiv>
                <p>{post.title}</p>
                <p>{`좋아요 : ${post.postLikeCount}`}  </p>
                <p>{`${post.createdAt[0]}-${post.createdAt[1]}-${post.createdAt[2]} ${post.createdAt[3]}시 ${post.createdAt[4]}분 ` }</p>
                </TestDiv>
              </StoreBoardItem>
            </div>
          );
        })}
      <PaginationBox>
        <Pagination
          activePage={page}
          itemsCountPerPage={items}
          totalItemsCount={data.posts.length}
          pageRangeDisplayed={5}
          onChange={handlePageChange}
        />
      </PaginationBox>
    </StyledDiv>
  );
};

const ButtonWrapper = styled.div`
  position: absolute;
  top: -5px; /* 조정할 위치(y축)에 맞게 설정하세요 */
  right: 0; /* 조정할 위치(x축)에 맞게 설정하세요 */
`;

const PaginationBox = styled.div`
  .pagination {
  list-style: none;
  padding: 0;
  display: flex;
  justify-content: center;
  position: absolute;
  top: 525px/* <StoreBoardItem>이 4개일 때의 y축 위치 */; /* 조정할 위치(y축)에 맞게 설정하세요 */
  left: 50%;
  transform: translateX(-50%);
}
  ul {
    list-style: none;
    padding: 0;
  }
  ul.pagination li {
    display: inline-block;
    width: 30px;
    height: 30px;
    border: 1px solid #e2e2e2;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 1rem;
  }
  ul.pagination li:first-child {
    border-radius: 5px 0 0 5px;
  }
  ul.pagination li:last-child {
    border-radius: 0 5px 5px 0;
  }
  ul.pagination li a {
    text-decoration: none;
    color: #ff9704;
    font-size: 1rem;
  }
  ul.pagination li.active a {
    color: white;
  }
  ul.pagination li.active {
    background-color: #ff9704;
  }
  ul.pagination li a:hover,
  ul.pagination li a.active {
    color: ff9704;
  }
`;

const StyledDiv = styled.div`
  position: relative;
  top: -30px;
`;
const MainBoardTitle = styled.h3`
  position: relative;
  top: -5px;
`;

const TestDiv = styled.div`
  textalign : center;
`
export default Paging;