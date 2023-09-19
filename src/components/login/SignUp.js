import { useState } from 'react';
import axios from 'axios';
import styled from 'styled-components';
import Button from 'components/common/Button';

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
        'http://43.201.204.106:8080/mailConfirm',
        { email: email }
      );
      if (response.data.success) {
        alert('인증번호가 발송되었습니다');
      } else {
        alert('인증번호 전송이 실패했습니다. 다시 시도해주세요.');
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
        'http://43.201.204.106:8080/emailCheck',
        { email: email, authCode: authCode }
      );
      if (response.data.success) {
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
      // passwordAccord가 true일 때만 회원가입 로직을 실행
      // 여기에 실제 회원가입 API 호출 및 처리 로직을 추가해야 합니다.
      alert('회원가입 완료');
    } else {
      alert('비밀번호를 확인하세요');
    }
  };

  return (
    <div>
      <h1>회원가입</h1>
      <LoginContainer>
        <form onSubmit={handleSubmit}>
          <div>
            <label>아이디:</label>
            <InputField
              type="text"
              value={userId}
              onChange={(e) => setUserId(e.target.value)}
              required
            />
          </div>
          <div>
            <label>비밀번호:</label>
            <InputField
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <div>
            <label>비밀번호 확인:</label>
            <InputField
              type="password"
              value={password2}
              onChange={(e) => setPassword2(e.target.value)}
              required
            />
            <Button
              width="70px"
              height="30px"
              onClick={handlePasswordCheck}
            >
              비밀번호 확인
            </Button>
          </div>
          <div>
            <DropdownContainer>
              <div onClick={toggleDropdown}>
                <div>단과대학 선택</div>
                <DivField>{selectedOption}</DivField>
              </div>
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
          </div>
          <div>
            <label>이메일:</label>
            <InputField
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <Button
              width="70px"
              height="30px"
              onClick={handleEmailAccord}
            >
              인증번호 보내기
            </Button>
          </div>
          <div>
            <label>인증번호 인증:</label>
            <InputField
              type="text"
              value={authCode}
              onChange={(e) => setAuthCode(e.target.value)}
              required
            />
            <Button
              width="70px"
              height="30px"
              onClick={handleAuthCodeAccord}
            >
              인증번호 확인
            </Button>
          </div>
          <Button width="70px" height="30px" type="submit">
            가입하기
          </Button>
        </form>
      </LoginContainer>
    </div>
  );
};

const LoginContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  border: 1px solid #d9d9d9;
  border-radius: 14px;
  box-shadow: 0 14px 28px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.22);
  width: 600px;
  height: 500px;
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

const DivField = styled.div`
  width: 400px;
  height: 60px;
  padding: 5px;
  margin: 5px;
  border: 1px solid #d9d9d9;
  border-radius: 7px;
  font-weight: border;
  font-size: 20px;
`;

const DropdownContainer = styled.div`
  position: relative;
  display: inline-block;
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

export default SignUp;