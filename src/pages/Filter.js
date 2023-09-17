import FilterSelect from "components/filter/FilterSelect";
import { Link } from "react-router-dom";
import Button from "components/common/Button";
import styled from "styled-components";


const Filter = () => {
  return (
    <>
    <Link to="/">
      <StyledButton>
        <Button width='100px' height='40px'>닫기</Button>
      </StyledButton>
      
    </Link>
    <FilterSelect/>
    </>
  )
}


const StyledButton = styled.div`
  position: fixed;  /* 예시: 절대 위치 지정 */
  top: 150px; /* 예시: 위에서 10px 떨어진 위치 */
  left : 100px;
`;


export default Filter;