import { Outlet, useLoaderData } from "react-router-dom";
import Categories from "../../Main Section/Categories";

const Home = () => {
  const categoryNames = useLoaderData();

  return (
    <main className="w-5/6 mx-auto mb-20 space-y-16">
      <div className="mb-40">
        <div className="pt-10 pb-96 space-y-10 rounded-b-3xl bg-[#9538e2] text-center flex flex-col items-center">
          <h1 className="w-2/3 text-5xl font-bold text-white">
            Upgrade Your Tech Accessorize with Gadget Heaven Accessories
          </h1>
          <p className="text-base font-normal text-white">
            Explore the latest gadgets that will take your experience to the
            next level. From smart devices to the coolest accessories, we have
            it all!
          </p>
          <button className="btn rounded-full px-10 text-lg bg-white font-bold text-[#9538e2] hover:bg-white hover:border-white">
            Shop Now
          </button>
        </div>
        <div className="h-72 relative">
          <div className="w-2/3 h-[42rem] p-8 bg-white/30 rounded-3xl border-4 border-white backdrop-blur-lg absolute -top-80  inset-x-0 mx-auto box-border">
            <img src="../../../public/banner.jpg" className="w-full h-full object-cover rounded-3xl" />
          </div>
        </div>
      </div>

      <section>
        <h2 className="my-16 font-bold text-3xl text-[#0b0b0b] text-center">
          Explore Cutting-Edge Gadgets
        </h2>
        <div className="flex justify-around">
          <Categories categories={categoryNames}></Categories>
          <Outlet></Outlet>
        </div>
      </section>
    </main>
  );
};

export default Home;
