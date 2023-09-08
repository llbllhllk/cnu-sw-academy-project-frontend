// storelist 및 게시판에 들어가는 흰 박스

import styled from 'styled-components';

const StoreBoardItem = ({ width,height,children, ...props }) => {
  return (
    <BoardItemStyle width={width} height={height}>
      {children}
    </BoardItemStyle>
  );
};

const BoardItemStyle = styled.div`
  width: ${({ width }) => (width ? `${width}` : `100%`)};
  height: ${({ height }) => (height ? `${height}` : ``)};
  display: flex;
  align-items: center;
  border: 1px solid #d9d9d9;
  border-radius: 7px;
  margin-top: 10px;
  margin-bottom: 35px;
  font-weight: border;
  cursor: pointer;
`;

export default StoreBoardItem;
