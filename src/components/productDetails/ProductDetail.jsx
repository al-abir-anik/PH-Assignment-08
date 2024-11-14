import { useLoaderData, useParams } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
import { faHeart } from "@fortawesome/free-regular-svg-icons";
import {
  addToStoredCartList,
  addToStoredWishList,
} from "../../utility/utility";

const ProductDetail = () => {
  const { product_id } = useParams();
  const data = useLoaderData();
  const product = data.find((p) => p.product_id == product_id);

  const handleAddToCart = (id) => {
    addToStoredCartList(id);
  };
  const handleAddWishList = (id) => {
    addToStoredWishList(id);
  };

  return (
    <section>
      <div className="w-full h-96 py-8 bg-[#9538e2] text-center space-y-3">
        <h2 className="font-bold text-3xl text-white">Product Details</h2>
        <p className="font-normal text-base text-white">
          Explore the latest gadgets that will take your experience to the next
          level. From smart devices to the coolest accessories, we have it all!
        </p>
      </div>
      <div className="w-full h-96 bg-[#f6f6f6] relative">
        <div className="w-3/4 h-fit mx-auto p-10 rounded-3xl bg-white flex gap-10 absolute inset-0 m-auto -top-72">
          <div className="w-2/5">
            <img src={product.product_image} className=" rounded-2xl" />
          </div>
          <div className="space-y-3">
            <h2 className="font-semibold text-2xl text-[#09080f]">
              {product.product_title}
            </h2>
            <p className="font-semibold text-xl text-[#09080f]/80">
              Price:$ {product.price}
            </p>
            <div
              className={`w-fit px-3 py-2 font-medium text-sm rounded-full border ${
                product.availability
                  ? "border-[#309c08] bg-[#309c08]/10 text-[#309c08]"
                  : "border-[#9C1E08] bg-[#9C1E08]/10 text-[#9C1E08]"
              }`}
            >
              {product.availability ? "In Stock" : "Out of Stock"}
            </div>
            <p className="font-normal text-base text-[#09080f]/60">
              {product.description}
            </p>

            <h5 className="font-bold text-xl text-[#09080f]/80">
              Specification:
            </h5>
            <ol className="list-decimal ml-5">
              {product.specification.map((spec) => (
                <li className="font-normal text-base text-[#09080f]/60">
                  {spec}
                </li>
              ))}
            </ol>
            <h5 className="font-bold text-xl text-[#09080f]/80">Rating</h5>
            <div className="rating block">
              <input
                type="radio"
                name="rating-2"
                className="mask mask-star-2 bg-orange-400"
              />
              <input
                type="radio"
                name="rating-2"
                className="mask mask-star-2 bg-orange-400"
                defaultChecked
              />
              <input
                type="radio"
                name="rating-2"
                className="mask mask-star-2 bg-orange-400"
              />
              <input
                type="radio"
                name="rating-2"
                className="mask mask-star-2 bg-orange-400"
              />
              <input
                type="radio"
                name="rating-2"
                className="mask mask-star-2 bg-orange-400"
              />
            </div>
            <div className="space-x-3">
              <button
                onClick={() => handleAddToCart(product_id)}
                className="btn bg-[#9538e2] rounded-full text-white font-semibold text-lg px-10"
              >
                Add To Cart
                <FontAwesomeIcon icon={faCartShopping} />
              </button>
              <button
                onClick={() => handleAddWishList(product_id)}
                className="w-12 h-12 border rounded-full border-[#09080f]/10 text-[#09080f]/50"
              >
                <FontAwesomeIcon icon={faHeart} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductDetail;
