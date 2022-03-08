import react from "react";
import styled from "styled-components";
import "antd/dist/antd.css";
import { ArrowRightOutlined } from "@ant-design/icons";
import Link from "next/link";

const ArtistListWrapper = styled.div`
  padding-left: 5%;
  padding-right: 5%;
  padding-top: 1%;
  display: flex;
    flex-direction: column;
    /* justify-content: center; */
    align-items: center;
`;
const UserName = styled.div`
  font-size: 19px;
  font-weight: bold;
  padding-bottom: 20px;
  padding-top: 8px;
`;

const Card = styled.div`
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  transition: 0.3s;
  width: 70%;
  border-radius: 5px;
  margin-top: 10px;
  padding-left: 20px;
  padding-bottom: 8px;
  display: flex;
`;

const Header = styled.span`
  color: #7a7777;
  font-size: 12px;
`;
const Value = styled.span`
  font-size: 15px;
  color: black;
  margin-left: 5px;
`;

const WalletAddress = styled.span`
  margin-left: 10%;
`;

const LeftSideWrapper = styled.div`
  width: 90%;
`;

const RightSideWrapper = styled.div`
  width: 10%;
  margin-top: 3%;
`;

const ViewMore = styled(ArrowRightOutlined)`
  font-size: 15px;
  color: #1890ff;
  margin-left: 10px
`;

function AdminArtist(props) {
  const { artistsList, onView } = props;
  return (
    <ArtistListWrapper>
      {artistsList.map((artist, id) => (
        <Card key={id}>
          <LeftSideWrapper>
            <UserName>{artist.UserName}</UserName>
            <>
              <Header>Email:</Header>
              <Value>{artist.Email}</Value>
            </>
            <WalletAddress>
              <Header>Wallet Address:</Header>
              <Value>{artist.WalletAddress}</Value>
            </WalletAddress>
          </LeftSideWrapper>
          <RightSideWrapper>
            <Link href={`/Artists/${artist.UserName}`}>
              <a target="_blank">View</a>
            </Link>
            <ViewMore />
          </RightSideWrapper>
        </Card>
      ))}
    </ArtistListWrapper>
  );
}

export default AdminArtist;
