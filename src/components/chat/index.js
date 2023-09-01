import Button from 'components/common/Button';
import Card from 'components/common/Card';
import { useCallback, useEffect, useRef, useState } from 'react';
import styled from 'styled-components';

const Chat = () => {
  const textareaRef = useRef();
  const [msg, setMsg] = useState('');
  const [name, setName] = useState('');
  const [chatt, setChatt] = useState([]);
  const [chkLog, setChkLog] = useState(false);
  const [socketData, setSocketData] = useState();

  const ws = useRef(null); //webSocket을 담는 변수,
  //컴포넌트가 변경될 때 객체가 유지되어야하므로 'ref'로 저장

  const msgBox = chatt.map((item, idx) => (
    <div key={idx} className={item.name === name ? 'me' : 'other'}>
      <span>
        <b>{item.name}</b>
      </span>{' '}
      <span>{item.msg}</span>
    </div>
  ));

  useEffect(() => {
    if (socketData !== undefined) {
      const tempData = chatt.concat(socketData);
      setChatt(tempData);
    }
  }, [socketData]);

  const webSocketLogin = useCallback(() => {
    ws.current = new WebSocket('ws://43.201.204.106:8080/socket/chatt');

    ws.current.onmessage = message => {
      const dataSet = JSON.parse(message.data);
      console.log(dataSet);
      setName(dataSet.name);
      setSocketData(dataSet);
    };
  });

  const send = useCallback(() => {
    if (!chkLog) {
      webSocketLogin();
      setChkLog(true);
    }
    if (msg !== '') {
      const token = localStorage.getItem('token');
      const data = {
        token: JSON.parse(token),
        msg,
      }; //전송 데이터(JSON)

      const temp = JSON.stringify(data);

      if (ws.current.readyState === 0) {
        ws.current.onopen = () => {
          ws.current.send(temp);
          textareaRef.current.focus();
        };
      } else {
        ws.current.send(temp);
      }
    } else {
      alert('메세지를 입력하세요.');
      document.getElementById('msg').focus();
      return;
    }
    setMsg('');
  });

  return (
    <Card title='실시간 채팅'>
      <div id='chat-wrap'>
        <div id='chatt'>
          <ChatContainer id='talk'>
            <div className='talk-shadow'></div>
            {msgBox}
          </ChatContainer>
          <Form id='sendZone'>
            <TextArea
              ref={textareaRef}
              id='msg'
              value={msg}
              onChange={e => setMsg(e.target.value)}
              onKeyDown={e => {
                if (e.key === 'Enter') {
                  e.preventDefault();
                  send();
                }
              }}
            ></TextArea>
            <Button onClick={send} type='submit' value='전송' id='btnSend' height='33px'>
              전송
            </Button>
          </Form>
        </div>
      </div>
    </Card>
  );
};

const ChatContainer = styled.div`
  height: 300px;
  overflow: scroll;
`;

const Form = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0 18px;
  position: absolute;
  width: 100%;
  left: 0;
  bottom: 24px;
  display: flex;

  & input:first-of-type {
    width: 100px;
    margin-right: 12px;
  }
`;

const TextArea = styled.textarea`
  display: block;
  border: 1px solid #d9d9d9;
  border-radius: 14px;
  height: 100px;
  margin-bottom: 10px;
  outline: none;
`;

export default Chat;
