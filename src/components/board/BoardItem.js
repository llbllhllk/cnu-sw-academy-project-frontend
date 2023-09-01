import styled from 'styled-components';

const BoardItem = ({ title }) => {
  return (
    <BoardItemStyle>
      <BoardItemName>익명n</BoardItemName>
      <BoardItemText>{title}</BoardItemText>
    </BoardItemStyle>
  );
};

const BoardItemStyle = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  border: 1px solid #d9d9d9;
  border-radius: 7px;
  margin-top: 10px;
  margin-bottom: 35px;
  font-weight: border;
  cursor: pointer;
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
