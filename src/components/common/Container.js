import styled from 'styled-components';

const Container = ({ children, ...props }) => {
  return <StyledContainer {...props}>{children}</StyledContainer>;
};

const StyledContainer = styled.div`
  width: 1280px;
  margin: 0 auto;
`;

export default Container;
