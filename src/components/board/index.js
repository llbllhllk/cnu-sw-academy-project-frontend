import BoardItem from './BoardItem';
import Button from 'components/common/Button';
import Card from 'components/common/Card';

const Board = ({ title, board, buttonLinks, hideWriteButton, ...props }) => {
  return (
    <Card title={title} {...props}>
      <a href={buttonLinks} style={{ position: 'absolute', top: '35px', right: '20px' }}>더보기</a>
      {board.map(item => {
        return <div key={item.postId} onClick={() => { window.location.href = `http://223.130.131.136:8080/boards/${item.postId}`}}>
          <BoardItem  title={item.title}/>
          </div>
      })}
      {!hideWriteButton && (
        <div style={{ display: 'flex', justifyContent: 'flex-end', alignItems: 'center' }}>
          <Button onClick={() => { window.location.href = 'http://223.130.131.136:8080/boards/post'}} width={'70px'} height={'35px'}>
            글쓰기
          </Button>
        </div>
      )}
    </Card>
  );
};

export default Board;