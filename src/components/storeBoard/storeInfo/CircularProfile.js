import React from 'react';
import styled from 'styled-components';

const CircularProfile = ({ imageUrl, size }) => {
  return (
    <CircularProfileContainer size={size}>
      <ProfileImage src={imageUrl} alt='Profile' />
    </CircularProfileContainer>
  );
};

const CircularProfileContainer = styled.div`
  width: ${({ size }) => size || '60px'};
  height: ${({ size }) => size || '60px'};
  margin-left: 40px;
  margin-top: 5px;
  border-radius: 50%;
  overflow: hidden;
  background-color: skyblue;
`;

const ProfileImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center;
  border: 2px solid black;
`;

export default CircularProfile;
