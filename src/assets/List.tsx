import React from "react";
import { useAppSelector } from "./features/store";

const List = () => {
  
  const lists =useAppSelector((state) => state.slice.persons)
  return (
    <div className="w-[400px] py-[50px] px-5 bg-[#B09E99] rounded-md mt-10">
      {lists.map((elem) => {
        return(
          <div>
            <h2 className="text-white font-bold">Id: {elem.id}</h2>
            <h2 className="text-white font-bold">Name: {elem.name}</h2>
          </div>
        )
      })}
    </div>
  );
};

export default List;
