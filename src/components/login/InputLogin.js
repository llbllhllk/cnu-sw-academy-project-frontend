import React, { useState, useEffect } from 'react';
import axios from 'axios';
import styled from 'styled-components';
import Button from 'components/common/Button';
import Cookies from 'js-cookie';
import { Link } from 'react-router-dom';

function InputLogin() {
  const [memberId, setMemberId] = useState('');
  const [password, setPassword] = useState('');
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    // 페이지 로딩 시 쿠키에서 토큰 읽어오기
    const accessToken = Cookies.get('accessToken');
    if (accessToken) {
      setIsLoggedIn(true);
    }
  }, []);

  // axios interceptors를 사용하여 헤더에 토큰 추가
  axios.interceptors.request.use((config) => {
    const accessToken = Cookies.get('accessToken');
    if (accessToken) {
      config.headers.Authorization = `Bearer ${accessToken}`;
    }
    return config;
  });

  const handleLogin = async () => {
    try {
      const data = { memberId, password };
      const response = await axios.post('http://223.130.131.136:8080/member/login', data, {
        withCredentials: true,
      });

      if (response.data.token) {
        // 로그인 성공 시 토큰을 쿠키에 저장
        Cookies.set('accessToken', response.data.token);
        setIsLoggedIn(true);
        console.log('로그인 성공, 토큰:', response.data.token);

        // <Link to='/'></Link>
        // // 홈 페이지로 이동
        window.location.href = '/'; // 페이지 이동
      } else {
        alert('로그인 실패')
        // console.error('로그인 실패');
      }
    } catch (error) {
      console.error('오류 발생', error);
    }
  };

  return (
    <CenteredContainer>
      <Header>냠냠</Header>
      <LoginContainer>
        {isLoggedIn ? (
          console.log("로그인 완료")
        ) : (
          <LoginForm>
            <InputRow>
              <InputLabel htmlFor="memberId"><StyledP>이메일</StyledP></InputLabel>
              <InputField
                type="text"
                id="memberId"
                value={memberId}
                onChange={(e) => setMemberId(e.target.value)}
              />
            </InputRow>
            <InputRow>
              <InputLabel htmlFor="password"><StyledP>비밀번호</StyledP></InputLabel>
              <InputField
                type="password"
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </InputRow>
            <StyledBtn>
              <Button type="button" width='200px' height='50px' onClick={handleLogin}>
                로그인
              </Button>
            </StyledBtn>
          </LoginForm>
        )}
      </LoginContainer>
      
      <StyledBtn1>
        <Link to='/signup'><button>회원가입</button></Link>
      </StyledBtn1>
      {/* <button>비밀번호 찾기</button> */}
    </CenteredContainer>
  );
}

const CenteredContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;

const Header = styled.h1`
  font-size: 50px;
  margin-bottom: 30px;
`;

const LoginContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  border: 1px solid #d9d9d9;
  border-radius: 14px;
  box-shadow:
    0 14px 28px rgba(0, 0, 0, 0.25),
    0 10px 10px rgba(0, 0, 0, 0.22);
  width: 600px;
  height: 350px;
`;

const LoginForm = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 40px;
`;

const InputRow = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-top: 10px;
`;

const InputLabel = styled.label`
  display: inline-block;
  width: 80px;
  margin-right: 10px;
`;

const InputField = styled.input`
  width: 400px;
  height: 60px;
  padding: 5px;
  margin: 5px;
  border: 1px solid #d9d9d9;
  border-radius: 7px;
  font-weight: border;
  font-size: 20px;
`;

const StyledBtn = styled.div`
  margin-top:20px;
`;

const StyledP = styled.p`
  font-size: 20px;
  font-weight: bolder;
`;

const StyledBtn1 = styled.div`
position: relative; /* 'realtive' 대신 'relative'로 수정합니다. */
top: -60px;
`

export default InputLogin;