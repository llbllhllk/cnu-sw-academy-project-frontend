import React from 'react';
// import Button from 'components/common/Button';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import './index.css';
import CNU from './images/CNU.svg';
import Cookies from 'js-cookie';
import Search from './images/search.png'

const Header = ({ Uni }) => {
  const handleLogout = () => {
    // Cookies에서 이름이 "accessToken"인 토큰을 제거합니다.
    Cookies.remove('accessToken');
    // 로그아웃 후에 홈페이지를 다시 로드합니다.
    window.location.href = '/login';
  };

  return (
    <HeaderContainer>
      <SubContainer>
        <h1 className="Nam" onClick={() => { window.location.reload() }}>냠냠</h1>
        <StyledLogo onClick={() => { window.location.reload() }}>
          <img src={CNU} width={'70px'} height={'70px'} alt='충남대' />
        </StyledLogo>
        
          <Div>
            <Link to="/filter">
              <StyledBtn>
                키워드 검색
                <img src={Search} width={'20px'} height={'20px'} alt='검색' />
              </StyledBtn>
            </Link>
            <StyledP onClick={handleLogout} type='button' width='72px'>
              로그아웃
            </StyledP>
          </Div>
        
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

const Div = styled.div`
  display: flex;
  justify-content: center;
  width: 380px;
`;

const StyledLogo = styled.div`
  transform: translate(-350px,-5px);
`;

const StyledP = styled.p`
  absolute
  cursor: pointer;
  padding-left : 10px;
  padding-top : 7px
`
const StyledBtn = styled.button`
  border: 1px solid #d9d9d9;
  border-radius: 14px;
  padding: 8px 12px;
  outline: none;
  width : 225px; 
  height : 35px;
  font-size : 15px;
`

export default Header;