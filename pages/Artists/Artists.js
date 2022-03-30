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

let ArtistsList = [];
let serachTemp = false;

function Artists(props) {
  const router = useRouter();
  const storeArtistList = useSelector((state) => state.reducers.artistList);
  const artistCount = useSelector((state) => state.reducers.artistCount);
  const dispatch = useDispatch();
  const { dataList } = props;

  useEffect(() => {
    //apiCall();
    if (storeArtistList.length === 0) {
      dispatch(getArtistApi({ pageNumber: props.currentPage }));
    }
    console.log('useeffect')
    if ((storeArtistList[0]?._id !== dataList[0]?._id) && !serachTemp) {
      console.log('storeArtistList', storeArtistList,dataList, storeArtistList[0]?._id, dataList[0]?._id)
      ArtistsList = [...storeArtistList];
      props.setDataList(storeArtistList);
    }
  }, storeArtistList);

  const onChangePage = useCallback(
    (e) => {
      dispatch(getArtistApi({ pageNumber: e }));
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
        console.log('searchResult', searchResult)
        props.setDataList(searchResult);
      };
      callApi.debounce();
      props.setSearchText(value);
    } else {
      props.setDataList(ArtistsList);
      props.setSearchText("");
      serachTemp = false;
    }
    props.setCurrentPage(1);
  };

  // const cpyArtistsList = [...props.dataList];
  // let seletectPageList = [];
  // seletectPageList = cpyArtistsList.splice((props.currentPage - 1) * NO_OF_PAGE, NO_OF_PAGE);

  return (
    <>
      <h1>Artist List</h1>
      <SearchBox searchList={searchArtist} searchText={props.searchText} />
      {router.query.user === "admin" && <AdminPage artistsList={dataList} />}
      <PaginationRow
        currentPage={props.currentPage}
        onChangePage={onChangePage}
        total={artistCount}
      />
    </>
  );
}

export default CardRenderHOC(Artists);
