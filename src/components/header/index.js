import Button from 'components/common/Button';
import Input from 'components/common/Input';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <HeaderContainer>
      <SubContainer>
      <h1 onClick={()=>{window.location.reload()}}>냠냠</h1>
      <Link to="/filter">
        <Form>
          <Input width='300px' placeholder='키워드 검색창으로 이동해요.' />
          <Button type='button' width='72px'>
            검색
          </Button>
        </Form>
      </Link>
      </SubContainer>
    </HeaderContainer>
  );
};

const HeaderContainer = styled.header`
  display: flex;
  margin: 24px 0 24px 0;
`;

const SubContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Form = styled.form`
  display: flex;
  justify-content: space-between;
  width: 380px;
`;

export default Header;
