import styled from "styled-components";
import { Button } from "antd";
import { PlusCircleOutlined, ArrowRightOutlined } from "@ant-design/icons";
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { getArtistApi, getGenresApi } from "../../store/action";
import { COLOR } from "../../constant/Constant";
import { useRouter } from "next/router";

const Card = styled.div`
  transition: 0.3s;
  box-shadow: rgba(27, 31, 35, 0.04) 0px 1px 0px,
    rgba(255, 255, 255, 0.25) 0px 1px 0px inset;
  width: 270px;
  background-color: ${COLOR.secondary};
  border-radius: 10px;
  //   &:hover {
  //     box-shadow: 0 8px 16px 0 rgba(0,0,0,0.2);
  //   }
`;

const CardWrapper = styled.div`
  display: flex;
  width: 36%;
  justify-content: space-between;
`;

const CardHeader = styled.h3`
  padding: 5%;
  padding-bottom: 1%;
`;

const CardBody = styled.div`
  text-align: center;
`;

const ArtistsCardFooter = styled.div`
  padding: 2%;
  float: right;
`;

const CardFooter = styled.div`
  padding: 2%;
`;

const CardFooterView = styled(Button)`
  margin-left: 10%;
`;

const PlusIcon = styled(PlusCircleOutlined)`
  font-size: 15px;
  color: #1890ff;
  margin-right: -3%;
`;
const ViewMore = styled(ArrowRightOutlined)`
  font-size: 15px;
  color: #1890ff;
  margin-left: -4%;
`;

function Admin() {
  const artistGenresList = useSelector((state) => state.reducers);
  const dispatch = useDispatch();
  const router = useRouter();
  useEffect(() => {
    if (artistGenresList.artistCount === null) {
      dispatch(getArtistApi());
    }
    if (artistGenresList.genresCount === null) {
      dispatch(getGenresApi());
    }
  });
  return (
    <CardWrapper>
      <Card>
        <CardHeader>
          <b>Artists</b>
        </CardHeader>
        <CardBody>
          <h1>{artistGenresList.artistCount}</h1>
        </CardBody>
        <ArtistsCardFooter>
          <Button
            type="link"
            onClick={() =>
              router.push({ pathname: "/Artists", query: { user: artistGenresList.loginDetails.type } })
            }
          >
            View Artists
          </Button>
          <ViewMore />
        </ArtistsCardFooter>
      </Card>
      <Card>
        <CardHeader>
          <b>Genres</b>
        </CardHeader>
        <CardBody>
          <h1>{artistGenresList.genresCount}</h1>
        </CardBody>
        <CardFooter>
          <PlusIcon />
          <Button type="link">Add Genres</Button>
          <CardFooterView
            type="link"
            onClick={() =>
              router.push({ pathname: "/Genres", query: { user: artistGenresList.loginDetails.type } })
            }
          >
            View Genres
          </CardFooterView>
          <ViewMore />
        </CardFooter>
      </Card>
    </CardWrapper>
  );
}

export default Admin;
