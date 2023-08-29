import styled from 'styled-components';

const BoardItem = () => {
  return (
    <BoardItemStyle>
      <BoardItemName>익명n</BoardItemName>
      <BoardItemText>동해물과 백두산이</BoardItemText>
    </BoardItemStyle>
  );
};

const BoardItemStyle = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  border: 1px solid #000;
  border-radius: 7px;
  margin-top: 10px;
  margin-bottom: 35px;
  font-weight: border;
`;

const BoardItemName = styled.p`
  height: 50px;
  margin: 0;
  padding: 15px 10px 10px 10px;
`;
const BoardItemText = styled.p`
  flex: 1;
  height: 50px;
  margin: 0;
  padding: 15px 10px 10px 10px;
  text-align: center;
`;

export default BoardItem;
