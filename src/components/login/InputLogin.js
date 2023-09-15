import React, { useState } from 'react';
import axios from 'axios';
import styled from 'styled-components';
import Button from 'components/common/Button';

const CenteredContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center; /* 수정: 세로 중앙 정렬을 위해 justify-content 추가 */
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
  margin-top: 50px;
`;

const StyledP = styled.p`
  font-size: 20px;
  font-weight: bolder;
`;

function InputLogin() {
  const [memberId, setMemberId] = useState('');
  const [password, setPassword] = useState('');
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLogin = async () => {
    try {
      const data = { memberId, password };
      const response = await axios.post('http://43.201.204.106:8080/member/login', data, {
        withCredentials: true,
      });

      if (response.data.success) {
        setIsLoggedIn(true);
      } else {
        console.error('로그인 실패');
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
              <InputLabel htmlFor="memberId"><StyledP>아이디</StyledP></InputLabel>
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
    </CenteredContainer>
  );
}

export default InputLogin;