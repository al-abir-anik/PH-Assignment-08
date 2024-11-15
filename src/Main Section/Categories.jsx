import { useState } from "react";
import { NavLink } from "react-router-dom";

const Categories = ({categories}) => {

  const [selectedCategory, setSelectedCategory] = useState();
  const handleSelectedCategory = (id) => {
    setSelectedCategory(id);
  };

  return (
    <aside className="w-1/6 h-fit flex flex-col gap-6 bg-white p-6 rounded-2xl">
      {categories.map((category) => (
        <NavLink to={`./category/${category.category}`} key={category.id} onClick={()=> handleSelectedCategory(category.id)} className={`btn w-auto rounded-full text-base hover:bg-[#9538e2] hover:text-white ${selectedCategory === category.id ? 'font-bold bg-[#9538e2] text-white' : 'font-medium bg-[#09080f]/5 text-[#09080f]/60'}`}>
          {category.category}
        </NavLink>
      ))}
    </aside>
  );
};

export default Categories;
