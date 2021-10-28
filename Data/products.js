import img1 from "../Imgs/img1.jpg";
import img2 from "../Imgs/img2.jpg";
import user from "../Imgs/user.jpg";
import left from "../Imgs/left.jpg";
import shoe from "../Imgs/shoe.png";



const products = [
  {
    name: "Maggie",
    key: Math.random().toString(),
    description:"it's description",
    img: img1,
    brand:"Nestle",
    rating:1.1,
    price: 20,
    listTab: [
      {
        status: "Description",
        des: "Masala (spice) any of the many spice mixes used in South Asiancuisine Masala chai, a flavored tea beverage Masala incense, Indianincense using a spice mix Masala dosa, an Indian dish",
      },
      {
        status: "Product Info",
        des: "Masala (spice) any of the many spice mixes used in South Asiancuisine Masala chai, a flavored tea beverage Masala incense, Indianincense using a spice mix Masala dosa, an Indian dish, a flavored tea beverage Masala incense, Indianincense using a spice mix Masala dosa, an Indian dish",
      },
      {
        status: "Product policy",
        des: "Masala (spice) any of the many spice mixes used in South Asiancuisine Masala chai, a flavored tea beverage Masala incense, Indianincense using a spice mix Masala dosa, an Indian dish, a flavored tea beverage Masala incense, Indianincense using a spice mix Masala dosa, an Indian dish",
      },
    ],
    // types: ["70g", "140g", `210g`, "280g", "350g", "420g"],
    types:"70g&&80g&&90g",
    colors: [],
    category: "food",
  },
  {
    name: "T-shirt tot",
    key: Math.random().toString(),
    description:"it's description",
    img: left,
    brand:"Nike",
    rating:4.5,
    price: 200,
    listTab: [
      {
        status: "Description",
        des: "Masala (spice) any of the many spice mixes used in South Asiancuisine Masala chai, a flavored tea beverage Masala incense, Indianincense using a spice mix Masala dosa, an Indian dish",
      },
      {
        status: "Product Info",
        des: "Masala (spice) any of the many spice mixes used in South Asiancuisine Masala chai, a flavored tea beverage Masala incense, Indianincense using a spice mix Masala dosa, an Indian dish, a flavored tea beverage Masala incense, Indianincense using a spice mix Masala dosa, an Indian dish",
      },
      {
        status: "Product policy",
        des: "Masala (spice) any of the many spice mixes used in South Asiancuisine Masala chai, a flavored tea beverage Masala incense, Indianincense using a spice mix Masala dosa, an Indian dish, a flavored tea beverage Masala incense, Indianincense using a spice mix Masala dosa, an Indian dish",
      },
    ],
    category: "cloths",
  },
  {
    name: "bot vot Masala",
    key: Math.random().toString(),
    description:"it's description",
    img: img2,
    brand:"Patanjali",
    rating:5,
    price: 50,
    listTab: [
      {
        status: "Description",
        des: "Masala (spice) any of the many spice mixes used in South Asiancuisine Masala chai, a flavored tea beverage Masala incense, Indianincense using a spice mix Masala dosa, an Indian dish",
      },
      {
        status: "Product Info",
        des: "Masala (spice) any of the many spice mixes used in South Asiancuisine Masala chai, a flavored tea beverage Masala incense, Indianincense using a spice mix Masala dosa, an Indian dish, a flavored tea beverage Masala incense, Indianincense using a spice mix Masala dosa, an Indian dish",
      },
      {
        status: "Product policy",
        des: "Masala (spice) any of the many spice mixes used in South Asiancuisine Masala chai, a flavored tea beverage Masala incense, Indianincense using a spice mix Masala dosa, an Indian dish, a flavored tea beverage Masala incense, Indianincense using a spice mix Masala dosa, an Indian dish",
      },
    ],

    types: [],
    colors: [],
    category: "food",
  },
  {
    name: "Maggie top",
    key: Math.random().toString(),
    description:"it's description",
    brand:"nestle",
    rating:3.8,
    img: img1,
    price: 2000,
    listTab: [
      {
        status: "Description",
        des: "Masala (spice) any of the many spice mixes used in South Asiancuisine Masala chai, a flavored tea beverage Masala incense, Indianincense using a spice mix Masala dosa, an Indian dish",
      },
      {
        status: "Product Info",
        des: "Masala (spice) any of the many spice mixes used in South Asiancuisine Masala chai, a flavored tea beverage Masala incense, Indianincense using a spice mix Masala dosa, an Indian dish, a flavored tea beverage Masala incense, Indianincense using a spice mix Masala dosa, an Indian dish",
      },
      {
        status: "Product policy",
        des: "Masala (spice) any of the many spice mixes used in South Asiancuisine Masala chai, a flavored tea beverage Masala incense, Indianincense using a spice mix Masala dosa, an Indian dish, a flavored tea beverage Masala incense, Indianincense using a spice mix Masala dosa, an Indian dish",
      },
    ],
    types: ["70g", "140g", `210g`, "280g", "350g", "420g"],
    colors: [],
    category: "food",
  },
  
  {
    name: "Masala garp",
    key: Math.random().toString(),
    description:"it's description",
    img: img2,
    brand:"bb",
    rating:2.5,
    price: 500,
    listTab: [
      {
        status: "Description",
        des: "Masala (spice) any of the many spice mixes used in South Asiancuisine Masala chai, a flavored tea beverage Masala incense, Indianincense using a spice mix Masala dosa, an Indian dish",
      },
      {
        status: "Product Info",
        des: "Masala (spice) any of the many spice mixes used in South Asiancuisine Masala chai, a flavored tea beverage Masala incense, Indianincense using a spice mix Masala dosa, an Indian dish, a flavored tea beverage Masala incense, Indianincense using a spice mix Masala dosa, an Indian dish",
      },
      {
        status: "Product policy",
        des: "Masala (spice) any of the many spice mixes used in South Asiancuisine Masala chai, a flavored tea beverage Masala incense, Indianincense using a spice mix Masala dosa, an Indian dish, a flavored tea beverage Masala incense, Indianincense using a spice mix Masala dosa, an Indian dish",
      },
    ],

    types: [],
    colors: [],
    category: "food",
  },
  {
    name: "Maggie sharp",
    key: Math.random().toString(),
    description:"it's description",
    img: img1,
    brand:"shey",
    rating:5,
    price: 200,
    listTab: [
      {
        status: "Description",
        des: "Masala (spice) any of the many spice mixes used in South Asiancuisine Masala chai, a flavored tea beverage Masala incense, Indianincense using a spice mix Masala dosa, an Indian dish",
      },
      {
        status: "Product Info",
        des: "Masala (spice) any of the many spice mixes used in South Asiancuisine Masala chai, a flavored tea beverage Masala incense, Indianincense using a spice mix Masala dosa, an Indian dish, a flavored tea beverage Masala incense, Indianincense using a spice mix Masala dosa, an Indian dish",
      },
      {
        status: "Product policy",
        des: "Masala (spice) any of the many spice mixes used in South Asiancuisine Masala chai, a flavored tea beverage Masala incense, Indianincense using a spice mix Masala dosa, an Indian dish, a flavored tea beverage Masala incense, Indianincense using a spice mix Masala dosa, an Indian dish",
      },
    ],
    types: ["70g", "140g", `210g`, "280g", "350g", "420g"],
    colors: [],
    category: "food",
  },
  {
    name: "T-shirt rr",
    key: Math.random().toString(),
    description:"it's description",
    img: left,
    brand:"rey",
    rating:0,
    price: 5000,
    listTab: [
      {
        status: "Description",
        des: "Masala (spice) any of the many spice mixes used in South Asiancuisine Masala chai, a flavored tea beverage Masala incense, Indianincense using a spice mix Masala dosa, an Indian dish",
      },
      {
        status: "Product Info",
        des: "Masala (spice) any of the many spice mixes used in South Asiancuisine Masala chai, a flavored tea beverage Masala incense, Indianincense using a spice mix Masala dosa, an Indian dish, a flavored tea beverage Masala incense, Indianincense using a spice mix Masala dosa, an Indian dish",
      },
      {
        status: "Product policy",
        des: "Masala (spice) any of the many spice mixes used in South Asiancuisine Masala chai, a flavored tea beverage Masala incense, Indianincense using a spice mix Masala dosa, an Indian dish, a flavored tea beverage Masala incense, Indianincense using a spice mix Masala dosa, an Indian dish",
      },
    ],
    types: ["S", "M", "L", "XL", "XXL"],
   // colors: ["yellow", "pink", "orange", `red`, "blue", "green"],
    colors:"red&&green&&yellow",
    category: "cloths",
  },
  {
    name: "Shoes pp",
    key: Math.random().toString(),
    description:"it's description",
    img: shoe,
    brand:"yey",
    rating:1,
    price: 3500,
    listTab: [
      {
        status: "Description",
        des: "Masala (spice) any of the many spice mixes used in South Asiancuisine Masala chai, a flavored tea beverage Masala incense, Indianincense using a spice mix Masala dosa, an Indian dish",
      },
      {
        status: "Product Info",
        des: "Masala (spice) any of the many spice mixes used in South Asiancuisine Masala chai, a flavored tea beverage Masala incense, Indianincense using a spice mix Masala dosa, an Indian dish, a flavored tea beverage Masala incense, Indianincense using a spice mix Masala dosa, an Indian dish",
      },
      {
        status: "Product policy",
        des: "Masala (spice) any of the many spice mixes used in South Asiancuisine Masala chai, a flavored tea beverage Masala incense, Indianincense using a spice mix Masala dosa, an Indian dish, a flavored tea beverage Masala incense, Indianincense using a spice mix Masala dosa, an Indian dish",
      },
    ],
    types: ["32", "36", `37`, "38", "41", "43", "47", "50", "58", "60"],
    colors: [`red`, "blue", "green", "yellow", "pink", "orange"],
    category: "footwear",
  },
  {
    name: "Maggie gg",
    key: Math.random().toString(),
    description:"it's description",
    img: img1,

    brand:"britania",
    rating:2,
    price: 250,
    listTab: [
      {
        status: "Description",
        des: "Masala (spice) any of the many spice mixes used in South Asiancuisine Masala chai, a flavored tea beverage Masala incense, Indianincense using a spice mix Masala dosa, an Indian dish",
      },
      {
        status: "Product Info",
        des: "Masala (spice) any of the many spice mixes used in South Asiancuisine Masala chai, a flavored tea beverage Masala incense, Indianincense using a spice mix Masala dosa, an Indian dish, a flavored tea beverage Masala incense, Indianincense using a spice mix Masala dosa, an Indian dish",
      },
      {
        status: "Product policy",
        des: "Masala (spice) any of the many spice mixes used in South Asiancuisine Masala chai, a flavored tea beverage Masala incense, Indianincense using a spice mix Masala dosa, an Indian dish, a flavored tea beverage Masala incense, Indianincense using a spice mix Masala dosa, an Indian dish",
      },
    ],
    types: ["70g", "140g", `210g`, "280g", "350g", "420g"],
    colors: [],
    category: "food",
  },
  {
    name: "T-shirt ree",
    key: Math.random().toString(),
    description:"it's description",
    img: left,
    brand:"fasttrack",
    rating:4,
    price: 420,
    listTab: [
      {
        status: "Description",
        des: "Masala (spice) any of the many spice mixes used in South Asiancuisine Masala chai, a flavored tea beverage Masala incense, Indianincense using a spice mix Masala dosa, an Indian dish",
      },
      {
        status: "Product Info",
        des: "Masala (spice) any of the many spice mixes used in South Asiancuisine Masala chai, a flavored tea beverage Masala incense, Indianincense using a spice mix Masala dosa, an Indian dish, a flavored tea beverage Masala incense, Indianincense using a spice mix Masala dosa, an Indian dish",
      },
      {
        status: "Product policy",
        des: "Masala (spice) any of the many spice mixes used in South Asiancuisine Masala chai, a flavored tea beverage Masala incense, Indianincense using a spice mix Masala dosa, an Indian dish, a flavored tea beverage Masala incense, Indianincense using a spice mix Masala dosa, an Indian dish",
      },
    ],
    types: ["S", "M", "L", "XL", "XXL"],
    colors: ["yellow", "pink", "orange", `red`, "blue", "green"],
    category: "cloths",
  },
  {
    name: "Shoes dfs",
    key: Math.random().toString(),
    description:"it's description",
    img: shoe,
    brand:"fasttrack",
    rating:1,
    price: 3850,
    listTab: [
      {
        status: "Description",
        des: "Masala (spice) any of the many spice mixes used in South Asiancuisine Masala chai, a flavored tea beverage Masala incense, Indianincense using a spice mix Masala dosa, an Indian dish",
      },
      {
        status: "Product Info",
        des: "Masala (spice) any of the many spice mixes used in South Asiancuisine Masala chai, a flavored tea beverage Masala incense, Indianincense using a spice mix Masala dosa, an Indian dish, a flavored tea beverage Masala incense, Indianincense using a spice mix Masala dosa, an Indian dish",
      },
      {
        status: "Product policy",
        des: "Masala (spice) any of the many spice mixes used in South Asiancuisine Masala chai, a flavored tea beverage Masala incense, Indianincense using a spice mix Masala dosa, an Indian dish, a flavored tea beverage Masala incense, Indianincense using a spice mix Masala dosa, an Indian dish",
      },
    ],
    types: ["32", "36", `37`, "38", "41", "43", "47", "50", "58", "60"],
    colors: [`red`, "blue", "green", "yellow", "pink", "orange"],
    category: "footwear",
  },
  {
    name: "T-shirt",
    key: Math.random().toString(),
    description:"it's description",
    img: left,
    brand:"fasttrack",
    rating:5,
    price: 2000,
    listTab: [
      {
        status: "Description",
        des: "Masala (spice) any of the many spice mixes used in South Asiancuisine Masala chai, a flavored tea beverage Masala incense, Indianincense using a spice mix Masala dosa, an Indian dish",
      },
      {
        status: "Product Info",
        des: "Masala (spice) any of the many spice mixes used in South Asiancuisine Masala chai, a flavored tea beverage Masala incense, Indianincense using a spice mix Masala dosa, an Indian dish, a flavored tea beverage Masala incense, Indianincense using a spice mix Masala dosa, an Indian dish",
      },
      {
        status: "Product policy",
        des: "Masala (spice) any of the many spice mixes used in South Asiancuisine Masala chai, a flavored tea beverage Masala incense, Indianincense using a spice mix Masala dosa, an Indian dish, a flavored tea beverage Masala incense, Indianincense using a spice mix Masala dosa, an Indian dish",
      },
    ],
    types: ["S", "M", "L", "XL", "XXL"],
    colors: ["yellow", "pink", "orange", `red`, "blue", "green"],
    category: "cloths",
  },
  {
    name: "Shoes",
    key: Math.random().toString(),
    description:"it's description",
    img: shoe,
    brand:"Top",
    rating:2,
    price: 3650,
    listTab: [
      {
        status: "Description",
        des: "Masala (spice) any of the many spice mixes used in South Asiancuisine Masala chai, a flavored tea beverage Masala incense, Indianincense using a spice mix Masala dosa, an Indian dish",
      },
      {
        status: "Product Info",
        des: "Masala (spice) any of the many spice mixes used in South Asiancuisine Masala chai, a flavored tea beverage Masala incense, Indianincense using a spice mix Masala dosa, an Indian dish, a flavored tea beverage Masala incense, Indianincense using a spice mix Masala dosa, an Indian dish",
      },
      {
        status: "Product policy",
        des: "Masala (spice) any of the many spice mixes used in South Asiancuisine Masala chai, a flavored tea beverage Masala incense, Indianincense using a spice mix Masala dosa, an Indian dish, a flavored tea beverage Masala incense, Indianincense using a spice mix Masala dosa, an Indian dish",
      },
    ],
    types: ["32", "36", `37`, "38", "41", "43", "47", "50", "58", "60"],
    colors: [`red`, "blue", "green", "yellow", "pink", "orange"],
    category: "footwear",
  },
];
export default products;