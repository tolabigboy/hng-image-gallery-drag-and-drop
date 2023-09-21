import React, { useState } from "react";
import { BiSearchAlt2 } from "react-icons/bi";
import data from "../components/data";
import Gallery from "./Gallery";
const Search = () => {
  const [query, setQuery] = useState("");
  const filteredImages = data.filter((image) => {
    return image.tags.some((tag) =>
      tag.toLowerCase().includes(query.toLowerCase())
    );
  });
  console.log(query);
  return (
    <div className="wrapper ">
      <form
        action=""
        className="relative max-w-[500px] my-[2rem]"
        onSubmit={(e) => {
          e.preventDefault();
        }}
      >
        <input
          className="rounded-[2px] border-black border-[2px] border-solid p-[.5rem] w-full"
          type="text"
          placeholder="search"
          value={query}
          onChange={(e) => {
            setQuery(e.target.value);
          }}
        />
        <BiSearchAlt2 className="absolute top-[2px] right-0 bg-cyan-100 w-[55px] p-[.2rem] h-[40px] cursor-pointer" />
      </form>
      <Gallery query={query} />
    </div>
  );
};
export default Search;
