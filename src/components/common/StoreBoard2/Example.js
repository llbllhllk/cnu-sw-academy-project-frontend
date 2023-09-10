import StoreBoardItem from "components/StoreBoard/StoreBoardItem"
import styled from "styled-components"

const Example = () => {
  return (
  <>
    <Styledh1>마인네하우스</Styledh1>
    <StoreBoardItem width = '400px' height='200px'></StoreBoardItem>
    <Styledh2>Review</Styledh2>
  </>
  )
}


const Styledh1 = styled.h1`
  position : relative;
  top: -20px
`

const Styledh2 = styled.h2`
  position : relative;
  top: -10px
`

export default Example;