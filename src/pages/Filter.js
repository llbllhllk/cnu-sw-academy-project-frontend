import FilterSelect from "components/filter/FilterSelect";
import { Link } from "react-router-dom";
import Button from "components/common/Button";


const Filter = () => {
  return (
    <>
    <Link to="/">
      <Button width='50px' height='30px'>닫기</Button>
    </Link>
    <FilterSelect/>
    </>
  )
}

export default Filter;