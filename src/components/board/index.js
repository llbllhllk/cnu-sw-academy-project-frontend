
import BoardItem from './BoardItem'
import Card from 'components/common/Card'
import Button from 'components/common/Button'

const Board = () => {
  return (
    <Card title="자유게시판">
        <button style={{position:'absolute',top:'35px', right:'20px'}}>더보기</button>
        <BoardItem />
        <BoardItem />
        <BoardItem />
        <BoardItem /> 
      {/* 최대 4개까지 넣어유 */}

      <div style={{ display: 'flex', justifyContent: 'flex-end', alignItems: 'center' }}>
        <Button width={'60px'} height={'50px'}>글쓰기</Button>
      </div>
    </Card>
  )
}


export default Board