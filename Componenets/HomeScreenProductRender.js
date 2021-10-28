//Renders and manages home screen products
import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  FlatList,
  Button,
  Pressable,
  ScrollView,
  Header,
  TouchableOpacity,
  Image,
} from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { AddToCart } from "../actions/CartActions";
import img1 from "../Imgs/img1.jpg";
import img2 from "../Imgs/img2.jpg";
import user from "../Imgs/user.jpg";
import left from "../Imgs/left.jpg";
import shoe from "../Imgs/shoe.png";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import AnimatedS3 from "../screens/AnimationLoadings3";
import {listProducts} from "../actions/productactions";
const HomeScreenProds=({navigation,filter,type,selling})=>{
    const dispatch = useDispatch();
    const cart = useSelector((state) => state.cart);
    const { cartItems } = cart;
    const productlist=useSelector((state)=>state.productlist);
    const {loading:loading4,products}=productlist;
    const [active,setactive]=useState("");
  const [qty,setqty]=useState(1);
  const IncrementQtyhandler = (
      name,
      img,
      key,
      price,
      listTab,
      types,
      colors,
      qty
    ) => {
      dispatch(AddToCart(name, img, key, price, listTab, types, colors, qty));
      if(key!==active){
        setqty(1);
      }
    
    };
    const DecrementQtyhandler = (
      name,
      img,
      key,
      price,
      listTab,
      types,
      colors,
      qty
    ) => {
      if (qty >= 2) {
        dispatch(
          AddToCart(name, img, key, price, listTab, types, colors, qty - 1)
        );
    
      }
      if(key!==active){
        setqty(1);
      }
   };

  //  const [products, setproducts] = useState([
  //   {
  //     name: "Maggie",
  //     key: Math.random().toString(),
  //     img: img1,
  //     brand:"Nestle",
  //     rating:1.1,
  //     price: 20,
  //     listTab: [
  //       {
  //         status: "Description",
  //         des: "Masala (spice) any of the many spice mixes used in South Asiancuisine Masala chai, a flavored tea beverage Masala incense, Indianincense using a spice mix Masala dosa, an Indian dish",
  //       },
  //       {
  //         status: "Product Info",
  //         des: "Masala (spice) any of the many spice mixes used in South Asiancuisine Masala chai, a flavored tea beverage Masala incense, Indianincense using a spice mix Masala dosa, an Indian dish, a flavored tea beverage Masala incense, Indianincense using a spice mix Masala dosa, an Indian dish",
  //       },
  //       {
  //         status: "Product policy",
  //         des: "Masala (spice) any of the many spice mixes used in South Asiancuisine Masala chai, a flavored tea beverage Masala incense, Indianincense using a spice mix Masala dosa, an Indian dish, a flavored tea beverage Masala incense, Indianincense using a spice mix Masala dosa, an Indian dish",
  //       },
  //     ],
  //     types: ["70g", "140g", `210g`, "280g", "350g", "420g"],
  //     colors: [],
  //     category: "food",
  //   },
  //   {
  //     name: "T-shirt tot",
  //     key: Math.random().toString(),
  //     img: left,
  //     brand:"Nike",
  //     rating:4.5,
  //     price: 200,
  //     listTab: [
  //       {
  //         status: "Description",
  //         des: "Masala (spice) any of the many spice mixes used in South Asiancuisine Masala chai, a flavored tea beverage Masala incense, Indianincense using a spice mix Masala dosa, an Indian dish",
  //       },
  //       {
  //         status: "Product Info",
  //         des: "Masala (spice) any of the many spice mixes used in South Asiancuisine Masala chai, a flavored tea beverage Masala incense, Indianincense using a spice mix Masala dosa, an Indian dish, a flavored tea beverage Masala incense, Indianincense using a spice mix Masala dosa, an Indian dish",
  //       },
  //       {
  //         status: "Product policy",
  //         des: "Masala (spice) any of the many spice mixes used in South Asiancuisine Masala chai, a flavored tea beverage Masala incense, Indianincense using a spice mix Masala dosa, an Indian dish, a flavored tea beverage Masala incense, Indianincense using a spice mix Masala dosa, an Indian dish",
  //       },
  //     ],
  //     category: "cloths",
  //   },
  //   {
  //     name: "bot vot Masala",
  //     key: Math.random().toString(),
  //     img: img2,
  //     brand:"Patanjali",
  //     rating:5,
  //     price: 50,
  //     listTab: [
  //       {
  //         status: "Description",
  //         des: "Masala (spice) any of the many spice mixes used in South Asiancuisine Masala chai, a flavored tea beverage Masala incense, Indianincense using a spice mix Masala dosa, an Indian dish",
  //       },
  //       {
  //         status: "Product Info",
  //         des: "Masala (spice) any of the many spice mixes used in South Asiancuisine Masala chai, a flavored tea beverage Masala incense, Indianincense using a spice mix Masala dosa, an Indian dish, a flavored tea beverage Masala incense, Indianincense using a spice mix Masala dosa, an Indian dish",
  //       },
  //       {
  //         status: "Product policy",
  //         des: "Masala (spice) any of the many spice mixes used in South Asiancuisine Masala chai, a flavored tea beverage Masala incense, Indianincense using a spice mix Masala dosa, an Indian dish, a flavored tea beverage Masala incense, Indianincense using a spice mix Masala dosa, an Indian dish",
  //       },
  //     ],

  //     types: [],
  //     colors: [],
  //     category: "food",
  //   },
  //   {
  //     name: "Maggie top",
  //     key: Math.random().toString(),
  //     brand:"nestle",
  //     rating:3.8,
  //     img: img1,
  //     price: 2000,
  //     listTab: [
  //       {
  //         status: "Description",
  //         des: "Masala (spice) any of the many spice mixes used in South Asiancuisine Masala chai, a flavored tea beverage Masala incense, Indianincense using a spice mix Masala dosa, an Indian dish",
  //       },
  //       {
  //         status: "Product Info",
  //         des: "Masala (spice) any of the many spice mixes used in South Asiancuisine Masala chai, a flavored tea beverage Masala incense, Indianincense using a spice mix Masala dosa, an Indian dish, a flavored tea beverage Masala incense, Indianincense using a spice mix Masala dosa, an Indian dish",
  //       },
  //       {
  //         status: "Product policy",
  //         des: "Masala (spice) any of the many spice mixes used in South Asiancuisine Masala chai, a flavored tea beverage Masala incense, Indianincense using a spice mix Masala dosa, an Indian dish, a flavored tea beverage Masala incense, Indianincense using a spice mix Masala dosa, an Indian dish",
  //       },
  //     ],
  //     types: ["70g", "140g", `210g`, "280g", "350g", "420g"],
  //     colors: [],
  //     category: "food",
  //   },
    
  //   {
  //     name: "Masala garp",
  //     key: Math.random().toString(),
  //     img: img2,
  //     brand:"bb",
  //     rating:2.5,
  //     price: 500,
  //     listTab: [
  //       {
  //         status: "Description",
  //         des: "Masala (spice) any of the many spice mixes used in South Asiancuisine Masala chai, a flavored tea beverage Masala incense, Indianincense using a spice mix Masala dosa, an Indian dish",
  //       },
  //       {
  //         status: "Product Info",
  //         des: "Masala (spice) any of the many spice mixes used in South Asiancuisine Masala chai, a flavored tea beverage Masala incense, Indianincense using a spice mix Masala dosa, an Indian dish, a flavored tea beverage Masala incense, Indianincense using a spice mix Masala dosa, an Indian dish",
  //       },
  //       {
  //         status: "Product policy",
  //         des: "Masala (spice) any of the many spice mixes used in South Asiancuisine Masala chai, a flavored tea beverage Masala incense, Indianincense using a spice mix Masala dosa, an Indian dish, a flavored tea beverage Masala incense, Indianincense using a spice mix Masala dosa, an Indian dish",
  //       },
  //     ],

  //     types: [],
  //     colors: [],
  //     category: "food",
  //   },
  //   {
  //     name: "Maggie sharp",
  //     key: Math.random().toString(),
  //     img: img1,
  //     brand:"shey",
  //     rating:5,
  //     price: 200,
  //     listTab: [
  //       {
  //         status: "Description",
  //         des: "Masala (spice) any of the many spice mixes used in South Asiancuisine Masala chai, a flavored tea beverage Masala incense, Indianincense using a spice mix Masala dosa, an Indian dish",
  //       },
  //       {
  //         status: "Product Info",
  //         des: "Masala (spice) any of the many spice mixes used in South Asiancuisine Masala chai, a flavored tea beverage Masala incense, Indianincense using a spice mix Masala dosa, an Indian dish, a flavored tea beverage Masala incense, Indianincense using a spice mix Masala dosa, an Indian dish",
  //       },
  //       {
  //         status: "Product policy",
  //         des: "Masala (spice) any of the many spice mixes used in South Asiancuisine Masala chai, a flavored tea beverage Masala incense, Indianincense using a spice mix Masala dosa, an Indian dish, a flavored tea beverage Masala incense, Indianincense using a spice mix Masala dosa, an Indian dish",
  //       },
  //     ],
  //     types: ["70g", "140g", `210g`, "280g", "350g", "420g"],
  //     colors: [],
  //     category: "food",
  //   },
  //   {
  //     name: "T-shirt rr",
  //     key: Math.random().toString(),
  //     img: left,
  //     brand:"rey",
  //     rating:0,
  //     price: 5000,
  //     listTab: [
  //       {
  //         status: "Description",
  //         des: "Masala (spice) any of the many spice mixes used in South Asiancuisine Masala chai, a flavored tea beverage Masala incense, Indianincense using a spice mix Masala dosa, an Indian dish",
  //       },
  //       {
  //         status: "Product Info",
  //         des: "Masala (spice) any of the many spice mixes used in South Asiancuisine Masala chai, a flavored tea beverage Masala incense, Indianincense using a spice mix Masala dosa, an Indian dish, a flavored tea beverage Masala incense, Indianincense using a spice mix Masala dosa, an Indian dish",
  //       },
  //       {
  //         status: "Product policy",
  //         des: "Masala (spice) any of the many spice mixes used in South Asiancuisine Masala chai, a flavored tea beverage Masala incense, Indianincense using a spice mix Masala dosa, an Indian dish, a flavored tea beverage Masala incense, Indianincense using a spice mix Masala dosa, an Indian dish",
  //       },
  //     ],
  //     types: ["S", "M", "L", "XL", "XXL"],
  //     colors: ["yellow", "pink", "orange", `red`, "blue", "green"],
  //     category: "cloths",
  //   },
  //   {
  //     name: "Shoes pp",
  //     key: Math.random().toString(),
  //     img: shoe,
  //     brand:"yey",
  //     rating:1,
  //     price: 3500,
  //     listTab: [
  //       {
  //         status: "Description",
  //         des: "Masala (spice) any of the many spice mixes used in South Asiancuisine Masala chai, a flavored tea beverage Masala incense, Indianincense using a spice mix Masala dosa, an Indian dish",
  //       },
  //       {
  //         status: "Product Info",
  //         des: "Masala (spice) any of the many spice mixes used in South Asiancuisine Masala chai, a flavored tea beverage Masala incense, Indianincense using a spice mix Masala dosa, an Indian dish, a flavored tea beverage Masala incense, Indianincense using a spice mix Masala dosa, an Indian dish",
  //       },
  //       {
  //         status: "Product policy",
  //         des: "Masala (spice) any of the many spice mixes used in South Asiancuisine Masala chai, a flavored tea beverage Masala incense, Indianincense using a spice mix Masala dosa, an Indian dish, a flavored tea beverage Masala incense, Indianincense using a spice mix Masala dosa, an Indian dish",
  //       },
  //     ],
  //     types: ["32", "36", `37`, "38", "41", "43", "47", "50", "58", "60"],
  //     colors: [`red`, "blue", "green", "yellow", "pink", "orange"],
  //     category: "footwear",
  //   },
  //   {
  //     name: "Maggie gg",
  //     key: Math.random().toString(),
  //     img: img1,

  //     brand:"britania",
  //     rating:2,
  //     price: 250,
  //     listTab: [
  //       {
  //         status: "Description",
  //         des: "Masala (spice) any of the many spice mixes used in South Asiancuisine Masala chai, a flavored tea beverage Masala incense, Indianincense using a spice mix Masala dosa, an Indian dish",
  //       },
  //       {
  //         status: "Product Info",
  //         des: "Masala (spice) any of the many spice mixes used in South Asiancuisine Masala chai, a flavored tea beverage Masala incense, Indianincense using a spice mix Masala dosa, an Indian dish, a flavored tea beverage Masala incense, Indianincense using a spice mix Masala dosa, an Indian dish",
  //       },
  //       {
  //         status: "Product policy",
  //         des: "Masala (spice) any of the many spice mixes used in South Asiancuisine Masala chai, a flavored tea beverage Masala incense, Indianincense using a spice mix Masala dosa, an Indian dish, a flavored tea beverage Masala incense, Indianincense using a spice mix Masala dosa, an Indian dish",
  //       },
  //     ],
  //     types: ["70g", "140g", `210g`, "280g", "350g", "420g"],
  //     colors: [],
  //     category: "food",
  //   },
  //   {
  //     name: "T-shirt ree",
  //     key: Math.random().toString(),
  //     img: left,
  //     brand:"fasttrack",
  //     rating:4,
  //     price: 420,
  //     listTab: [
  //       {
  //         status: "Description",
  //         des: "Masala (spice) any of the many spice mixes used in South Asiancuisine Masala chai, a flavored tea beverage Masala incense, Indianincense using a spice mix Masala dosa, an Indian dish",
  //       },
  //       {
  //         status: "Product Info",
  //         des: "Masala (spice) any of the many spice mixes used in South Asiancuisine Masala chai, a flavored tea beverage Masala incense, Indianincense using a spice mix Masala dosa, an Indian dish, a flavored tea beverage Masala incense, Indianincense using a spice mix Masala dosa, an Indian dish",
  //       },
  //       {
  //         status: "Product policy",
  //         des: "Masala (spice) any of the many spice mixes used in South Asiancuisine Masala chai, a flavored tea beverage Masala incense, Indianincense using a spice mix Masala dosa, an Indian dish, a flavored tea beverage Masala incense, Indianincense using a spice mix Masala dosa, an Indian dish",
  //       },
  //     ],
  //     types: ["S", "M", "L", "XL", "XXL"],
  //     colors: ["yellow", "pink", "orange", `red`, "blue", "green"],
  //     category: "cloths",
  //   },
  //   {
  //     name: "Shoes dfs",
  //     key: Math.random().toString(),
  //     img: shoe,
  //     brand:"fasttrack",
  //     rating:1,
  //     price: 3850,
  //     listTab: [
  //       {
  //         status: "Description",
  //         des: "Masala (spice) any of the many spice mixes used in South Asiancuisine Masala chai, a flavored tea beverage Masala incense, Indianincense using a spice mix Masala dosa, an Indian dish",
  //       },
  //       {
  //         status: "Product Info",
  //         des: "Masala (spice) any of the many spice mixes used in South Asiancuisine Masala chai, a flavored tea beverage Masala incense, Indianincense using a spice mix Masala dosa, an Indian dish, a flavored tea beverage Masala incense, Indianincense using a spice mix Masala dosa, an Indian dish",
  //       },
  //       {
  //         status: "Product policy",
  //         des: "Masala (spice) any of the many spice mixes used in South Asiancuisine Masala chai, a flavored tea beverage Masala incense, Indianincense using a spice mix Masala dosa, an Indian dish, a flavored tea beverage Masala incense, Indianincense using a spice mix Masala dosa, an Indian dish",
  //       },
  //     ],
  //     types: ["32", "36", `37`, "38", "41", "43", "47", "50", "58", "60"],
  //     colors: [`red`, "blue", "green", "yellow", "pink", "orange"],
  //     category: "footwear",
  //   },
  //   {
  //     name: "T-shirt",
  //     key: Math.random().toString(),
  //     img: left,
  //     brand:"fasttrack",
  //     rating:5,
  //     price: 2000,
  //     listTab: [
  //       {
  //         status: "Description",
  //         des: "Masala (spice) any of the many spice mixes used in South Asiancuisine Masala chai, a flavored tea beverage Masala incense, Indianincense using a spice mix Masala dosa, an Indian dish",
  //       },
  //       {
  //         status: "Product Info",
  //         des: "Masala (spice) any of the many spice mixes used in South Asiancuisine Masala chai, a flavored tea beverage Masala incense, Indianincense using a spice mix Masala dosa, an Indian dish, a flavored tea beverage Masala incense, Indianincense using a spice mix Masala dosa, an Indian dish",
  //       },
  //       {
  //         status: "Product policy",
  //         des: "Masala (spice) any of the many spice mixes used in South Asiancuisine Masala chai, a flavored tea beverage Masala incense, Indianincense using a spice mix Masala dosa, an Indian dish, a flavored tea beverage Masala incense, Indianincense using a spice mix Masala dosa, an Indian dish",
  //       },
  //     ],
  //     types: ["S", "M", "L", "XL", "XXL"],
  //     colors: ["yellow", "pink", "orange", `red`, "blue", "green"],
  //     category: "cloths",
  //   },
  //   {
  //     name: "Shoes",
  //     key: Math.random().toString(),
  //     img: shoe,
  //     brand:"Top",
  //     rating:2,
  //     price: 3650,
  //     listTab: [
  //       {
  //         status: "Description",
  //         des: "Masala (spice) any of the many spice mixes used in South Asiancuisine Masala chai, a flavored tea beverage Masala incense, Indianincense using a spice mix Masala dosa, an Indian dish",
  //       },
  //       {
  //         status: "Product Info",
  //         des: "Masala (spice) any of the many spice mixes used in South Asiancuisine Masala chai, a flavored tea beverage Masala incense, Indianincense using a spice mix Masala dosa, an Indian dish, a flavored tea beverage Masala incense, Indianincense using a spice mix Masala dosa, an Indian dish",
  //       },
  //       {
  //         status: "Product policy",
  //         des: "Masala (spice) any of the many spice mixes used in South Asiancuisine Masala chai, a flavored tea beverage Masala incense, Indianincense using a spice mix Masala dosa, an Indian dish, a flavored tea beverage Masala incense, Indianincense using a spice mix Masala dosa, an Indian dish",
  //       },
  //     ],
  //     types: ["32", "36", `37`, "38", "41", "43", "47", "50", "58", "60"],
  //     colors: [`red`, "blue", "green", "yellow", "pink", "orange"],
  //     category: "footwear",
  //   },
  // ]);
//    const [products, setproducts] = useState([
//     {
//       name: "T-shirt pt",
//       key: Math.random().toString(),
//       rating:1.1,
//       img: left,
//       brand:"Nike",
//       category: "cloths",
//       price: 200,
//       listTab: [
//         {
//           status: "Description",
//           des: "Masala (spice) any of the many spice mixes used in South Asiancuisine Masala chai, a flavored tea beverage Masala incense, Indianincense using a spice mix Masala dosa, an Indian dish",
//         },
//         {
//           status: "Product Info",
//           des: "Masala (spice) any of the many spice mixes used in South Asiancuisine Masala chai, a flavored tea beverage Masala incense, Indianincense using a spice mix Masala dosa, an Indian dish, a flavored tea beverage Masala incense, Indianincense using a spice mix Masala dosa, an Indian dish",
//         },
//         {
//           status: "Product policy",
//           des: "Masala (spice) any of the many spice mixes used in South Asiancuisine Masala chai, a flavored tea beverage Masala incense, Indianincense using a spice mix Masala dosa, an Indian dish, a flavored tea beverage Masala incense, Indianincense using a spice mix Masala dosa, an Indian dish",
//         },
//       ],
//       types: ["S", "M", "L", "XL", "XXL"],
//       colors: ["yellow", "pink", "orange", `red`, "blue", "green"],
//     },
//     {
//       name: "Maggie top",
//       key: Math.random().toString(),
//       rating:4.5,
//       brand:"Patanjali",
// category: "food",
//       img: img1,
//       price: 20,
//       listTab: [
//         {
//           status: "Description",
//           des: "Masala (spice) any of the many spice mixes used in South Asiancuisine Masala chai, a flavored tea beverage Masala incense, Indianincense using a spice mix Masala dosa, an Indian dish",
//         },
//         {
//           status: "Product Info",
//           des: "Masala (spice) any of the many spice mixes used in South Asiancuisine Masala chai, a flavored tea beverage Masala incense, Indianincense using a spice mix Masala dosa, an Indian dish, a flavored tea beverage Masala incense, Indianincense using a spice mix Masala dosa, an Indian dish",
//         },
//         {
//           status: "Product policy",
//           des: "Masala (spice) any of the many spice mixes used in South Asiancuisine Masala chai, a flavored tea beverage Masala incense, Indianincense using a spice mix Masala dosa, an Indian dish, a flavored tea beverage Masala incense, Indianincense using a spice mix Masala dosa, an Indian dish",
//         },
//       ],
//       types: ["70g", "140g", `210g`, "280g", "350g", "420g"],
//       colors: [],
//     },
    
//     {
//       name: "Masala garp",
//       key: Math.random().toString(),
//       rating:5,
//       img: img2,
//       price: 50,
//       listTab: [
//         {
//           status: "Description",
//           des: "Masala (spice) any of the many spice mixes used in South Asiancuisine Masala chai, a flavored tea beverage Masala incense, Indianincense using a spice mix Masala dosa, an Indian dish",
//         },
//         {
//           status: "Product Info",
//           des: "Masala (spice) any of the many spice mixes used in South Asiancuisine Masala chai, a flavored tea beverage Masala incense, Indianincense using a spice mix Masala dosa, an Indian dish, a flavored tea beverage Masala incense, Indianincense using a spice mix Masala dosa, an Indian dish",
//         },
//         {
//           status: "Product policy",
//           des: "Masala (spice) any of the many spice mixes used in South Asiancuisine Masala chai, a flavored tea beverage Masala incense, Indianincense using a spice mix Masala dosa, an Indian dish, a flavored tea beverage Masala incense, Indianincense using a spice mix Masala dosa, an Indian dish",
//         },
//       ],

//       types: [],
//       colors: [],
//     },
//     {
//       name: "Maggie sharp",
//       key: Math.random().toString(),
//       rating:3.8,
//       img: img1,
//       price: 80,
//       listTab: [
//         {
//           status: "Description",
//           des: "Masala (spice) any of the many spice mixes used in South Asiancuisine Masala chai, a flavored tea beverage Masala incense, Indianincense using a spice mix Masala dosa, an Indian dish",
//         },
//         {
//           status: "Product Info",
//           des: "Masala (spice) any of the many spice mixes used in South Asiancuisine Masala chai, a flavored tea beverage Masala incense, Indianincense using a spice mix Masala dosa, an Indian dish, a flavored tea beverage Masala incense, Indianincense using a spice mix Masala dosa, an Indian dish",
//         },
//         {
//           status: "Product policy",
//           des: "Masala (spice) any of the many spice mixes used in South Asiancuisine Masala chai, a flavored tea beverage Masala incense, Indianincense using a spice mix Masala dosa, an Indian dish, a flavored tea beverage Masala incense, Indianincense using a spice mix Masala dosa, an Indian dish",
//         },
//       ],
//       types: ["70g", "140g", `210g`, "280g", "350g", "420g"],
//       colors: [],
//     },
//     {
//       name: "T-shirt rr",
//       key: Math.random().toString(),
//       rating:2.5,
//       img: left,
//       price: 2000,
//       listTab: [
//         {
//           status: "Description",
//           des: "Masala (spice) any of the many spice mixes used in South Asiancuisine Masala chai, a flavored tea beverage Masala incense, Indianincense using a spice mix Masala dosa, an Indian dish",
//         },
//         {
//           status: "Product Info",
//           des: "Masala (spice) any of the many spice mixes used in South Asiancuisine Masala chai, a flavored tea beverage Masala incense, Indianincense using a spice mix Masala dosa, an Indian dish, a flavored tea beverage Masala incense, Indianincense using a spice mix Masala dosa, an Indian dish",
//         },
//         {
//           status: "Product policy",
//           des: "Masala (spice) any of the many spice mixes used in South Asiancuisine Masala chai, a flavored tea beverage Masala incense, Indianincense using a spice mix Masala dosa, an Indian dish, a flavored tea beverage Masala incense, Indianincense using a spice mix Masala dosa, an Indian dish",
//         },
//       ],
//       types: ["S", "M", "L", "XL", "XXL"],
//       colors: ["yellow", "pink", "orange", `red`, "blue", "green"],
//     },
//     {
//       name: "Shoes pp",
//       key: Math.random().toString(),
//       rating:5,
//       img: shoe,
//       price: 3500,
//       listTab: [
//         {
//           status: "Description",
//           des: "Masala (spice) any of the many spice mixes used in South Asiancuisine Masala chai, a flavored tea beverage Masala incense, Indianincense using a spice mix Masala dosa, an Indian dish",
//         },
//         {
//           status: "Product Info",
//           des: "Masala (spice) any of the many spice mixes used in South Asiancuisine Masala chai, a flavored tea beverage Masala incense, Indianincense using a spice mix Masala dosa, an Indian dish, a flavored tea beverage Masala incense, Indianincense using a spice mix Masala dosa, an Indian dish",
//         },
//         {
//           status: "Product policy",
//           des: "Masala (spice) any of the many spice mixes used in South Asiancuisine Masala chai, a flavored tea beverage Masala incense, Indianincense using a spice mix Masala dosa, an Indian dish, a flavored tea beverage Masala incense, Indianincense using a spice mix Masala dosa, an Indian dish",
//         },
//       ],
//       types: ["32", "36", `37`, "38", "41", "43", "47", "50", "58", "60"],
//       colors: [`red`, "blue", "green", "yellow", "pink", "orange"],
//     },
//     {
//       name: "Maggie gg",
//       key: Math.random().toString(),
//       rating:0,
//       img: img1,
//       price: 280,
//       listTab: [
//         {
//           status: "Description",
//           des: "Masala (spice) any of the many spice mixes used in South Asiancuisine Masala chai, a flavored tea beverage Masala incense, Indianincense using a spice mix Masala dosa, an Indian dish",
//         },
//         {
//           status: "Product Info",
//           des: "Masala (spice) any of the many spice mixes used in South Asiancuisine Masala chai, a flavored tea beverage Masala incense, Indianincense using a spice mix Masala dosa, an Indian dish, a flavored tea beverage Masala incense, Indianincense using a spice mix Masala dosa, an Indian dish",
//         },
//         {
//           status: "Product policy",
//           des: "Masala (spice) any of the many spice mixes used in South Asiancuisine Masala chai, a flavored tea beverage Masala incense, Indianincense using a spice mix Masala dosa, an Indian dish, a flavored tea beverage Masala incense, Indianincense using a spice mix Masala dosa, an Indian dish",
//         },
//       ],
//       types: ["70g", "140g", `210g`, "280g", "350g", "420g"],
//       colors: [],
//     },
//     {
//       name: "T-shirt ree",
//       key: Math.random().toString(),
//       rating:1,
//       img: left,
//       price: 800,
//       listTab: [
//         {
//           status: "Description",
//           des: "Masala (spice) any of the many spice mixes used in South Asiancuisine Masala chai, a flavored tea beverage Masala incense, Indianincense using a spice mix Masala dosa, an Indian dish",
//         },
//         {
//           status: "Product Info",
//           des: "Masala (spice) any of the many spice mixes used in South Asiancuisine Masala chai, a flavored tea beverage Masala incense, Indianincense using a spice mix Masala dosa, an Indian dish, a flavored tea beverage Masala incense, Indianincense using a spice mix Masala dosa, an Indian dish",
//         },
//         {
//           status: "Product policy",
//           des: "Masala (spice) any of the many spice mixes used in South Asiancuisine Masala chai, a flavored tea beverage Masala incense, Indianincense using a spice mix Masala dosa, an Indian dish, a flavored tea beverage Masala incense, Indianincense using a spice mix Masala dosa, an Indian dish",
//         },
//       ],
//       types: ["S", "M", "L", "XL", "XXL"],
//       colors: ["yellow", "pink", "orange", `red`, "blue", "green"],
//     },
//     {
//       name: "Shoes dfs",
//       key: Math.random().toString(),
//       rating:2,
//       img: shoe,
//       price: 950,
//       listTab: [
//         {
//           status: "Description",
//           des: "Masala (spice) any of the many spice mixes used in South Asiancuisine Masala chai, a flavored tea beverage Masala incense, Indianincense using a spice mix Masala dosa, an Indian dish",
//         },
//         {
//           status: "Product Info",
//           des: "Masala (spice) any of the many spice mixes used in South Asiancuisine Masala chai, a flavored tea beverage Masala incense, Indianincense using a spice mix Masala dosa, an Indian dish, a flavored tea beverage Masala incense, Indianincense using a spice mix Masala dosa, an Indian dish",
//         },
//         {
//           status: "Product policy",
//           des: "Masala (spice) any of the many spice mixes used in South Asiancuisine Masala chai, a flavored tea beverage Masala incense, Indianincense using a spice mix Masala dosa, an Indian dish, a flavored tea beverage Masala incense, Indianincense using a spice mix Masala dosa, an Indian dish",
//         },
//       ],
//       types: ["32", "36", `37`, "38", "41", "43", "47", "50", "58", "60"],
//       colors: [`red`, "blue", "green", "yellow", "pink", "orange"],
//     },
//   ]);

  const [FilterResult,setFilterResult]=useState([]);
  const [loading,setloading]=useState(false);
useEffect(()=>{
// console.log(products.sort((a,b)=>{
//   return a.price-b.price;
// }))
dispatch(listProducts());

if(products){
  const FilterHandler=()=>{
    console.log(`catregory ${type}`)
    setloading(true)
    if(filter==="HTL"){
      setFilterResult(products.sort((a,b)=>{
        return b.price-a.price;
      }))
    }
    else if(filter==="LTH"){
      setFilterResult(products.sort((a,b)=>{
        return a.price-b.price;
      }))
    }
    else if(filter==="CR"){
      setFilterResult(products.sort((a,b)=>{
        return b.rating-a.rating;
      }))
    }
    else if(filter==="category"){
      setFilterResult(products.filter((e)=>{
        return e.category===type;
      }))
    }
    else if(filter===""){
  setFilterResult(products)
    }  
    setTimeout(() => {
      setloading(false)
    }, 1000);
   
  }
  console.log(`filter is ${filter}`)
  FilterHandler();

}
else{
  setloading(true)
}



},[filter])
    return(
      loading?<AnimatedS3></AnimatedS3>:
     
        
FilterResult.map((item, i) => (
           
           <View
             style={{
               flexDirection: "row",
               justifyContent: "space-between",
               margin: 20,
               marginTop: 8,
             }}
             key={i + 1234}
           >
           
             <Pressable
               onPress={() => navigation.navigate("product", item)}
             >
               <Image
                 source={item.img}
                 style={{ width: 66, height: 66, borderRadius: 13 }}
               ></Image>
             </Pressable>
             <Pressable
               onPress={() => navigation.navigate("product", item)}
               style={{ flexDirection: "column" }}
             >
               <Text
                 style={{ fontWeight: "400", lineHeight: 20.45, fontSize: 16 ,color:'black'}}
               >
                 {item.name}
               </Text>
               <Text
                 style={{ fontWeight: "400", lineHeight: 20.45, fontSize: 14,color:'black' }}
               >
                 Brand:{item.brand}
               </Text>
               <Text
                 style={{ fontWeight: "400", lineHeight: 20.45, fontSize: 14,color:'black' }}
               >
                 category:{item.category}
               </Text>
             </Pressable>
             <View style={{ flexDirection: "column" }}>
               <Text
                 style={{ fontSize: 16, lineHeight: 20.45, fontWeight: "700",textAlign:'center',color:'black' }}
               >
                 {item.price} INR
               </Text>
               {
                 selling!=="no"?<View style={{ marginTop: 10 ,flexDirection:'row'}}>
                 <TouchableOpacity
          
                   style={{
                     backgroundColor: "#DFF3F9",
                     height: 32,
                     width: 32,
                     marginRight:5,
                     borderRadius:8,
                   }}
                   onPress={()=>{
                     if(item.colors||item.types){
                        alert("Please View Item to select some details")
                     }
                     else{
                      setqty(qty+1);
                      setactive(item.key);
                      IncrementQtyhandler(  item.name,
                      item.img,
                      item.key,
                      item.price,
                      item.listTab,
                      item.types,
                      item.colors,
                      qty+1)
                     
                    }
                     }
                 
                   }
                 >
                   <MaterialCommunityIcons
                     name="plus"
                     size={30}
                     style={{
                 

                       color: "#45BFE4",
                     }}
                   />
                 </TouchableOpacity>
                 <Text
                   style={{
                     fontSize: 16,
                     fontWeight: "400",
                     lineHeight: 20.45,
                   
                   }}
                 >
                   {active===item.key?qty:1}
                 </Text>
                 <TouchableOpacity
          
                   style={{
                     backgroundColor: "#DFF3F9",
                     height: 32,
                     width: 32,
                     marginLeft:10,
                     borderRadius:8
                   }}
                   onPress={()=>{
                    if(item.colors||item.types){
                      alert("Please View Item to select some details")
                   }
                   else{
                    setqty(qty>=1?qty-1:0);
                    setactive(item.key);
                    DecrementQtyhandler(  item.name,
                    item.img,
                    item.key,
                    item.price,
                    item.listTab,
                    item.types,
                    item.colors,
                    qty-1)
                   
                  }
                   }
                
                   }
                   
                 >
                   <MaterialCommunityIcons
                     name="minus"
                     size={30}
                     style={{
                 

                       color: "#45BFE4",
                     }}
                   />
                 </TouchableOpacity>
              
                
               </View>:null
               }
               
             </View>
           </View>
         ))
       
    )
}

export default HomeScreenProds;