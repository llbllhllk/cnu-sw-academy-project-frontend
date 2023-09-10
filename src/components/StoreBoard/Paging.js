import axios from 'axios';
import { useEffect, useState } from 'react';
import Pagination from 'react-js-pagination';
import styled from 'styled-components';
import StoreBoardItem from './StoreBoardItem';

const Paging = () => {
  const [data, setData] = useState([]);
  const [page, setPage] = useState(1);
  const items = 4;
  // const [restaurant, setRestaurant] = useState('');
  // // 레스토랑 관련 state 여기에 할당 

  useEffect(() => {
    const getClick = async () => {
      try {
        const response = await axios.get('http://43.201.204.106:8080/boards/55와인포차 본점?');
        // const response = await axios.get(`http://43.201.204.106:8080/boards/${restaurant}?`);
        setData(response.data);
      } catch (error) {
        console.error('데이터를 가져오는 중 오류 발생:', error);
      }
    };
    getClick();
  }, []);

  const handlePageChange = (page) => {
    setPage(page);
  };

  if (!data.posts) {
    return null; 
  }

  return (
    <StyledDiv>
      <MainBoardTitle>가게이름</MainBoardTitle>
      {data.posts
        .slice(items * (page - 1), items * page)
        .map((post, i) => {
          return (
            <div key={i}>
              <StoreBoardItem height='90px'>
                <p>{post.content}</p>
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

const PaginationBox = styled.div`
  .pagination {
    display: flex;
    justify-content: center;
    margin-top: 15px;
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

export default Paging;