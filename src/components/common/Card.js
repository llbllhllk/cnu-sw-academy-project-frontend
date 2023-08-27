import styled from 'styled-components';

const Card = ({ title, children, ...props }) => {
  return (
    <CardConatiner {...props}>
      <Title>{title}</Title>
      {children}
    </CardConatiner>
  );
};

const CardConatiner = styled.div`
  width: 100%;
  height: 500px;
  padding: 24px 18px;
  border: 1px solid #d9d9d9;
  border-radius: 14px;
`;

const Title = styled.div`
  font-size: 24px;
  font-weight: 700;
  margin-bottom: 24px;
`;

export default Card;
