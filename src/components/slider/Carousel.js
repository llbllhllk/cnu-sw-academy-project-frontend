import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { IconButton, Typography, Container, Grid } from '@mui/material';
import { ChevronLeft, ChevronRight } from '@mui/icons-material';

// const restaurantData = [
//   // 각 슬라이드에 표시할 음식점 데이터를 배열로 정의하세요
//   [
//     { name: '1음식점1', rank: 1, category: 'new 음식점'},
//     { name: '1음식점2', rank: 2, category: 'new 음식점'},
//     { name: '1음식점3', rank: 3, category: 'new 음식점'},
//   ],
//   // 다른 슬라이드에 대한 데이터도 추가하세요
//   // ...
//   [
//     { name: '2음식점1', rank: 1, category: '주간 맛집'},
//     { name: '2음식점2', rank: 2, category: '주간 맛집'},
//     { name: '2음식점3', rank: 3, category: '주간 맛집'},
//   ],
//   [
//     { name: '3음식점1', rank: 1, category: 'Best 맛 평가'},
//     { name: '3음식점2', rank: 2, category: 'Best 맛 평가'},
//     { name: '3음식점3', rank: 3, category: 'Best 맛 평가'},
//   ],
//   [
//     { name: '4음식점1', rank: 1, category: 'Event중 인 음식점'},
//     { name: '4음식점2', rank: 2, category: 'Event중 인 음식점'},
//     { name: '4음식점3', rank: 3, category: 'Event중 인 음식점'},
//   ],
// ];


const CarouselContainer = styled(Container)`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;

const StyledCard = styled.div`
  width: 80%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  border: 1px solid #d9d9d9;
  box-shadow: 
    0 14px 28px rgba(0, 0, 0, 0.25),
    0 10px 10px rgba(0, 0, 0, 0.22);
  border-radius: 14px;
`;

const SlideContent = styled.div`
  flex: 1;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: 20px;
`;

const ArrowButton = styled(IconButton)`
  margin: 0 5px;
`;


const Carousel = ({ data }) => {
    const [currentIndex, setCurrentIndex] = useState(0);
  
    const nextSlide = () => {
      const nextIndex = (currentIndex + 1) % data.length;
      setCurrentIndex(nextIndex);
    };
  
    const prevSlide = () => {
      const prevIndex = (currentIndex - 1 + data.length) % data.length;
      setCurrentIndex(prevIndex);
    };
  
    // 자동 슬라이드 설정
    useEffect(() => {
      const intervalId = setInterval(() => {
        nextSlide();
      }, 5000); 
  
      return () => {
        clearInterval(intervalId); 
      };
    }, [currentIndex]);
  
    return (
      <CarouselContainer>
        <Grid container direction="row" justifyContent="center" alignItems="center">
          <StyledCard>
            <SlideContent>
              <ArrowButton onClick={prevSlide} disabled={currentIndex === 0}>
                <ChevronLeft />
              </ArrowButton>
              <div>
                <Typography variant="h6">
                  {data[currentIndex][0].category}
                </Typography>
              </div>
              {data[currentIndex].map((restaurant, index) => (
                <div key={index}>
                  <Typography>{restaurant.rank}등</Typography>
                  <Typography variant="h6">{restaurant.name}</Typography>

                </div>
              ))}
              <ArrowButton onClick={nextSlide} disabled={currentIndex === data.length - 1}>
                <ChevronRight />
              </ArrowButton>
            </SlideContent>
          </StyledCard>
        </Grid>
      </CarouselContainer>
    );
  };
  
  export default Carousel;
  