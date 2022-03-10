import { connect } from "react-redux";
import styled from "styled-components";
import Header from "../../component/Header";
import { useEffect, useState } from "react";
import {
  TwitterOutlined,
  InstagramOutlined,
  FacebookOutlined,
  EditOutlined,
} from "@ant-design/icons";
import EditProfile from "../../component/EditProfile";

const ProfileContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  padding-bottom: 85px;
`;

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
  &:hover{
      cursor: pointer
  }
`;

function ProfilePage(props) {
  const { loginDetails } = props.reducers;
  const [showModel, setShowModel] = useState(false);
  return (
    <>
      <Header windowheight={"100%"}>
          <h1>Profile Page</h1>
        <ProfileContainer>
          <ProfileCard>
            <NameCard>
              <h1>
                {loginDetails.firstName} {loginDetails.lastName}
              </h1>
            </NameCard>
            {/* <VerticalLine height={'95%'} width={'0.2%'} marginTop={'7px'} /> */}
            <DetailsCard>
              <EditIcon onClick={()=>setShowModel(true) } />
              <DetailsWrapper>
                <HeaderText>Contact Number: </HeaderText>
                <Value>{loginDetails.mobileNumber}</Value>
              </DetailsWrapper>
              <DetailsWrapper>
                <HeaderText>Email: </HeaderText>
                <Value>{loginDetails.email}</Value>
              </DetailsWrapper>
              <IconWrapper>
                <TwitterOutlined />
                <InstagramOutlined />
                <FacebookOutlined />
              </IconWrapper>
            </DetailsCard>
          </ProfileCard>
        </ProfileContainer>
        <EditProfile
        header={"Edit Details"}
        closePopup={()=>setShowModel(false)}
        showModel={showModel}
        selectedGenres={loginDetails}
      />
      </Header>
    </>
  );
}

const mapStateToProps = (state) => {
  return state;
};

export default connect(mapStateToProps)(ProfilePage);
