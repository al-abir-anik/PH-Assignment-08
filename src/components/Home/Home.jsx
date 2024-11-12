import { Outlet, useLoaderData } from "react-router-dom";
import Categories from "../../Main Section/Categories";
import Products from "./../../Main Section/Products";

const Home = () => {
  const categoryNames = useLoaderData();

  return (
    <main className="w-5/6 mx-auto my-20 space-y-16">
      <h2 className="font-bold text-4xl text-[#0b0b0b] text-center">
        Explore Cutting-Edge Gadgets
      </h2>
      <section className="flex justify-around">
        <Categories categories={categoryNames}></Categories>
        <Outlet></Outlet>
        
      </section>
    </main>
  );
};

export default Home;
