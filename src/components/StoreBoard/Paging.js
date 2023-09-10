// 페이지 네이션 컴포넌트임 storeboarditem을 여기서 써서, 오류 생기면 이거 고쳐야함
import axios from 'axios'
import {useEffect, useState} from 'react'
import Pagination from 'react-js-pagination'
import styled from 'styled-components'
import StoreBoardItem from './StoreBoardItem'

const Paging = ({title}) => {
  const [data, setData] = useState([]);
  const [page, setPage] = useState(1);
  const items = 4;

  useEffect(()=>{
    const getClick = async () => {
    const response = await axios.get
    ('https://jsonplaceholder.typicode.com/posts');
    setData(response.data)
    };
    getClick();
  },[])
  
  const handlePageChange = (page) => { setPage(page); };
  
console.log(items*(page-1), items*(page-1)+items)

  return (
    <StyledDiv>
      <MainBoardTitle>식당이름 들어가야함</MainBoardTitle>
      
      {data.slice(
        items*(page-1),
        items*(page-1)+items
      ).map((v,i) => {
        return (
          <div key={i}>
            <StoreBoardItem height='90px'>{v.body}</StoreBoardItem>
          </div>
        )
      })}
      <PaginationBox>
        <Pagination
          activePage={page}
          itemsCountPerPage={items}
          totalItemsCount={data.length-1}
          pageRangeDisplayed={5}
          onChange={handlePageChange}>
        </Pagination>
      </PaginationBox>
    </StyledDiv>
  )
}

const PaginationBox = styled.div`
  .pagination { display: flex; justify-content: center; margin-top: 15px;}
  ul { list-style: none; padding: 0; }
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
  ul.pagination li:first-child{ border-radius: 5px 0 0 5px; }
  ul.pagination li:last-child{ border-radius: 0 5px 5px 0; }
  ul.pagination li a { text-decoration: none; color: #ff9704; font-size: 1rem; }
  ul.pagination li.active a { color: white; }
  ul.pagination li.active { background-color: #ff9704; }
  ul.pagination li a:hover,
  ul.pagination li a.active { color: ff9704; }
`
const StyledDiv = styled.div`
  position : relative;
  top: -30px;
`

const MainBoardTitle = styled.h3`
  position: relative;
  top : -5px;
`

export default Paging;