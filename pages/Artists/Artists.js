import react, { useEffect, useCallback } from "react";
import { useRouter } from "next/router";
import AdminPage from "./AdminArtist";
import SearchBox from "../../component/SearchBox";
import PaginationRow from "../../component/Pagination";
import CardRenderHOC from "../../component/CardRenderHOC";
import { NO_OF_PAGE } from "../../constant/Constant";
import { useSelector, useDispatch } from "react-redux";
import { getArtistApi } from "../../store/action";
import { apiCallWithoutRedux } from "../../store/ApiCall";
import { API_URL } from "../../constant/ApiLinks";
import { setMemoization, MemoizationType, memoizationState } from "../../utils/memoization";

let ArtistsList = [];
let serachTemp = false;

function Artists(props) {
  const router = useRouter();
  const storeArtistList = useSelector((state) => state.reducers.artistList);
  const artistCount = useSelector((state) => state.reducers.artistCount);
  const dispatch = useDispatch();
  const { dataList, artistInitialList } = props;

  useEffect(() => {
    if (dataList.length === 0) {
      props.setDataList(artistInitialList);

    }
    if (storeArtistList.length !== 0 && (storeArtistList[0]?._id !== dataList[0]?._id) && !serachTemp) {
      ArtistsList = [...storeArtistList];
      props.setDataList(storeArtistList);
    }
  }, storeArtistList);

  const onChangePage = useCallback(
    (e) => {
      if(memoizationState.artistPaginationResult[e] && memoizationState.artistPaginationResult[e].length !== 0) {
        props.setDataList(memoizationState.searchArtist[e]);
      } else {
        dispatch(getArtistApi({ pageNumber: e }));
      }
      props.setCurrentPage(e);
    },
    [props.currentPage]
  );

  const searchArtist = (e) => {
    const { value } = e.target;
    if (value !== "") {
      serachTemp = true;
      const callApi = async () => {
        const searchResult = await apiCallWithoutRedux(
          { UserName: value },
          "POST",
          API_URL.searchArtist
        );
        setMemoization(MemoizationType.SET_ARTIST_SEARCH_RESULT, searchResult, value);
        props.setDataList(searchResult);
      };
      if(memoizationState.searchArtist[value] && memoizationState.searchArtist[value]?.length !== 0) {
        props.setDataList(memoizationState.searchArtist[value]);
      } else {
        callApi.debounce();
      }
      props.setSearchText(value);
    } else {
      props.setDataList(ArtistsList);
      props.setSearchText("");
      serachTemp = false;
    }
    props.setCurrentPage(1);
  };

  return (
    <>
      <h1>Artist List</h1>
      <SearchBox searchList={searchArtist} searchText={props.searchText} />
      { (router.query.user === "admin" || router.query.user === "author")  && <AdminPage artistsList={dataList} />}
      <PaginationRow
        currentPage={props.currentPage}
        onChangePage={onChangePage}
        total={artistCount}
      />
    </>
  );
}

export default CardRenderHOC(Artists);
