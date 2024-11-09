import Categories from "./Categories";
import Products from "./Products";


const MainSection = () => {
    return (
        <main className="w-5/6 mx-auto my-20 space-y-16">
            <h2 className="font-bold text-4xl text-[#0b0b0b] text-center">Explore Cutting-Edge Gadgets</h2>
            <section className="flex justify-around">
                <Categories></Categories>
                <Products></Products>
            </section>
        </main>
    );
};

export default MainSection;