// 6-1, 6-2 큰 게시판
import Card from "components/common/Card";

const StoreMainBoard = ({children}) => {
  return (
    <Card width='700px' height='600px'>
      {children}
    </Card>
  )
}

export default StoreMainBoard;