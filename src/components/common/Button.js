import styled from 'styled-components';

const Button = ({ type, children, onClick, width, height, ...props }) => {
  return (
    <Container type={type} onClick={onClick} width={width} height={height} {...props}>
      {children}
    </Container>
  );
};

const Container = styled.button`
  display: inline-block;
  border-radius: 14px;
  width: ${({ width }) => (width ? `${width}` : `100%`)};
  height: ${({ height }) => (height ? `${height}` : `auto`)};
  padding: 4px 12px;
  background-color: rgb(0 114 188);
  color: #fff;
  font-weight: 700;
  transition: box-shadow 0.2s ease-out;

  &:hover {
    box-shadow: 3px -3px 0px 0px rgba(255, 255, 255, 0.45) inset;
  }
`;
//  background-color: #ff9704; 원래 색
export default Button;
