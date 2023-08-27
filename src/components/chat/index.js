import Button from 'components/common/Button';
import Card from 'components/common/Card';
import Input from 'components/common/Input';
import styled from 'styled-components';

const Chat = () => {
  return (
    <Card title='실시간 채팅'>
      <ChatContainer></ChatContainer>
      <Form>
        <Input type='text' placeholder='메시지를 입력하세요.' />
        <Button type='submit' width='100'>
          전송
        </Button>
      </Form>
    </Card>
  );
};

const ChatContainer = styled.div`
  max-height: 342px;
  overflow-y: scroll;
`;

const Form = styled.form`
  padding: 0 18px;
  position: absolute;
  width: 100%;
  left: 0;
  bottom: 24px;
  display: flex;

  & input {
    margin-right: 12px;
  }
`;

export default Chat;
