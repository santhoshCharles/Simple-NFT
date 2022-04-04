import { useState, useEffect, useCallback } from "react";
import { Button, Card } from "antd";
import { mintNFT, loadContract } from "../../web3/interact";
import { getPinatadata } from "../../utils/pinata";
import styled from "styled-components";
import CreateNFT from "../../component/CreateNFT";
import { useSelector, useDispatch } from "react-redux";

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
  const[NFT, setNFTs] = useState([]);
  const [showModel, setShowModel ] = useState(false);
  const dispatch = useDispatch();
  const userType = useSelector((state) => state.reducers);
  const nft = useSelector((state) => state.reducers.nft);

  useEffect(() => {
    loadContract();
    if(nft.length > 0) {
      setNFTs(nft);
    }
    else {
      getPinataData();
    }
  },[userType, nft]);

  const getPinataData =  () => {

    dispatch(getPinatadata());
  };

  const onMintPressed = async (data) => {
    const { status } = await mintNFT({...data});
  };

  const submitForm = (data) => {

  }

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
                src={NFTData.value.data.title.imageUrl}
                height={200}
                width={200}
              />
            }
          >
            <Meta title={NFTData.value.data.title.title} description={NFTData.value.data.title.description} />
            <div>{NFTData.value.data.title.userName}</div>
          </Card>
        ))}
        ,
      </NFTWrapper>
      <CreateNFT showModel={showModel} closePopup={()=>setShowModel(false)} onMintPressed={onMintPressed} />
    </div>
  );
}

export default AuthorDashboard;
