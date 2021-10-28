import React, {useState} from 'react';
import {Image, Text} from 'react-native';
import star1 from '../Imgs/star_corner.png';
import star2 from '../Imgs/star_filled.png';
const RatingDisplay5 = ({Rating}) => {

  const [Rating5, setRating5] = useState([1, 2, 3, 4, 5]);
  return (
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
                source={star2}
                style={{ width: 20, height: 20, resizeMode: "cover" }}
              ></Image>
     
    </>
  );
};

export default RatingDisplay5;
