import styled from 'styled-components';

const ReviewProfileBox = ({ width, height, top, children, ...props }) => {
  return (
    <ReviewInfoBoxStyle width={width} height={height} top={top} {...props}>
      {children}
    </ReviewInfoBoxStyle>
  );
};

const ReviewInfoBoxStyle = styled.div`
  width: ${({ width }) => (width ? `${width}` : `100%`)};
  height: ${({ height }) => (height ? `${height}` : `auto`)};
  margin-top: ${({ top }) => (top ? `${top}` : `0px`)};
  border: 2px solid #d9d9d9;
  border-radius: 15px;
  background-color: #f5f5f5;
`;

export default ReviewProfileBox;
