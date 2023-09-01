import styled from 'styled-components';

const MsgBox = ({ item, name }) => {
  return (
    <MsgBoxLayout className={item.name === name ? 'me' : 'other'}>
      <Name>
        <b>{item.name}:</b>
      </Name>
      <span>{item.msg}</span>
    </MsgBoxLayout>
  );
};

export default MsgBox;

const MsgBoxLayout = styled.div`
  margin-bottom: 10px;

  &:last-of-type {
    margin-bottom: 0;
  }
`;

const Name = styled.strong`
  margin-right: 10px;
`;
