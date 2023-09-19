import React, { useState } from 'react';
import styled from 'styled-components';
import FilterScroll from "components/filter/FilterScroll";
import StoreList from "components/StoreBoard/StoreList";

const food = ["한식", "양식", "일식", "중식", "분식", "패스트푸드", "기타", "", ""];
const department = ["인문대학", "사회과학대학", "자연과학대학", "자연대", "경상대학", "공과대학", "농업생명과학대학", "약학대학", "의과대학"];
const place = ["궁동", "죽동", "봉명동", "어은동", "장대동", "", "", "",];
const jehyu = ["선택함", "선택안함", "", "", "", "", "", "",];

function FilterSelect() {
  const [selectedFood, setSelectedFood] = useState(null);
  const [selectedDepartment, setSelectedDepartment] = useState(null);
  const [selectedPlace, setSelectedPlace] = useState(null);
  const [selectedJehyu, setSelectedJehyu] = useState(null);

  console.log(selectedFood)
  console.log(selectedDepartment)
  console.log(selectedPlace)
  console.log(selectedJehyu)

  return (
    <div>
      <TableContainer>
        <StyledTable>
          <thead>
            <tr>
              <th>음식 선택</th>
              <th>학과 선택</th>
              <th>지역 선택</th>
              <th>제휴 선택</th>
            </tr>
          </thead>

          <tbody>
            {food.map((foodItem, index) => (
              (<tr key={index}>
                <td
                  onClick={foodItem ? () => setSelectedFood(foodItem) : null}
                  style={{ backgroundColor: selectedFood === foodItem ? '#ff9704' : null }}
                >
                  {foodItem}
                </td>
                <td
                  onClick={department[index] ? () => setSelectedDepartment(department[index]) : null}
                  style={{ backgroundColor: selectedDepartment === department[index] ? '#ff9704' : null }}
                >
                  {department[index]}
                </td>
                <td
                  onClick={place[index] ? () => setSelectedPlace(place[index]) : null}
                  style={{ backgroundColor: selectedPlace === place[index] ? '#ff9704' : null }}
                >
                  {place[index]}
                </td>
                <td
                  onClick={jehyu[index] ? () => setSelectedJehyu(jehyu[index]) : null}
                  style={{ backgroundColor: selectedJehyu === jehyu[index] ? '#ff9704' : null }}
                >
                  {jehyu[index]}
                </td>
              </tr>)
            ))}
          </tbody>
        </StyledTable>
      </TableContainer>

      <StoreListContainer>
        <StoreList width='400px' height='630px'>
          <FilterScroll food={selectedFood} department={selectedDepartment} place={selectedPlace} jehyu={selectedJehyu} />
        </StoreList>
      </StoreListContainer>
    </div>
  );
}

const StyledTable = styled.table`
  width: 800px;
  height: 500px;
  border: 1px solid #d9d9d9;
  border-radius: 7px;
  box-shadow:
    0 14px 28px rgba(0, 0, 0, 0.25),
    0 10px 10px rgba(0, 0, 0, 0.22);

  th {
    border: 1px solid #d9d9d9;
    padding: 10px;
    text-align: center;
    border-radius: 7px;
    font-size: 18px;
  }

  th:hover {
    background-color: transparent;
  }

  td {
    border-radius: 7px;
    border: 1px solid #d9d9d9;
    padding: 10px;
    text-align: center;
    transition: background-color .2s;

    &:not(:empty):hover {
      background-color: #ff9704;
    }
  }
`;

const TableContainer = styled.div`
  position: fixed;
  left: 100px;
  top: 200px;
  z-index: 1;
`;

const StoreListContainer = styled.div`
  position: fixed;
  left: 970px;
  top: 100px;
  z-index: 1;
`;

export default FilterSelect;
