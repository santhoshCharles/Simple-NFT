import { connect } from "react-redux";
import styled from "styled-components";
import Header from "../../component/Header";
import { useEffect, useState } from "react";
import EditProfile from "../../component/EditProfile";
import { editProfileApi } from "../../store/action";
import ProfileCardUI from "../../component/ProfileCard";

const ProfileContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  padding-bottom: 85px;
`;

function ProfilePage(props) {
  const [showModel, setShowModel] = useState(false);
  const [loginDetails, setLoginDetails] = useState({});
  useEffect(() => {
    console.log("useeffect", props.reducers);
    setLoginDetails(props.reducers.loginDetails);
  }, [props.reducers.loginDetails]);
  console.log("props", props);
  return (
    <>
      <Header windowheight={"100%"}>
        <h1>Profile Page</h1>
        <ProfileContainer>
          <ProfileCardUI loginDetails={loginDetails} />
        </ProfileContainer>
        <EditProfile
          header={"Edit Details"}
          closePopup={() => setShowModel(false)}
          showModel={showModel}
          selectedGenres={loginDetails}
          saveDetails={(details) => props.dispatch(editProfileApi(details))}
        />
      </Header>
    </>
  );
}

const mapStateToProps = (state) => {
  return state;
};

export default connect(mapStateToProps)(ProfilePage);
