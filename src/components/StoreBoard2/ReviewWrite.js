import React, { useState } from 'react';
import axios from 'axios';
import styled from 'styled-components'; // Styled Components 라이브러리 불러오기
import StarIcon from '@mui/icons-material/Star';
import StarBorderIcon from '@mui/icons-material/StarBorder';

const ReviewWrite = ({ width, height, handleCloseClick, restaurantName, color }) => {
  const [rating, setRating] = useState(0); // 별점 부분
  const [content, setContent] = useState(''); // 내용 부분

  const handleStarClick = (value) => {
    setRating(value);
  }; // 별점

  const handleContentChange = (e) => {
    setContent(e.target.value);
  }; // 내용

  const sendDataToServer = () => {
    console.log(rating)
    console.log(content)
    axios
      .post(`http://223.130.131.136:8080/review/${restaurantName}/post`, { rating: rating, content: content})
      .then((response) => {
        console.log(response.data);
        setRating(0)
        setContent('');
      })
      .catch((error) => {
        console.error('오류 발생: ', error);
      });

  };

  return (
    <Container width={width} height={height}>
      <InputWrapper>
        <StarContainer>
          {[1, 2, 3, 4, 5].map((value) => (
            <span
              key={value}
              onClick={() => handleStarClick(value)}
              style={{ cursor: 'pointer' }}
            >
              {value <= rating ? (
                <StarIcon style={{ color: '#ff9704', fontSize: '50px' }} />
              ) : (
                <StarBorderIcon style={{fontSize: '50px' }} />
              )}
            </span>
          ))}
        </StarContainer>
        {/* 별점 부분 */}
      </InputWrapper>

      <TextareaWrapper>
        <Textarea
          value={content}
          onChange={handleContentChange}
          placeholder="내용을 입력하세요"
        />
      </TextareaWrapper>
      <StyledButton1>
        <CreateBtn style={{ backgroundColor: '#0072BC'}} onClick={sendDataToServer}>작성</CreateBtn>
      </StyledButton1>
      <StyledButton2>
        <CreateBtn style={{ backgroundColor: 'silver' }} onClick={handleCloseClick}>닫기</CreateBtn>
      </StyledButton2>
      
      
    </Container>
  );
}

// Styled Components를 사용하여 각 요소 스타일링
const Container = styled.div`
  width: ${(props) => props.width || '100%'};
  height: 235px;
  display: flex;
  flex-direction: column;
  align-items: center;
  border: 1px solid #d9d9d9;
  border-radius: 5px;
`;

const InputWrapper = styled.div`
  width: 100%;
  height: 40px;
  margin-bottom : 10px;
  text-align : center;
`;

const TextareaWrapper = styled.div`
  width: 100%;
  height: 140px;
`;

const Textarea = styled.textarea`
  width: 100%;
  height: 145px;
  border: 1px solid #ccc;
  padding: 10px;
  resize: none;
`;

const StyledButton1 = styled.div`
  position: relative;
  bottom: -10px;
  right: -215px;
`;
const StyledButton2 = styled.div`
  position: relative;
  bottom: 20px;
  right: -290px;
`;

const StarContainer = styled.div`
  display: flex;
  justify-content : center;
`;

const CreateBtn = styled.button`
  display: inline-block;
  width : 70px; 
  height : 30px;
  border-radius: 14px;
  padding: 4px 12px;
  color: #fff;
  font-weight: 700;
  transition: box-shadow 0.2s ease-out;

  &:hover {
    box-shadow: 3px -3px 0px 0px rgba(255, 255, 255, 0.45) inset;
  }
`


export default ReviewWrite;