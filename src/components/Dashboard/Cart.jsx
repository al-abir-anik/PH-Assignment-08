const Cart = ({ cartList, handleRemoveFromCart }) => {
  return (
    <section className="w-5/6 mx-auto py-10">
      <div className="flex items-center justify-between">
        <h3 className="font-bold text-2xl text-[#0b0b0b]">Cart</h3>
        <div className="flex items-center gap-5">
          <p className="font-bold text-2xl text-[#0b0b0b]">Total Cost: 1414</p>
          <button className="btn btn-outline px-6 font-semibold text-base rounded-full text-[#9538e2] border-[#9538e2] hover:bg-[#9538e2] hover:border-[#9538e2]">
            Sort by Price
          </button>
          <button className="btn px-6 font-semibold text-base rounded-full text-white bg-[#9538e2] hover:border-white hover:bg-white hover:text-[#9538e2]">
            Purchase
          </button>
        </div>
      </div>

      {/* Dynamic Cart Products */}
      <div className="my-10 space-y-8">
        {cartList.map((product) => (
          <div
            key={product.product_id}
            className="h-44 p-8 flex justify-between bg-white rounded-2xl"
          >
            <div className="flex gap-10">
              <img src={product.product_image} className="rounded-xl" />
              <div className="space-y-3">
                <h5 className="font-semibold text-xl text-[#09080f]">
                  {product.product_title}
                </h5>
                <p className="font-normal text-base text-[#09080f]/60">
                  {product.description}
                </p>
                <p className="font-semibold text-lg text-[#09080f]/80">
                  Price: ${product.price}
                </p>
              </div>
            </div>
            <button
              onClick={() => handleRemoveFromCart(product.product_id)}
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
export default Cart;
