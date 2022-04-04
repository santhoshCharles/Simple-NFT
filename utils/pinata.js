import axios from "axios";
import { useDebugValue } from "react";
import { setNft } from "../store/action";

const key = "11e4a2368a262bbd21b3";
const secret =
  "26de01678b8f178b014337914df9a2da4beb2a78ae7e33598b2f952e58fdc2b1";

export const pinJSONToIPFS = async (JSONBody) => {
  const url = `https://api.pinata.cloud/pinning/pinJSONToIPFS`;
  //making axios POST request to Pinata ⬇️
  return axios
    .post(url, JSONBody, {
      headers: {
        pinata_api_key: key,
        pinata_secret_api_key: secret,
      },
    })
    .then(function (response) {
      return {
        success: true,
        pinataUrl:
          "https://gateway.pinata.cloud/ipfs/" + response.data.IpfsHash,
      };
    })
    .catch(function (error) {
      console.log(error);
      return {
        success: false,
        message: error.message,
      };
    });
};

export const getPinatadata = () => {
  return function (dispatch, getState) {
    const url = `https://api.pinata.cloud/data/pinList?status=pinned`;
    return axios
      .get(url, {
        headers: {
          pinata_api_key: key,
          pinata_secret_api_key: secret,
        },
      })
      .then(async function (response) {
        const hashDataResponce = response.data.rows.map((hashData) =>
          axios.get(
            `https://gateway.pinata.cloud/ipfs/${hashData.ipfs_pin_hash}`
          )
        );
        const NFT = await Promise.allSettled(hashDataResponce);
        const state = getState();
        const { userName } = state.reducers.loginDetails;
        console.log('nft', NFT, state);
        const filterNFT = NFT.filter( nft => nft.value.data.title.userName === userName );
        console.log('nft', NFT, state, filterNFT);
        dispatch(setNft(filterNFT));
      })
      .catch(function (error) {
        console.log("err", error);
      });
  };
};
