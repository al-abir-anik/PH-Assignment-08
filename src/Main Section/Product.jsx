import { Link } from "react-router-dom";

const Product = ({ productData }) => {
  return (
    <div className="w-96 p-7 space-y-3 bg-white rounded-2xl">
      <img src={productData.product_image} className="w-full h-60 rounded-xl" />
      <h3 className="font-semibold text-xl text-[#09080f]">
        {productData.product_title}
      </h3>
      <p className="font-medium text-lg text-[#09080f]/60">
        Price: {productData.price}$
      </p>

      <Link to={`/product/${productData.product_id}`}>
        <button className="btn btn-outline mt-3 rounded-full font-semibold text-base text-[#9538e2] hover:bg-[#9538e2] hover:text-white hover:border-[#9538e2]">
          View Details
        </button>
      </Link>
    </div>
  );
};

export default Product;
