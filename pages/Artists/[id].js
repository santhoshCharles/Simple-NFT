import React, { useEffect, useState } from "react";
import ProfileCardUI from "../../component/ProfileCard";
import Header from "../../component/Header";
import { connect } from "react-redux";
import styled from "styled-components";

const DetailsWrapper = styled.div`
  width: 70%;
`;
//let artistDetails = null;

function Artist(props) {
  //console.log('selected artist', props, userDetails, state)
  const [artistDetails, setArtistDetails] = useState({});
  useEffect(() => {
    //artistDetails =
    setArtistDetails(JSON.parse(localStorage.getItem("artist")));
  }, []);
  console.log("artistDetails", artistDetails);
  const { Email, UserName, WalletAddress } = artistDetails;
  return (
    <Header windowheight={"100%"}>
      <DetailsWrapper>
        <ProfileCardUI
          loginDetails={{
            firstName: UserName,
            email: Email,
            walletAddress: WalletAddress,
          }}
          artistPage={true}
        />
      </DetailsWrapper>
    </Header>
  );
}

const mapStateToProps = (state) => {
  return state;
};

export default connect(mapStateToProps)(Artist);
