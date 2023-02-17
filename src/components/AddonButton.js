import * as React from "react";
import Button from "@mui/material/Button";
//import { useEffect, useState } from "react";

export default function AddonButton({ content, setWatchList, watchlist }) {
  console.log(watchlist); //get initial hard code watchlist black panther

  //console.log(content);
  const addMovieToWatchlist = (content) =>  {
    //preventDefault();
    console.log(content.id)  // get the contend id
    const newWatchList = [...watchlist];
    //console.log(newWatchList)

    newWatchList.push({
        id:content.id,
        title:content.title,
        poster:content.poster_path,
    });
    console.log(newWatchList) // add Ant-Man to the newWatchList
    
    setWatchList(
      newWatchList
    )
  };

  return (
    <Button
      variant="contained"
      href="#contained-buttons"
      onClick={()=> addMovieToWatchlist(content)}
    >
      + Add to watch list
    </Button>
  );
}