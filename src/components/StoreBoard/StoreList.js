// 6-1, 6-2 스토어 리스트
import Card from "components/common/Card";

const StoreList = ({children, width, height})=>{
  return (
    <Card width={width} height={height}>
      {children}
    </Card>
  )
}

export default StoreList;