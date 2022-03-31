import { useState, useEffect, useCallback } from "react";
import { Button, Card } from "antd";
import { mintNFT, loadContract } from "../../web3/interact";
import { getPinatadata } from "../../utils/pinata";
import styled from "styled-components";
import CreateNFT from "../../component/CreateNFT";

const CreateNFTButton = styled(Button)`
    margin: 16px
`

const NFTWrapper = styled.div`
    margin: 32px;
    display: flex;
    margin-bottom: 0px;
`

const { Meta } = Card;

function AuthorDashboard() {
  const[NFT, setNFT] = useState([]);
  const [showModel, setShowModel ] = useState(false);

  useEffect(() => {
    loadContract();
    getPinataData();
  },[]);

  const getPinataData = async () => {
    const data = await getPinatadata();
    setNFT(data);
    console.log("data", data);
  };

  const onMintPressed = async () => {
    console.log("onMintPressed");
    const { status } = await mintNFT(
      "https://yourimageshare.com/ib/h42xmxuH2Z.jpg",
      "MT 15 Blue",
      "MT 15 Blue color, 155cc, 1.8lak"
    );
    console.log("status", status);
  };

  return (
    <div>
      <CreateNFTButton type="primary" onClick={()=>setShowModel(true)}>
        {"Create NFT"}
      </CreateNFTButton>
      <NFTWrapper>
        {NFT.map((NFTData) => (
          <Card
            hoverable
            style={{ width: 240, margin: 16 }}
            cover={
              <img
                alt="example"
                src={NFTData.value.data.image}
                height={200}
                width={200}
              />
            }
          >
            <Meta title={NFTData.value.data.name} description={NFTData.value.data.description} />
          </Card>
        ))}
        ,
      </NFTWrapper>
      <CreateNFT showModel={showModel} closePopup={()=>setShowModel(false)} />
    </div>
  );
}

export default AuthorDashboard;
