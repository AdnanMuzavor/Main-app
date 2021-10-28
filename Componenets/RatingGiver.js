import React, { useState } from "react";
import { Image, Text } from "react-native";
import star1 from "../Imgs/star_corner.png";
import star2 from "../Imgs/star_filled.png";
const RatingDisplay = ({ Rating }) => {
  const [Rating1, setRating1] = useState([1, 2, 3, 4]);
  const [Rating2, setRating2] = useState([1, 2, 3]);
  const [Rating3, setRating3] = useState([1, 2]);
  const [Rating5, setRating5] = useState([1, 2, 3, 4,5]);
  return (
    <>
{/* Rating===0 */}

{/* {Rating === 0? (
        <>
       {
Rating5.map((e,i)=>{
  <>
  <Text>{i}</Text>
  <Image
  source={star1}
  key={i}
  style={{ width: 20, height: 20, resizeMode: "cover" }}
></Image>
</>
})
       }
         
        </>
      ) : null} */}
      {/* Rating===1 */}
      {Rating >= 1 && Rating < 2 ? (
        <>
          <Image
            source={star2}
            style={{ width: 20, height: 20, resizeMode: "cover" }}
          ></Image>
          {Rating1.map((e, i) => (
            <Image
              source={star1}
              key={i}
              style={{ width: 20, height: 20, resizeMode: "cover" }}
            ></Image>
          ))}
        </>
      ) : null}

      {/* Rating===2 */}

      {Rating >= 2 && Rating < 3 ? (
        <>
          <Image
            source={star2}
            style={{ width: 20, height: 20, resizeMode: "cover" }}
          ></Image>
          <Image
            source={star2}
            style={{ width: 20, height: 20, resizeMode: "cover" }}
          ></Image>
          {Rating2.map((e, i) => (
            <Image
              source={star1}
              key={i}
              style={{ width: 20, height: 20, resizeMode: "cover" }}
            ></Image>
          ))}
        </>
      ) : null}

       {/* Rating===3 */}
       {Rating >= 3 && Rating < 4 ? (
        <>
          <Image
            source={star2}
            style={{ width: 20, height: 20, resizeMode: "cover" }}
          ></Image>
          <Image
            source={star2}
            style={{ width: 20, height: 20, resizeMode: "cover" }}
          ></Image>
            <Image
            source={star2}
            style={{ width: 20, height: 20, resizeMode: "cover" }}
          ></Image>
          {Rating3.map((e, i) => (
            <Image
              source={star1}
              key={i}
              style={{ width: 20, height: 20, resizeMode: "cover" }}
            ></Image>
          ))}
        </>
      ) : null}
          {Rating >= 4 && Rating < 5 ? (
        <>
          <Image
            source={star2}
            style={{ width: 20, height: 20, resizeMode: "cover" }}
          ></Image>
          <Image
            source={star2}
            style={{ width: 20, height: 20, resizeMode: "cover" }}
          ></Image>
            <Image
            source={star2}
            style={{ width: 20, height: 20, resizeMode: "cover" }}
          ></Image>
           <Image
            source={star2}
            style={{ width: 20, height: 20, resizeMode: "cover" }}
          ></Image>
          
            <Image
              source={star1}
            
              style={{ width: 20, height: 20, resizeMode: "cover" }}
            ></Image>
  
        </>
      ) : null}
{/* {
  Rating>=5 && Rating<10 ?
  Rating5.map((e,i)=>{
    <Image
    source={star2}
    key={i}
    style={{ width: 20, height: 20, resizeMode: "cover" }}
  ></Image>
  }):null
} */}
    </>
  );
};

export default RatingDisplay;

{
  /* <Image
    source={star2}
    style={{ width: 20, height: 20, resizeMode: "cover" }}
  ></Image>
  <Image
    source={star2}
    style={{ width: 20, height: 20, resizeMode: "cover" }}
  ></Image>
  <Image
    source={star2}
    style={{ width: 20, height: 20, resizeMode: "cover" }}
  ></Image>
  <Image
    source={star1}
    style={{ width: 20, height: 20, resizeMode: "cover" }}
  ></Image>
  <Image
    source={star1}
    style={{ width: 20, height: 20, resizeMode: "cover" }}
  ></Image> */
}
