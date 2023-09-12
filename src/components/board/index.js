import BoardItem from './BoardItem';
import Button from 'components/common/Button';
import Card from 'components/common/Card';

const Board = ({ title, board, ...props }) => {
  return (
    <Card title={title} {...props}>
      <a href='http://43.201.204.106:8080/freeBoard' style={{ position: 'absolute', top: '35px', right: '20px' }}>더보기</a>
      {board.map(item => {
        return <BoardItem key={item.postId} title={item.title} />;
      })}
      <div style={{ display: 'flex', justifyContent: 'flex-end', alignItems: 'center' }}>
        <Button width={'60px'} height={'33px'}>
          글쓰기
        </Button>
      </div>
    </Card>
  );
};

export default Board;
