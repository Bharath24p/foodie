import { useEffect, useState } from "react";
import { API_URL } from "../constants";
import { useParams } from "react-router-dom";
import ItemsList from "./ItemsList";
import { useCallback } from "react";

const RestMenu = () => {
  const [restMenu, setRestMenu] = useState(null);
  const { resId } = useParams();
  const fetchResItemData = useCallback(async () => {
    let data = await fetch(`${API_URL}/listRestaurantMenu/${resId}`);
    const jsonData = await data.json();
    console.log("menu", jsonData);
    setRestMenu(
      jsonData?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards
    );
  }, [resId]);
  useEffect(() => {
    //API Call
    fetchResItemData();
  }, [fetchResItemData]);
  return (
    <div className="border w-6/12 justify-center items-center mx-auto">
      {restMenu &&
        restMenu.map((item) => (
          <div className=" m-4">
            <h1 className="font-bold">{item?.card?.card?.title}</h1>
            <ItemsList items={item?.card?.card?.itemCards} />
          </div>
        ))}
    </div>
  );
};

export default RestMenu;
