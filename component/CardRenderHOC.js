import React, { useState } from "react";
import { withRouter } from "next/router";
import Header from "./Header";
import PaginationRow from "./Pagination";
import SearchBox from "./SearchBox";

const CardRenderHOC = (WrappedComponent) => ({artistInitialList, genresInitialList}) => {
  const [artistsList, setArtistsList] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [searchText, setSearchText] = useState("");
  
  return (
    <Header>
      <WrappedComponent
        dataList={artistsList}
        currentPage={currentPage}
        searchText={searchText}
        setDataList={setArtistsList}
        setCurrentPage={setCurrentPage}
        setSearchText={setSearchText}
        artistInitialList={artistInitialList}
        genresInitialList={genresInitialList}
      />
    </Header>
  );
};

export default CardRenderHOC;
