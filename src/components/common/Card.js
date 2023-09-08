import styled from 'styled-components';

const Card = ({ title, width,height, children, ...props }) => {
  return (
    <CardConatiner width={width} height={height} {...props}>
      <Title>{title}</Title>
      {children}
    </CardConatiner>
  );
};

const CardConatiner = styled.div`
  position: relative;
  width: ${({ width }) => (width ? `${width}` : `30%`)};
  height: ${({ height }) => (height ? `${height}` : `30%`)};
  min-height: 500px;
  padding: 24px 18px;
  border: 1px solid #d9d9d9;
  border-radius: 14px;
  box-shadow:
    0 14px 28px rgba(0, 0, 0, 0.25),
    0 10px 10px rgba(0, 0, 0, 0.22);
`;

const Title = styled.div`
  font-size: 24px;
  font-weight: 700;
  margin-bottom: 24px;
`;

export default Card;
