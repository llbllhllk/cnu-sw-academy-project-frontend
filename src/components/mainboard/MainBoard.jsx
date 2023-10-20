import StoreBoardItem from "components/StoreBoard/StoreBoardItem";
import Card from "components/common/Card";
import { useState} from 'react'
import Pagination from 'react-js-pagination'
import styled from 'styled-components'
import Button from "components/common/Button";
import { Link } from "react-router-dom";

const MainBoard = ({title,dummy}) => {
  const [page, setPage] = useState(1);
  const items= 5;
  const handlePageChange = (page) => { setPage(page); }; // 페이지네이션 눌렀을 때, 해당 페이지 의미

console.log(items*(page-1), items*(page-1)+items)

  return (
    <StyledDiv>
      <StyledH1>{title}</StyledH1>
      <Link to={'/'}>
        <StyledBtn>
          <Button width={'70px'}height={'30px'}>Home</Button>
        </StyledBtn>
      </Link>
      <StyledMain>
        <Card width={'700px'} height={'700px'}>
        {dummy.slice(
          items*(page-1),
          items*(page-1)+items
        ).map((v,i) => {
          return (
            <StoreBoardItem width={'650px'} height={'80px'} key={i}>
              <h3>{v.title}</h3>
              <div>{v.createdAt}</div>
              <div>{v.postLikeCount+"개"}</div>
            </StoreBoardItem>
          )

        })}
        <PaginationBox>
          <Pagination
            activePage={page}
            itemsCountPerPage={items}
            totalItemsCount={dummy.length-1}
            pageRangeDisplayed={5}
            onChange={handlePageChange}>
          </Pagination>
        </PaginationBox>
        </Card>
      </StyledMain>
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
  ul.pagination li a { text-decoration: none; color: #0072BC; font-size: 1rem; }
  ul.pagination li.active a { color: white; }
  ul.pagination li.active { background-color: #0072BC; }
  ul.pagination li a:hover,
  ul.pagination li a.active { color: blue; }
`

const StyledDiv = styled.div`
  display: flex;
  justify-content: center;
  align-items: center; 
  position: relative;
  height: 100vh;
`

const StyledH1 =  styled.h1`
  position: absolute;
  top: 20px; 
  left: 50%; 
  transform: translateX(-50%); 
`

const StyledMain = styled.div`
  position: absolute;
  bottom: 20px; 
  left: 50%; 
  transform: translateX(-50%); 
`
const StyledBtn = styled.div`
position: absolute;
top: 30px; 
left: 70%; 
margin-left: -15px;
pointer: cursor;
`


export default MainBoard