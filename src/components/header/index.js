import React from 'react';
// import Button from 'components/common/Button';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import './index.css';
import CNU from './images/CNU.svg';
import Cookies from 'js-cookie';

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
              <button type='button' width='150px' height='55px'>
                키워드 검색
              </button>
            </Link>
            <p onClick={handleLogout} type='button' width='72px'>
              로그아웃
            </p>
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
  justify-content: space-between;
  width: 380px;
`;

const StyledLogo = styled.div`
  transform: translate(-350px,-5px);
`;

export default Header;