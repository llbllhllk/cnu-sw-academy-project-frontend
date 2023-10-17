import MainBoard from "components/mainboard/MainBoard";
// import axios from "axios";
// import { useState, useEffect } from "react";


const dummy = [
  {"postId":1001,"title":"test Title of PostId 1001","createdAt":[2023,10,10,0,0],"postLikeCount":50,"commentCount":1},
  {"postId":1002,"title":"test Title of PostId 1002","createdAt":[2023,10,11,0,0],"postLikeCount":51,"commentCount":2},
  {"postId":1003,"title":"test Title of PostId 1003","createdAt":[2023,10,12,0,0],"postLikeCount":52,"commentCount":3},
  {"postId":1004,"title":"test Title of PostId 1004","createdAt":[2023,10,13,0,0],"postLikeCount":53,"commentCount":4},
  {"postId":1005,"title":"test Title of PostId 1005","createdAt":[2023,10,14,0,0],"postLikeCount":54,"commentCount":5},
  {"postId":1006,"title":"test Title of PostId 1006","createdAt":[2023,10,15,0,0],"postLikeCount":55,"commentCount":6},
  {"postId":1007,"title":"test Title of PostId 1007","createdAt":[2023,10,16,0,0],"postLikeCount":56,"commentCount":7},
  {"postId":1008,"title":"test Title of PostId 1008","createdAt":[2023,10,17,0,0],"postLikeCount":57,"commentCount":8},
  {"postId":1009,"title":"test Title of PostId 1009","createdAt":[2023,10,18,0,0],"postLikeCount":58,"commentCount":9},
  {"postId":1010,"title":"test Title of PostId 1010","createdAt":[2023,10,19,0,0],"postLikeCount":59,"commentCount":10},
  ]

  console.log(dummy);
const Popular = () => {
//   const [popularData, setPopularData] = useState([]);
//   useEffect(()=>{
//     const fecthPopularData = async () => {
//       try{
//         const response = await axios.get('http://223.130.131.136:8080/freeBoard')
//         setPopularData(response);
//       }catch(error){
//         console.log(error)
//       }
//       console.log(popularData)
//     }
//     fecthPopularData();
//   },[])
  
  
  return (
  <>
  <MainBoard title={'자유게시판'} dummy={dummy}/>
  </>
  )
}

export default Popular;