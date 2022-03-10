import react, { useEffect, useCallback } from "react";
import { useRouter } from "next/router";
import AdminPage from "./AdminArtist";
import SearchBox from "../../component/SearchBox";
import PaginationRow from "../../component/Pagination";
import CardRenderHOC from "../../component/CardRenderHOC";
import { NO_OF_PAGE } from "../../constant/Constant";
import { useSelector, useDispatch } from "react-redux";
import { getArtistApi } from "../../store/action";

let ArtistsList = [];

function Artists(props) {
  const router = useRouter();
  const storeArtistList = useSelector( state => state.reducers.artistList );
  const dispatch = useDispatch();

  useEffect(() => {
    //apiCall();
    if(storeArtistList.length === 0) {
      dispatch(getArtistApi());
    }
    if(storeArtistList.length > 0 && props.dataList.length === 0) {
      ArtistsList = [...storeArtistList];
      props.setDataList(storeArtistList);
    }
  }, [storeArtistList]);

  const onChangePage = useCallback(
    (e) => {
      props.setCurrentPage(e);
    },
    [props.currentPage]
  );

  const searchArtist = (e) => {
    const { value } = e.target;
    if (value !== "") {
      const searchResult = ArtistsList.filter(
        (artist) =>
          artist.UserName.toUpperCase().includes(value.toUpperCase()) ||
          artist.Email.toUpperCase().includes(value.toUpperCase())
      );
      props.setSearchText(value);
      props.setDataList(searchResult);
    } else {
      props.setDataList(ArtistsList);
      props.setSearchText('');
    }
     props.setCurrentPage(1);
  };

  const cpyArtistsList = [...props.dataList];
  let seletectPageList = [];
  seletectPageList = cpyArtistsList.splice((props.currentPage - 1) * NO_OF_PAGE, NO_OF_PAGE);


  return (
    <>
    <h1>Artist List</h1>
      <SearchBox searchList={searchArtist} searchText ={props.searchText} />
      {router.query.user === "admin" && (
        <AdminPage artistsList={seletectPageList} />
      )}
      <PaginationRow
        currentPage={props.currentPage}
        onChangePage={onChangePage}
        total={
          props.searchText === "" ? ArtistsList.length : props.dataList.length
        }
      />
    </>
  );
}

export default CardRenderHOC(Artists);
