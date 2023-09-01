import Button from 'components/common/Button';
import Input from 'components/common/Input';
import styled from 'styled-components';

const Header = () => {
  return (
    <HeaderContainer>
      <SubContainer>
        <h1>냠냠</h1>
        <Form>
          <Input type='text' width='300px' placeholder='검색할 내용을 입력하세요.' />
          <Button type='button' width='72px'>
            검색
          </Button>
        </Form>
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
