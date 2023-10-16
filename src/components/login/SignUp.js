import React, { useState } from 'react';
import axios from 'axios';
import styled from 'styled-components';
import Button from 'components/common/Button';
import { Link } from 'react-router-dom';

const SignUp = () => {
  const [userId, setUserId] = useState(''); // 아이디
  const [password, setPassword] = useState(''); // 비밀번호
  const [password2, setPassword2] = useState(''); // 비밀번호 확인
  const [college, setCollege] = useState(''); // 단과대학 선택
  const [email, setEmail] = useState(''); // 이메일
  const [authCode, setAuthCode] = useState(''); // 인증번호
  const [passwordAccord, setPasswordAccord] = useState(false); // 최종 비밀번호 확인

  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState(null); // 드롭다운 선택값

  // 단과대학 선택 드롭다운 열기/닫기
  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  // 단과대학 선택 항목을 클릭했을 때
  const handleOptionSelect = (option) => {
    setSelectedOption(option);
    setCollege(option);
    setIsOpen(false); // 드롭다운을 닫습니다.
  };

  // 회원가입 폼 데이터
  const formData = {
    email: email,
    memberId: userId,
    password: password,
    password2: password2,
    college: college,
    authCode: authCode,
  };

  console.log(formData);

  // 이메일 인증 보내기 버튼 클릭 시
  const handleEmailAccord = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        'http://223.130.131.136:8080/mailConfirm',
        { email: email }
      );
      if (response.data.success === true) {
        alert('인증번호가 발송되었습니다');
      } 
    } catch (error) {
      alert('인증번호 전송이 실패했습니다. 다시 시도하렴 ');
    }
  };

  // 인증번호 확인 버튼 클릭 시
  const handleAuthCodeAccord = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        'http://223.130.131.136:8080/emailCheck',
        { email: email, authCode: authCode }
      );
      if (response.data.success === true) {
        alert('인증이 성공했습니다');
      } else {
        alert('인증이 실패했어요. 다시 시도해주세요.');
      }
    } catch (error) {
      alert('다시 시도해줘');
    }
  };

  // 비밀번호 확인 버튼 클릭 시
  const handlePasswordCheck = (e) => {
    e.preventDefault();
    if (password === password2) {
      setPasswordAccord(true); // 일치하면 passwordAccord를 true로 설정
      alert('비밀번호가 일치해요');
    } else {
      setPasswordAccord(false); // 불일치하면 passwordAccord를 false로 설정
      alert('비밀번호가 일치하지 않아요');
    }
  };

  // 회원가입 폼 제출 시
  const handleSubmit = (e) => {
    e.preventDefault();
    if (passwordAccord) {
      const finalSignUp = async() => {
          const response = await axios.post('http://223.130.131.136:8080/member/join',formData)
        try{
          if (response.data.message === "회원가입 성공") {
            alert('회원가입에 성공했습니다');
          } else {
            alert('회원가입에 실패했어요. 다시 시도해주세요.');
          }
        }
        catch(error){
          alert("다시 시도해줘")
          
        }
      }
    finalSignUp()
    } else {
      alert('비밀번호를 확인하세요');
    }
  };

  return (
    <div>
      <LoginContainer>
        <StyledH1>회원가입</StyledH1>
        <form onSubmit={handleSubmit}>
          <FormGroup>
            <Label>아이디</Label>
            <InputField
              type="text"
              value={userId}
              onChange={(e) => setUserId(e.target.value)}
              required
            />
          </FormGroup>
          <FormGroup>
            <Label>비밀번호</Label>
            <InputField
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </FormGroup>
          <FormGroup>
            <Label>비밀번호 확인</Label>
            <InputField
              type="password"
              value={password2}
              onChange={(e) => setPassword2(e.target.value)}
              required
            />
          </FormGroup>
          <ConfirmButton
            width="50px"
            height="30px"
            onClick={handlePasswordCheck}
          >
            확인
          </ConfirmButton>
          <FormGroup>
            <Label>단과대학 선택</Label>
            <DropdownContainer>
              <DropdownField onClick={toggleDropdown}>
                <div>{selectedOption || '선택'}</div>
              </DropdownField>
              {isOpen && (
                <DropdownList>
                  <DropdownItem onClick={() => handleOptionSelect('인문대학')}>
                    인문대학
                  </DropdownItem>
                  <DropdownItem onClick={() => handleOptionSelect('사회과학대학')}>
                    사회과학대학
                  </DropdownItem>
                  <DropdownItem onClick={() => handleOptionSelect('자연과학대학')}>
                    자연과학대학
                  </DropdownItem>
                  <DropdownItem onClick={() => handleOptionSelect('경상대학')}>
                    경상대학
                  </DropdownItem>
                  <DropdownItem onClick={() => handleOptionSelect('공과대학')}>
                    공과대학
                  </DropdownItem>
                  <DropdownItem onClick={() => handleOptionSelect('농업생명과학대학')}>
                    농업생명과학대학
                  </DropdownItem>
                  <DropdownItem onClick={() => handleOptionSelect('약학대학')}>
                    약학대학
                  </DropdownItem>
                  <DropdownItem onClick={() => handleOptionSelect('의과대학')}>
                    의과대학
                  </DropdownItem>
                </DropdownList>
              )}
            </DropdownContainer>
          </FormGroup>
          <FormGroup>
            <Label>이메일</Label>
            <InputField
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </FormGroup>
          <SendButton
            width="50px"
            height="30px"
            onClick={handleEmailAccord}
          >
            전송
          </SendButton>
          <FormGroup>
            <Label>인증번호 인증</Label>
            <InputField
              type="text"
              value={authCode}
              onChange={(e) => setAuthCode(e.target.value)}
              required
            />
          </FormGroup>
          <AuthButton
            width="50px"
            height="30px"
            onClick={handleAuthCodeAccord}
          >
            확인
          </AuthButton>
          <SubmitButton width="330px" height="40px" type="submit">
            가입하기
          </SubmitButton>
        </form>
        
        <Link to="/login">
        <BackButton width ="50px" height= "40px">닫기</BackButton>
        </Link>
      </LoginContainer>
    </div>
  );
};

const StyledH1 = styled.h1`
  position: relative;
  top: -30px;
`

const LoginContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  border: 1px solid #d9d9d9;
  border-radius: 14px;
  box-shadow: 0 14px 28px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.22);
  width: 500px;
  height : 500px;
  padding: 20px;
  justify-content: center; /* 화면 가운데 정렬을 위해 추가 */
  margin: 100px auto 0 auto; /* 위로 50px만 내려오도록 설정 */
`;

const FormGroup = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin: 10px 0;
`;

const Label = styled.label`
  font-weight: bold;
  margin-right: 10px;
  width: 150px;
  text-align : left;

`;

const InputField = styled.input`
  width: 100%;
  height: 40px;
  padding: 5px;
  border: 1px solid #d9d9d9;
  border-radius: 7px;
  font-size: 16px;
`;

const DropdownContainer = styled.div`
  position: relative;
  width: 100%;
  height: 40px;
  padding: 5px;
  border: 1px solid #d9d9d9;
  border-radius: 7px;
  font-size: 16px;
`;

const DropdownField = styled.div`
  text-align : center;
`;

const DropdownList = styled.div`
  position: absolute;
  top: 100%;
  left: 0;
  background-color: #fff;
  border: 1px solid #d9d9d9;
  border-radius: 7px;
  z-index: 1;
  width: 100%;
`;

const DropdownItem = styled.div`
  padding: 5px;
  cursor: pointer;
  &:hover {
    background-color: #f0f0f0;
  }
`;

const ConfirmButton = styled(Button)`
  position: absolute;
  top: 280px; /* 상단 위치 조정 */
  left: 900px; /* 좌측 위치 조정 */
`;

const SendButton = styled(Button)`
  position: absolute;
  top: 430px; /* 상단 위치 조정 */
  left: 900px; /* 좌측 위치 조정 */
`;

const AuthButton = styled(Button)`
  position: absolute;
  top: 480px; /* 상단 위치 조정 */
  left: 900px; /* 좌측 위치 조정 */
`;

const SubmitButton = styled(Button)`
  position: absolute;
  top: 540px; /* 상단 위치 조정 */
  left: 550px; /* 좌측 위치 조정 */
`;

const BackButton = styled(Button)`
  position: absolute;
  top: 540px; /* 상단 위치 조정 */
  left: 900px; /* 좌측 위치 조정 */
`;

export default SignUp;