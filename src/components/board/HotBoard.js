
import BoardItem from './BoardItem'
import Card from 'components/common/Card'
import Button from 'components/common/Button'

const HotBoard = () => {
  return (
    <Card title="Hot 게시판">
        {/* <button>더보기</button> */}
        <BoardItem />
        <BoardItem />
        <BoardItem />
        <BoardItem /> 
      {/* 최대 4개 */}

      <div style={{ display: 'flex', justifyContent: 'flex-end', alignItems: 'center' }}>
        <Button width={'60px'} height={'50px'}>글쓰기</Button>
      </div>
    </Card>
  )
}


export default HotBoard