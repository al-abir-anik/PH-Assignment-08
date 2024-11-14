import { addToStoredCartList } from "../../utility/utility";

const Wishlist = ({ wishList, handleRemoveFromWishlist }) => {

  const handleAddToCart = (id) => {
    addToStoredCartList(id);
  };

  return (
    <section className="w-5/6 mx-auto py-10">
      <h3 className="font-bold text-2xl text-[#0b0b0b]">Wishlist</h3>

      {/* Dynamic Cart Products */}
      <div className="my-10 space-y-8">
        {wishList.map((product) => (
          <div
            key={product.product_id}
            className="h-60 p-8 flex justify-between bg-white rounded-2xl"
          >
            <div className="flex gap-10">
              <img src={product.product_image} className="rounded-xl" />
              <div className="space-y-4">
                <h5 className="font-semibold text-xl text-[#09080f]">
                  {product.product_title}
                </h5>
                <p className="font-normal text-base text-[#09080f]/60">
                  {product.description}
                </p>
                <p className="font-semibold text-lg text-[#09080f]/80">
                  Price: ${product.price}
                </p>
                <button
                  onClick={() => handleAddToCart(product.product_id)}
                  className="btn bg-[#9538e2] rounded-full text-white font-semibold text-lg px-8"
                >
                  Add To Cart
                </button>
              </div>
            </div>
            <button
              onClick={() => handleRemoveFromWishlist(product.product_id)}
              className="btn btn-circle"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Wishlist;
