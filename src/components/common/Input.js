import styled from 'styled-components';

const Input = ({ type, placeholder, onChange, widht, height, ...props }) => {
  return <Container type={type} onChange={onChange} placeholder={placeholder} {...props} />;
};

const Container = styled.input`
  width: ${({ width }) => (width ? `${width}` : `100%`)};
  height: ${({ height }) => (height ? `${height}` : `auto`)};
  border: 1px solid #d9d9d9;
  border-radius: 14px;
  padding: 8px 12px;
  outline: none;
`;

export default Input;
