import Restaurants from "./Restaurants";
import { useEffect, useState } from "react";
import { API_URL } from "../constants";
const Body = () => {
  const [resData, setResData] = useState([]);
  useEffect(() => {
    //API Call
    fetchResData();
  }, []);
  const fetchResData = async () => {
    let data = await fetch(`${API_URL}/listRestaurants`);
    const jsonData = await data.json();
    console.log(jsonData);

    setResData(
      jsonData?.data?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants
    );
    console.log(
      ">>>",
      jsonData?.data?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants
    );
  };
  return (
    <>
      <Restaurants resData={resData} />
    </>
  );
};
export default Body;
