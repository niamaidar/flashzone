import { AiOutlineSearch } from "react-icons/ai";
import React, { useState} from "react";
import { useNavigate} from "react-router-dom";


function Image(){
    const navigate = useNavigate();
    const [searchTerm, setSearchTerm] = useState("");
  
    const handleSearchSubmit = (event) => {
      event.preventDefault();
      // Perform search logic here
      // Use the searchTerm variable to access the entered value
      navigate(`/search?term=${searchTerm}`);
    };
    const handleSearchChange = (event) => {
      setSearchTerm(event.target.value);
    };
    return (
        <div className="w-screen h-[350px] m-auto bg-stone-200 rounded-xl">
          <div className="w-full h-full flex justify-center items-center">
            <div className="w-11/12 xl:w-1/2 p-5 space-y-5">
              <h1 className="text-5xl font-semibold">find the perfect photography equipements for everyone on your list.</h1>
              <div className="bg-white flex items-center space-x-2 px-5 py-2 rounded-full">
                <AiOutlineSearch size={"1.2rem"}/><form onSubmit={handleSearchSubmit}>
                <input className="outline-0 w-full" type="text" placeholder="Search..." value={searchTerm}
                onChange={handleSearchChange}
                /></form>
              </div>
            </div>
            <div className="hidden md:flex p-5">
              <img className="w-[400px] h-[300px] border-8 border-gray-500" src="images/img.jpeg" alt="" />
            </div>
          </div>
        </div>
      );
    };
export default Image;