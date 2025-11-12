import { Link } from "react-router-dom";
import { CDN_URL } from "../constants";

const Restaurants = ({ resData }) => {
  return (
    <div className="flex">
      {resData &&
        resData.map((restaurant) => (
          <Link to={`/restmenu/${restaurant.info.id}`}>
            <div
              key={restaurant.info.id}
              className="border border-cyan-400 w-60  rounded-md m-4 p-4"
            >
              <img
                src={`${CDN_URL}${restaurant.info.cloudinaryImageId}`}
                alt="logo"
                className=""
              ></img>
              <h1 className="font-bold">{restaurant.info.name}</h1>

              <h2 className="font-semibold">
                {" "}
                Delivery Time: {restaurant.info.sla.slaString}
              </h2>
              <h3 className="">{restaurant.info.cuisines.join(", ")}</h3>
            </div>
          </Link>
        ))}
    </div>
  );
};
export default Restaurants;
