// 6-1, 6-2 스토어 리스트
import Card from "components/common/Card";

const StoreList = ({children})=>{
  return (
    <Card width="300px" height="630px">
      {children}
    </Card>
  )
}

export default StoreList;