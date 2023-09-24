import { useEffect, useState } from "react";
import Category from "../Category/Category";

const CategoryList = () => {
    const [categories, setCategories] = useState([]);

    useEffect(() =>{
        fetch("categories.json")
        .then(res => res.json())
        .then(data => setCategories(data))
    } ,[])
    return (
        <div>
            <h1 className="text-5xl text-center mt-6 font-semibold text-[#1A1919]">Job Category List</h1>
            <p className="text-[#757575] font-medium text-xl text-center my-6">Explore thousands of job opportunities with all the information you need. Its your future</p>

            <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 m-4">
                {
                    categories.map(category => <Category key={category.id} category ={category} ></Category>)
                }
            </div>
        </div>
    );
};

export default CategoryList;