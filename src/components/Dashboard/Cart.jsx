import CartProduct from "./CartProduct";

const Cart = ({ productData }) => {
  return (
    <section className="py-10">
      <div className="w-5/6 mx-auto flex items-center justify-between">
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

      <div>
        {productData.map((product) => (
          <CartProduct
            key={product.product_id}
            product={productData}
          ></CartProduct>
        ))}
      </div>
    </section>
  );
};
export default Cart;
