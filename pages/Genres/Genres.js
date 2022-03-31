import react, { useEffect, useCallback, useState } from "react";
import { useRouter } from "next/router";
import AdminGenres from "./AdminGenres";
import SearchBox from "../../component/SearchBox";
import PaginationRow from "../../component/Pagination";
import CardRenderHOC from "../../component/CardRenderHOC";
import { NO_OF_PAGE } from "../../constant/Constant";
import { useSelector, useDispatch, connect } from "react-redux";
import { getGenresApi, deleteGenersApi } from "../../store/action";
import { NO_OF_GENRES_PAGE } from "../../constant/Constant";
import { Button } from "antd";
import styled from "styled-components";
import AddGeners from "../../component/AddGeners";
import { apiCallWithoutRedux } from "../../store/ApiCall";
import { API_URL } from "../../constant/ApiLinks";

const FloatingButton = styled(Button)`
  position: fixed;
  width: 50px;
  height: 50px;
  bottom: 40px;
  right: 40px;
  color: #fff;
  border-radius: 50px;
  text-align: center;
  box-shadow: 2px 2px 3px #999;
  font-size: 25px;
`;

let GenresDataList = [];

let genresId = null;

let serachTemp = false;

let selectedGenres = {};

function GenresList(props) {
  const router = useRouter();
  const dispatch = useDispatch();
  const [showModel, setShowModel] = useState(false);
  const { currentPage, dataList } = props;
  const { genresList = [], genresCount } = props.reducers;

  useEffect(() => {
    //apiCall();
    console.log("useEffect");
    if (genresList?.length === 0) {
      dispatch(getGenresApi({ pageNumber: currentPage }));
    }
    if (
      ((props.searchText === "" &&
        genresList?.length !== props.dataList.length) ||
      genresId !== null ||
      (genresList[0]?._id !== dataList[0]?._id)) &&
      !serachTemp
    ) {
      console.log('true', genresList)
      genresId = null;
      selectedGenres = {};
      GenresDataList = genresList && [...genresList];
      props.setDataList(genresList);
    }
  }, [props.reducers.genresList]);

  const onChangePage = useCallback(
    (e) => {
      dispatch(getGenresApi({ pageNumber: e }));
      props.setCurrentPage(e);
    },
    [props.currentPage]
  );

  const searchGenres = (e) => {
    const { value } = e.target;
    console.log(value);
    if (value !== "") {
      serachTemp = true;
      const callApi = async () => {
        const searchResult = await apiCallWithoutRedux(
          { title: value },
          "POST",
          API_URL.searchgenres
        );
        console.log("searchResult", searchResult);
        props.setDataList(searchResult);
      };
      callApi.debounce();
    } else {
      serachTemp = false;
      props.setDataList(GenresDataList);
    }
    props.setCurrentPage(1);
    props.setSearchText(e.target.value);
  };

  const setGenresId = () => {
    genresId = props.dataList.length + 1;
    setShowModel(true);
  };

  const onEdit = (id) => {
    genresId = props.dataList[id].id;
    selectedGenres = props.dataList[id];
    setShowModel(true);
  };

  const closeModel = () => {
    selectedGenres = {};
    setShowModel(false);
  };

  const onDelete = (id) => {
    dispatch(deleteGenersApi({ id: id }));
  };

  //console.log()

  return (
    <>
      <h1>Genres List</h1>
      <SearchBox searchList={searchGenres} searchText={props.searchText} />
      {router.query.user === "admin" && (
        <AdminGenres
          genresList={dataList}
          onEdit={onEdit}
          onDelete={onDelete}
        />
      )}
      <PaginationRow
        currentPage={props.currentPage}
        onChangePage={onChangePage}
        onDelete={onDelete}
        total={genresCount}
      />
      <FloatingButton
        type="primary"
        shape="circle"
        size="large"
        onClick={setGenresId}
      >
        +
      </FloatingButton>
      <AddGeners
        header={"Add Geners"}
        closePopup={closeModel}
        showModel={showModel}
        genresId={genresId}
        selectedGenres={selectedGenres}
      />
    </>
  );
}

const mapStateToProps = (state) => {
  return state;
};

// GenresList.defaultProps = {
//   reducers:{
//     artistList: [],
//     genresList: []
//   }
// }

export default CardRenderHOC(connect(mapStateToProps)(GenresList));
