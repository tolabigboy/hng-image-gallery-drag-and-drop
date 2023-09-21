import React from "react";

const MovieCard = ({ id, img, tags }) => {
  return (
    <div className="">
      <div>
        <img className="w-[400px] h-[300px] object-cover" src={img} alt="" />
        {tags.map((tag, index) => {
          return (
            <span key={index} className="bg-[rgba(0,0,0,.3)] w-[150px] flex ">
              {tag.toUpperCase()}
            </span>
          );
        })}
      </div>
    </div>
  );
};

export default MovieCard;
