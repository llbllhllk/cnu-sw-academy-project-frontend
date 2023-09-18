import {useState} from 'react'
const SignUp = () => {
  const [email, setEmail] = useState('');  // 이메일
  const [userId, setUserId] = useState(''); // 아이디
  const [password, setPassword] = useState('') // 비밀번호
  const [password2 ,setPassword2] = useState('') // 비밀번호 확인
  const [college, setCollege] = useState('') // 단과대학 선택
  const [authCode, setAuthCode] = useState('') // 인증번호 
  const [passwordAccord, setPasswordAccord] = useState(false); // 비밀번호 확인
  
  const Accord = () => {
      password === password2 ?
      passwordAccord(true) : alert("일치하지않아용")  

  }
  return (
    
  <div>
      <h1>회원가입</h1>
      <form>
        <div>
          <label>이메일:</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}           
            required
          />
        </div>
        <div>
          <label>아이디:</label>
          <input
            type="text"
            value={userId}
            onChange={(e) => setUserId(e.target.value)}           
            required
          />
        </div>
        <div>
          <label>비밀번호</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}           
            required
          />
        </div>
        <div>
          <label>비밀번호 확인</label>
          <input
            type="password"
            value={password2}
            onChange={(e) => setPassword2(e.target.value)}           
            required
          />
          <button>비밀번호 확인</button>
        </div>
        <div>
          <label>단과대학 선택</label>
          <input
            type="text"
            value={college}
            onChange={(e) => setCollege(e.target.value)}           
            required
          />
        </div>
        <div>
          <label>단과대학 선택</label>
          <input
            type="text"
            value={college}
            onChange={(e) => setCollege(e.target.value)}           
            required
          />
        </div>
        <div>
          <label>인증번호 인증</label>
          <input
            type="text"
            value={authCode}
            onChange={(e) => setAuthCode(e.target.value)}           
            required
          />
          <button>인증번호 확인</button>
        </div>

        <button type='submit'>가입하기</button>
      </form>
  </div>)
}

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