import React, { useState } from 'react';
import StarIcon from '@mui/icons-material/Star';
import StarBorderIcon from '@mui/icons-material/StarBorder';
import styled from 'styled-components';

const StarContainer = styled.div`
  display: flex;
`;

const Rating = () => {
  const [rating, setRating] = useState(0);

  const handleStarClick = (value) => {
    setRating(value);
  };

  return (
    <div>
      <StarContainer>
        {[1, 2, 3, 4, 5].map((value) => (
          <span
            key={value}
            onClick={() => handleStarClick(value)}
            style={{ cursor: 'pointer'}}
          >
            {value <= rating ? (
              <StarIcon style={{ color: '#ff9704', fontSize: '50px' }} />
            ) : (
              <StarBorderIcon style={{fontSize: '50px' }} />
            )}
          </span>
        ))}
      </StarContainer>
      <p>평점: {rating}</p>
    </div>
  );
};

export default Rating;

