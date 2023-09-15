import React, { useState } from 'react';
import axios from 'axios';
import styled from 'styled-components'; // Styled Components 라이브러리 불러오기
import Button from 'components/common/Button';


// Styled Components를 사용하여 각 요소 스타일링
const Container = styled.div`
  width: ${(props) => props.width || '100%'};
  height: 230px;
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
`;

const TextareaWrapper = styled.div`
  width: 100%;
  height: 140px;
`;

const Input = styled.input`
  width: 100%;
  height: 100%;
  border: 1px solid #ccc;
  padding: 10px;
`;

const Textarea = styled.textarea`
  width: 100%;
  height: 100%;
  border: 1px solid #ccc;
  padding: 10px;
`;

const StyledButton = styled.div`
  position: relative;
  bottom: 0px;
  right: -300px;
  
`;

function ReviewWrite({ width, height, handleCloseClick,restaurantName }) {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');

  const handleTitleChange = (e) => {
    setTitle(e.target.value);
  };

  const handleContentChange = (e) => {
    setContent(e.target.value);
  };

  const sendDataToServer = () => {
    axios
      .post(`http://localhost:8080/review/${restaurantName}/post`, { rating: title, content: content })
      .then((response) => {
        console.log(response.data);
      })
      .catch((error) => {
        console.error('오류 발생: ', error);
      });
  };

  return (
    <Container width={width} height={height}>
      <InputWrapper>
        <Input
          type="text"
          value={title}
          onChange={handleTitleChange}
          placeholder="평점을 입력하세요"
        />
      </InputWrapper>

      <TextareaWrapper>
        <Textarea
          value={content}
          onChange={handleContentChange}
          placeholder="내용을 입력하세요"
        />
      </TextareaWrapper>
      <StyledButton>
        <Button width='100%' height='30px' onClick={sendDataToServer}>작성</Button>
      </StyledButton>
      <Button width='100%' height='30px' onClick={handleCloseClick}>닫기</Button>
      
    </Container>
  );
}

export default ReviewWrite;