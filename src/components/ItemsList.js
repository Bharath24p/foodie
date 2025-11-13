import { CDN_URL } from "../constants";

const ItemsList = ({ items }) => {
  return (
    <div>
      {items &&
        items.map((item) => (
          <div
            key={item.id}
            className="p-4 border-b flex-row flex justify-between"
          >
            <div className="">
              <h2 className="font-semibold text-lg">
                {item?.card?.info?.name}
              </h2>

              <p className="text-gray-600">{item?.card?.info?.description}</p>
              <span className="text-green-600 font-bold">
                {item?.card?.info?.price / 100}
              </span>
            </div>
            <div className="w-1/6 justify-end">
              <img
                src={`${CDN_URL}${item?.card?.info?.imageId}`}
                alt={item?.card?.info?.name}
              />
            </div>
          </div>
        ))}
    </div>
  );
};

export default ItemsList;
