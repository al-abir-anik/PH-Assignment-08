import { useEffect, useState } from "react";

const Categories = () => {
  const [category, setCategory] = useState([]);
  useEffect(() => {
    fetch("./categoryName.json")
      .then((res) => res.json())
      .then((data) => setCategory(data));
  }, []);


  const [selectedCategory, setSelectedCategory] = useState(1);
  const handleSelectedCategory = (id) => {
    setSelectedCategory(id);
  };

  return (
    <aside className="w-60 h-fit flex flex-col gap-6 bg-white p-6 rounded-2xl">
      {category.map((category) => (
        <button key={category.id} onClick={()=> handleSelectedCategory(category.id)} className={`btn w-auto rounded-full text-base hover:bg-[#9538e2] hover:text-white ${selectedCategory === category.id ? 'font-bold bg-[#9538e2] text-white' : 'font-medium bg-[#09080f]/5 text-[#09080f]/60'}`}>
          {category.name}
        </button>
      ))}
    </aside>
  );
};

export default Categories;
