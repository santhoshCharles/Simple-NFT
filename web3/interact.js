import { pinJSONToIPFS } from "../utils/pinata";
import contractABI from "../Contract/Contract.json";
import { ALCHEMY_KEY, CONTRACT_ADDRESS } from "../constant/ConfigKey";

const { createAlchemyWeb3 } = require("@alch/alchemy-web3");
const alchemyKey = ALCHEMY_KEY;
const web3 = createAlchemyWeb3(alchemyKey);

const contractAddress = CONTRACT_ADDRESS;


export const getCurrentWalletConnected = async () => {
    if (window.ethereum) {
      try {
        const addressArray = await window.ethereum.request({
          method: "eth_accounts",
        });
        if (addressArray.length > 0) {
          return {
            address: addressArray[0],
            status: "👆🏽 Write a message in the text-field above.",
          };
        } else {
          return {
            address: "",
            status: "🦊 Connect to Metamask using the top right button.",
          };
        }
      } catch (err) {
        return {
          address: "",
          status: "😥 " + err.message,
        };
      }
    } else {
      return {
        address: "",
        status: (
          <span>
            <p>
              {" "}
              🦊{" "}
              <a target="_blank" href={`https://metamask.io/download.html`}>
                You must install Metamask, a virtual Ethereum wallet, in your
                browser.
              </a>
            </p>
          </span>
        ),
      };
    }
  };
  
   export async function loadContract() {
    return new web3.eth.Contract(contractABI, contractAddress);
  }
  
  export const mintNFT = async (title, description, price, imageUrl, userType, userName, email) => {
    
    const metadata = new Object();
    metadata.title = title;
    metadata.imageUrl = imageUrl;
    metadata.description = description;
    metadata.userType = userType;
    metadata.price = price;
    metadata.userName = userName;
    metadata.email = email;
    metadata.updated = Date.now();

  
    const pinataResponse = await pinJSONToIPFS(metadata);
    if (!pinataResponse.success) {
      return {
        success: false,
        status: "😢 Something went wrong while uploading your tokenURI.",
      };
    }
    const tokenURI = pinataResponse.pinataUrl;
  
    window.contract = await new web3.eth.Contract(contractABI, contractAddress);
    const transactionParameters = {
      to: contractAddress, // Required except during contract publications.
      from: window.ethereum.selectedAddress, // must match user's active address.
      data: window.contract.methods
        .mintNFT(window.ethereum.selectedAddress, tokenURI)
        .encodeABI(),
    };
  
    try {
      const txHash = await window.ethereum.request({
        method: "eth_sendTransaction",
        params: [transactionParameters],
      });
      return {
        success: true,
        status:
          "✅ Check out your transaction on Etherscan: https://ropsten.etherscan.io/tx/" +
          txHash,
      };
    } catch (error) {
      return {
        success: false,
        status: "😥 Something went wrong: " + error.message,
      };
    }
  };
