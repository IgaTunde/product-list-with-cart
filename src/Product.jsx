import { useContext } from "react";
import { BasketContext } from "./store/Basket";
import data from "./data.json";
import PropTypes from "prop-types";
import AddToCartButton from "./AddToCart";
import { AddToCartButtonActive } from "./AddToCart";

function Product({ data }) {
  const { getTotalItemsInTheCart } = useContext(BasketContext);
  const { image, name, category, price } = data;

  return (
    <div className="flex flex-col ">
      <div
        className={`bg-[url('${image.mobile}')] bg-cover  w-full rounded-xl h-[300px] lg:h-60 sm:bg-[url('${image.tablet}')] lg:bg-[url('${image.desktop}')]`}
        style={{ backgroundImage: `url("${image.mobile}")` }}
      ></div>

      {getTotalItemsInTheCart() !== 0 ? (
        <AddToCartButtonActive data={data} />
      ) : (
        <AddToCartButton data={data} />
      )}

      <div className="mt-5">
        <p className="text-sm font-semibold opacity-40 text-rose-950">
          {category}
        </p>
        <p className="py-1 font-bold text-rose-950">{name}</p>
        <p className="font-bold text-redHsl">${price.toFixed(2)}</p>
      </div>
    </div>
  );
}

function ProductList() {
  return (
    <div className="grid w-full gap-8 md:gap-4 grid-rows-9 lg:grid-cols-3 lg:grid-rows-3 ">
      {data.map((item) => {
        return <Product key={item.id} data={item} />;
      })}
    </div>
  );
}

export default ProductList;

Product.propTypes = {
  image: PropTypes.object,
  price: PropTypes.number,
  category: PropTypes.string,
  name: PropTypes.string,
};
