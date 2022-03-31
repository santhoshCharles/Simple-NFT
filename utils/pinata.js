import axios from "axios";

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

export const getPinatadata = async () => {
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
        axios.get(`https://gateway.pinata.cloud/ipfs/${hashData.ipfs_pin_hash}`)
      );
      const NFT = await Promise.allSettled(hashDataResponce);
      return NFT;
    })
    .catch(function (error) {
      console.log("err", error);
    });
};
