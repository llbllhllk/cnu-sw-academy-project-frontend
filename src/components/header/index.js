import Button from 'components/common/Button';
import Container from 'components/common/Container';
import Input from 'components/common/Input';
import styled from 'styled-components';

const Header = () => {
  return (
    <HeaderContainer>
      <Container>
        <SubContainer>
          <h1>Title</h1>
          <Form>
            <Input type='text' width='300' placeholder='검색할 내용을 입력하세요.' />
            <Button type='button' width='72'>
              검색
            </Button>
          </Form>
        </SubContainer>
      </Container>
    </HeaderContainer>
  );
};

const HeaderContainer = styled.header`
  display: flex;
  margin: 24px 0 24px 0;
`;

const SubContainer = styled.div`
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
