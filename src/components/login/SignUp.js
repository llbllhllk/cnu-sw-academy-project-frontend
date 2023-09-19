import {useState} from 'react'
import axios from 'axios';
import styled from 'styled-components';
import Button from 'components/common/Button';


const SignUp = () => {
  const [userId, setUserId] = useState(''); // 아이디
  const [password, setPassword] = useState('') // 비밀번호
  const [password2 ,setPassword2] = useState('') // 비밀번호 확인
  const [college, setCollege] = useState('') // 단과대학 선택
  const [email, setEmail] = useState('');  // 이메일
  const [authCode, setAuthCode] = useState('') // 인증번호 
  const [passwordAccord, setPasswordAccord] = useState(''); // 최종 비밀번호임.
  
  const all = {
    email: email,
    memberId: userId,
    password : password,
    password2 : password2,
    college : college,
    authCode : authCode
  }

  console.log(all);

  const handleEmailAccord = async (e) => {
    e.preventDefault()
    const response = await axios.post('http://43.201.204.106:8080/mailConfirm ',{email:email})
    try{
      console.log(response.data)
      console.log(response.data.success)
      response.data.success ? alert("인증번호가 발송되었습니다") : alert("인증번호 전송이 실패했습니다. 다시 시도해주세요.");   
    }
    catch(error){
      alert("인증번호 전송이 실패했습니다. 다시 시도하렴 ")
    }
  } // 이메일 인증 보내는 버튼 

  const handleAuthCodeAccord = async (e) => {
    e.preventDefault()
    const response = await axios.post('http://43.201.204.106:8080/emailCheck',{email:email, authCode:authCode})
    try{
      console.log(response.data)
      console.log(response.data.success)
      response.data.success ? alert("인증이 성공했습니다") : alert("인증이 실패했어요. 다시 시도해주세요.");   
    }
    catch(error){
      alert("다시 시도해줘 ")
    }
  } // 인증번호 확인 버튼 

  const handlePasswordCheck = () => {
    if (password === password2){
      setPasswordAccord(password) // 일치하면 setPasswordAccord에 password를 저장. 
      //최종적으로 passwordAccord를 회원가입에 보낼거임.
      alert("비밀번호가 일치해요")
    }
    else{
      alert("비밀번호가 일치하지않는다")
    }
  }
  console.log(passwordAccord)
  // 비밀번호가 같아야 그 비밀번호를 PasswordAccord에 저장해서, 최종적으로 보낸다.
  return (
    
  <div>
      <h1>회원가입</h1>
      <LoginContainer>
      <form>
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
          <label>비밀번호</label>
          <InputField
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}           
            required
          />
        </div>
        <div>
          <label>비밀번호 확인</label>
          <InputField
            type="password"
            value={password2}
            onChange={(e) => setPassword2(e.target.value)}           
            required
          />
          <Button width='70px' height='30px' onClick={handlePasswordCheck}>비밀번호 확인</Button>
        </div>  
        <div>
          <label>단과대학 선택</label>
          <InputField
            type="text"
            value={college}
            onChange={(e) => setCollege(e.target.value)}           
            required
          />
        </div>
        <div>
          <label>이메일:</label>
          <InputField
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}           
            required
          />
          <Button width='70px' height='30px' onClick={handleEmailAccord}>인증번호 보내기</Button>
        </div>
        <div>
          <label>인증번호 인증</label>
          <InputField
            type="text"
            value={authCode}
            onChange={(e) => setAuthCode(e.target.value)}           
            required
          />
          <Button width='70px' height='30px' onClick={handleAuthCodeAccord}>인증번호 확인</Button>
        </div>
        <Button width='70px' height='30px' type='submit'>가입하기</Button>
      </form>
      </LoginContainer>
  </div>)
}


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

export default SignUp;


// import React, { useState } from 'react';

// function App() {
//   const [email, setEmail] = useState(''); // 이메일 입력
//   const [password, setPassword] = useState(''); // 비밀번호 입력 
//   const [confirmPassword, setConfirmPassword] = useState(''); // 비밀번호 확인 입력 
//   const [isEmailVerified, setIsEmailVerified] = useState(false); // 이메일 인증 버튼 나오는 버튼
//   const [verificationCode, setVerificationCode] = useState(''); // 이메일 인증 저장 코드

//   const [passwordAccord, setPasswordAccord] = useState(false); // 이 부분이 true여야 회원가입 가능.  비밀번호 일치하면 true
//   const [emailAccord,setEmailAccord] = useState(false); // 이 부분이 true여야 회원가입 가능. 이메일 인증 성공하면 true

//   const handleSubmit = (e) => { //최종 가입 할 때 확인용, password,final등 전부 true일때 로직을 api로 보냄
//     e.preventDefault() // 새로고침 막는 거래요 
//     passwordAccord & emailAccord ? //api 로직 
//     alert("회원가입 완료 ㅎㅎ" ) : alert("회원가입 실패 ㅠㅠ")
//   }

//   const handleEmail = () => { // 이메일 확인 누를 때 로직
//     // 이메일 발송 api 로직 구축 

//     // 만약 이메일이 잘 발송됐다면 isEmailVerified(true) 이메일 인증 부분 생기게 하는 것
//     // 아니라면 alert("이메일을 확인해줘용")
//     setIsEmailVerified(true) // 이메일이 잘 갔다고 가정하고 씀
//   };

//   const handleEmailAccord = () => { // 인증번호 확인 로직
//   // 인증번호 api로 받는 로직 구축, example 변수에 인증번호 저장

//   // if (verificationCode ===  example){
//   // setIsEmailVerified(false) // 이메일 인증부분 다시 없애는 것
//   // setEmailAccord(true) // 이메일 인증 완료됐다는 것. 최종 가입할 때 확인
//   // 
//   //}
//   // else{arlet("인증번호가 틀렸어용")}
//   setIsEmailVerified(false) // 이메일 인증 잘됐다고 가정
//   setEmailAccord(true)
//   };

//   const handlePasswordAccord = (e) => { // 비밀번호 확인 로직 
//     e.preventDefault()
//     if(password === confirmPassword){
//       setPasswordAccord(true); // 비밀번호 일치한다는 것. 최종 가입할때 확인
//       alert("확인 되었습니당")
//     }
//     else{
//       alert("비밀번호가 일치하지 않아용")
//     }
//   }

//   return (
//     <div>
//       <h2>회원가입</h2>
//       <form onSubmit={handleSubmit}>
//         <div>
//           <label>이메일:</label>
//           <input
//             type="email"
//             value={email}
//             onChange={(e) => setEmail(e.target.value)}
//             required
//           />
//           {!isEmailVerified && (
//             <button onClick={handleEmail}>이메일 인증</button>
//           )}
//         </div>
//         {isEmailVerified && (
//           <div>
//             <label>인증번호:</label>
//             <input
//               type="text"
//               value={verificationCode}
//               onChange={(e) => setVerificationCode(e.target.value)}
//               required
//             />
//             <button onClick={handleEmailAccord} >확인</button>
//           </div>
//         )}
//         <div>
//           <label>비밀번호:</label>
//           <input
//             type="password"
//             value={password}
//             onChange={(e) => setPassword(e.target.value)}
//             required
//           />
//         </div>
//         <div>
//           <label>비밀번호 확인:</label>
//           <input
//             type="password"
//             value={confirmPassword}
//             onChange={(e) => setConfirmPassword(e.target.value)}
//             required
//           />
//           <button onClick={handlePasswordAccord}>확인</button>
//         </div>
//         <button type="submit">가입하기</button>
//       </form>
//     </div>
//   );
// }

// export default App;