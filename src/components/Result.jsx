// import { useState, useEffect } from "react";
import Music from "./Music";
const Result = ({results,onPlay}) => {

  return (
    <div className="w-full">      
      <div className="flex flex-wrap gap-[1rem]">
      {results && results.map((data) => <Music key={data.id} data={data} onPlay={onPlay} />)}
      </div>
    </div>
  );
};

export default Result;
