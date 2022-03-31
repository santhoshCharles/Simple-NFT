import styled from "styled-components";
import React from "react";
import {
  TwitterOutlined,
  InstagramOutlined,
  FacebookOutlined,
  EditOutlined,
} from "@ant-design/icons";

const ProfileCard = styled.div`
  width: 70%;
  height: 300px;
  background-color: white;
  display: flex;
  position: relative;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
`;

const NameCard = styled.div`
  width: 50%;
  height: 100%;
  background: rgb(254, 254, 254);
  background: linear-gradient(
    16deg,
    rgba(254, 254, 254, 1) 0%,
    rgba(241, 244, 224, 1) 35%,
    rgba(239, 244, 187, 1) 100%
  );
  text-align: center;
  padding-top: 11%;
`;

const DetailsCard = styled.div`
  width: 50%;
  height: 100%;
  background-color: white;
  display: flex;
  flex-direction: column;
  height: 100%;
  justify-content: center;
  align-items: center;
`;

const HeaderText = styled.span`
  color: #7a7777;
  font-size: 14px;
`;

const Value = styled.span`
  font-size: 17px;
  color: black;
  margin-left: 5px;
`;

const DetailsWrapper = styled.div`
  margin-top: 10px;
`;

const IconWrapper = styled.div`
  margin-top: 25px;
  width: 60%;
  display: flex;
  justify-content: space-evenly;
`;

const EditIcon = styled(EditOutlined)`
  position: absolute;
  top: 3%;
  right: 1%;
  &:hover {
    cursor: pointer;
  }
`;

function ProfileCardUI(props) {
  const { loginDetails, artistPage = false, setShowModel } = props;
  return (
    <ProfileCard>
      <NameCard>
        <h1>
          {loginDetails?.firstName && loginDetails.firstName}{" "}
          {loginDetails?.lastName && loginDetails.lastName}
        </h1>
      </NameCard>
      {/* <VerticalLine height={'95%'} width={'0.2%'} marginTop={'7px'} /> */}
      <DetailsCard>
        {!artistPage && <EditIcon onClick={() => setShowModel(true)} />}
        {!artistPage && (
          <DetailsWrapper>
            <HeaderText>Contact Number: </HeaderText>
            <Value>
              {loginDetails?.mobileNumber && loginDetails.mobileNumber}
            </Value>
          </DetailsWrapper>
        )}
        {artistPage && (
          <DetailsWrapper>
            <HeaderText>Wallet Address: </HeaderText>
            <Value>
              {loginDetails?.walletAddress && loginDetails.walletAddress}
            </Value>
          </DetailsWrapper>
        )}
        <DetailsWrapper>
          <HeaderText>Email: </HeaderText>
          <Value>{loginDetails?.email && loginDetails.email}</Value>
        </DetailsWrapper>
        <IconWrapper>
          <TwitterOutlined />
          <InstagramOutlined />
          <FacebookOutlined />
        </IconWrapper>
      </DetailsCard>
    </ProfileCard>
  );
}

export default ProfileCardUI;
