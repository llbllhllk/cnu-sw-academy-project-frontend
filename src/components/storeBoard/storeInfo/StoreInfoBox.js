import styled from 'styled-components';

const StoreInfoBox = ({ width, height, top, children, ...props }) => {
  return (
    <StoreInfoBoxStyle width={width} height={height} top={top} {...props}>
      {children}
    </StoreInfoBoxStyle>
  );
};

const StoreInfoBoxStyle = styled.div`
  width: ${({ width }) => (width ? `${width}` : `100%`)};
  height: ${({ height }) => (height ? `${height}` : `auto`)};
  margin-top: ${({ top }) => (top ? `${top}` : `0px`)};
  border: 1.5px solid #d9d9d9;
  border-radius: 7px;
`;

export default StoreInfoBox;
