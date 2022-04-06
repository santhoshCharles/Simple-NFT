import react, { useState, useEffect } from "react";
import styled from "styled-components";
import Link from "next/link";
import { UserOutlined } from "@ant-design/icons";
import { COLOR } from "../constant/Constant";
import { useSelector } from "react-redux";
import { Button } from "antd";
import { connectWallet } from "../web3/InitFunction";

const HeaderStyle = styled.div`
width: 100%;
height: 90px;
background-color: #348f6c;
display: flex;
justify-content: flex-end;
}`;

const UL = styled.ul`
  display: flex;
  flex-direction: row;
  align-items: center;
  width: 30%;
  justify-content: space-evenly;
  align-items: center;
  height: 100%;
  margin-left: 13%;
`;

const LI = styled.li`
  list-style-type: none;
  color: ${COLOR.Primary};
`;
const Atag = styled.a`
color: white;
font-size: 16px;
    font-weight: bold;
    &:hover {
        color: white;
    }
}
`;

const BottomBorder = styled.div`
  width: 100%;
  height: 2px;
  background-color: ${COLOR.Primary};
`;

const PageWrapper = styled.div`
  width: 100%;
  background-color: #f7f7f7;
  margin: auto;
  padding-bottom: 2%;
  padding-top: 2%;
  height: 90%;
`;

const HeaderWrapper = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
`;

const ULWrapper = styled.div`
  width: 95%;
`;

const UserIcon = styled(UserOutlined)`
  width: 30px;
  height: 30px;
`;

const UserIconWrapper = styled.div`
  width: 40px;
  height: 40px;
  background-color: white;
  border-radius: 50%;
  margin-top: 25px;
  padding-top: 8px;
  padding-left: 5px;
  margin-right: 10px
  &:hover {
    cursor: pointer;
  }
`;

const ConnectWallet = styled(Button)`
  margin-top: 1.6%;
  margin-right: 24px;
  float: right;
`;

export default function Header(props) {
  const userType = useSelector((state) => state.reducers.loginDetails.type);
  const userTypee = useSelector((state) => state.reducers);
  const [walletAddress, setWallet] = useState("");
  const [status, setStatus] = useState(false);
  const [user, setUser] = useState(userType);

  const connectWalletPressed = async () => {
    try {
      const walletResponse = await connectWallet();
      setStatus(true);
      setWallet(walletResponse.address);
    } catch (err) {
      console.log("err", err);
    }
  };

  const ComponentWrapper = styled.div`
    background-color: ${COLOR.Primary};
    margin-left: 5%;
    margin-right: 5%;
    padding: 2%;
    border-radius: 16px;
    height: ${props.windowheight ? props.windowheight : "auto"};
  `;
  const { page } = props;

  useEffect(() => {
    setUser(userType);
  }, [userType]);

  return (
    <>
      <HeaderStyle>
        {page !== "Login" && (
          <HeaderWrapper>
            <ULWrapper>
              <UL>
                <LI>
                  <Link
                    href={{ pathname: "/Dashboard", query: { user: user } }}
                  >
                    <Atag sty>Dashboard</Atag>
                  </Link>
                  <BottomBorder />
                </LI>
                <LI>
                  <Link href={{ pathname: "/Artists", query: { user: user } }}>
                    <Atag>Artists</Atag>
                  </Link>
                  <BottomBorder />
                </LI>
                <LI>
                  <Link href={{ pathname: "/Genres", query: { user: user } }}>
                    <Atag>Genres</Atag>
                  </Link>
                  <BottomBorder />
                </LI>
              </UL>
            </ULWrapper>
          </HeaderWrapper>
        )}
        <ConnectWallet type="primary" onClick={connectWalletPressed}>
          {status ? "Connected" : "Connect Wallet"}
        </ConnectWallet>
        {page !== "Login" && (
          <Link href={{ pathname: "/ProfilePage", query: { user: user } }}>
            <UserIconWrapper>
              <UserIcon />
            </UserIconWrapper>
          </Link>
        )}
      </HeaderStyle>
      <PageWrapper>
        <ComponentWrapper>{props.children}</ComponentWrapper>
      </PageWrapper>
    </>
  );
}
