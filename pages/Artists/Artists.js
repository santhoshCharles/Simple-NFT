import Header from "../../component/Header";
import react, { useState, useEffect, useCallback } from "react";
import { withRouter, useRouter } from "next/router";
import { ADMIN } from "../../constant/Constant";
import AdminPage from "./AdminArtist";
import styled from "styled-components";
import ViewArtist from "../../component/ViewArtist";
import { Pagination } from "antd";

const ArtistsList = [
  { UserName: "santhosh", Email: "san@gmail.com", WalletAddress: "vd4tfbf3" },
  { UserName: "sam", Email: "san@gmail.com", WalletAddress: "jd04tfbf3" },
  { UserName: "san", Email: "san@gmail.com", WalletAddress: "tdhtgbdef3" },
  { UserName: "sant", Email: "san@gmail.com", WalletAddress: "edggthbfq" },
  { UserName: "santhosh", Email: "san@gmail.com", WalletAddress: "vd4tfbf3" },
  { UserName: "sam", Email: "san@gmail.com", WalletAddress: "jd04tfbf3" },
  { UserName: "san", Email: "san@gmail.com", WalletAddress: "tdhtgbdef3" },
  { UserName: "sant", Email: "san@gmail.com", WalletAddress: "edggthbfq" },
  { UserName: "santhosh", Email: "san@gmail.com", WalletAddress: "vd4tfbf3" },
  { UserName: "sam", Email: "san@gmail.com", WalletAddress: "jd04tfbf3" },
  { UserName: "san", Email: "san@gmail.com", WalletAddress: "tdhtgbdef3" },
  { UserName: "sant", Email: "san@gmail.com", WalletAddress: "edggthbfq" },
  { UserName: "Hervin", Email: "san@gmail.com", WalletAddress: "vd4tfbf3" },
  { UserName: "sam", Email: "san@gmail.com", WalletAddress: "jd04tfbf3" },
  { UserName: "san", Email: "san@gmail.com", WalletAddress: "tdhtgbdef3" },
  { UserName: "sant", Email: "san@gmail.com", WalletAddress: "edggthbfq" },
  { UserName: "santhosh", Email: "san@gmail.com", WalletAddress: "vd4tfbf3" },
  { UserName: "sam", Email: "san@gmail.com", WalletAddress: "jd04tfbf3" },
  { UserName: "san", Email: "san@gmail.com", WalletAddress: "tdhtgbdef3" },
  { UserName: "sant", Email: "san@gmail.com", WalletAddress: "edggthbfq" },
  { UserName: "santhosh", Email: "san@gmail.com", WalletAddress: "vd4tfbf3" },
  { UserName: "sam", Email: "san@gmail.com", WalletAddress: "jd04tfbf3" },
  { UserName: "san", Email: "san@gmail.com", WalletAddress: "tdhtgbdef3" },
  { UserName: "sant", Email: "san@gmail.com", WalletAddress: "edggthbfq" },
  { UserName: "santhosh", Email: "san@gmail.com", WalletAddress: "vd4tfbf3" },
  { UserName: "sam", Email: "san@gmail.com", WalletAddress: "jd04tfbf3" },
  { UserName: "san", Email: "san@gmail.com", WalletAddress: "tdhtgbdef3" },
  { UserName: "sant", Email: "san@gmail.com", WalletAddress: "edggthbfq" },
  { UserName: "santhosh", Email: "san@gmail.com", WalletAddress: "vd4tfbf3" },
  { UserName: "sam", Email: "san@gmail.com", WalletAddress: "jd04tfbf3" },
  { UserName: "san", Email: "san@gmail.com", WalletAddress: "tdhtgbdef3" },
  { UserName: "sant", Email: "san@gmail.com", WalletAddress: "edggthbfq" },
  { UserName: "santhosh", Email: "san@gmail.com", WalletAddress: "vd4tfbf3" },
  { UserName: "sam", Email: "san@gmail.com", WalletAddress: "jd04tfbf3" },
  { UserName: "san", Email: "san@gmail.com", WalletAddress: "tdhtgbdef3" },
  { UserName: "sant", Email: "san@gmail.com", WalletAddress: "edggthbfq" },
  { UserName: "santhosh", Email: "san@gmail.com", WalletAddress: "vd4tfbf3" },
  { UserName: "sam", Email: "san@gmail.com", WalletAddress: "jd04tfbf3" },
  { UserName: "san", Email: "san@gmail.com", WalletAddress: "tdhtgbdef3" },
  { UserName: "sant", Email: "san@gmail.com", WalletAddress: "edggthbfq" },
  { UserName: "Manoj", Email: "san@gmail.com", WalletAddress: "vd4tfbf3" },
  { UserName: "sam", Email: "san@gmail.com", WalletAddress: "jd04tfbf3" },
  { UserName: "san", Email: "san@gmail.com", WalletAddress: "tdhtgbdef3" },
  { UserName: "sant", Email: "san@gmail.com", WalletAddress: "edggthbfq" },
];

const ArtistsWrapper = styled.div`
  width: 100%;
  background-color: #f7f7f7;
  margin: auto;
`;
const AdminWrapper = styled.div`
  background-color: white;
  margin-left: 5%;
  margin-right: 5%;
  height: 90vh;
  padding: 2%;
`;

const PaginationWrapper = styled(Pagination)`
  float: right;
`

function Artists(props) {
  const route = useRouter();
  const { router } = props;
  const [artistsList, setArtistsList] = useState(ArtistsList);
  const [currentPage, setCurrentPage] = useState(1);
  // let startingInPage = 0;
  // let endingInPage = 10;

  useEffect(() => {
    // totalPage = Math.ceil(ArtistsList.length / 10)
    // console.log('tot', totalPage)
  },[])

  const onChangePage = useCallback((e) => {
    //console.log(e);
    setCurrentPage(e);
  }, [currentPage])


  const cpyArtistsList = [...artistsList];
  let seletectPageList = [];
  seletectPageList = cpyArtistsList.splice((currentPage - 1) * 10, 10);

  return (
    <>
      <Header page={router.route}>
        <ArtistsWrapper>
          <AdminWrapper>
            {router.query.user === "admin" && (
              <AdminPage
                artistsList={seletectPageList}
              />
            )}
            <PaginationWrapper current={currentPage} onChange={onChangePage} total={ArtistsList.length} defaultPageSize={10}/>
          </AdminWrapper>
        </ArtistsWrapper>
        {/* {modelOpen && <ViewArtist/> } */}
      </Header>
    </>
  );
}

export default withRouter(Artists);
