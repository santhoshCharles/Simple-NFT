import react from "react";
import styled from "styled-components";
import Link from "next/link";
import { UserOutlined } from "@ant-design/icons";
import { COLOR } from "../constant/Constant";
import { useSelector } from "react-redux";

const HeaderStyle = styled.div`
width: 100%;
height: 90px;
background-color: #348f6c;
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
  &:hover {
    cursor: pointer;
}
`;

export default function Header(props) {
  const userType = useSelector( state => state.reducers.loginDetails.type );
  const userTypee = useSelector( state => state.reducers);
  const ComponentWrapper = styled.div`
    background-color: ${COLOR.Primary};
    margin-left: 5%;
    margin-right: 5%;
    padding: 2%;
    border-radius: 16px;
    height: ${props.windowheight ? props.windowheight : "auto"};
  `;
  const { page } = props;
  return (
    <>
      <HeaderStyle>
        {page !== "Login" && (
          <HeaderWrapper>
            <ULWrapper>
              <UL>
                <LI>
                  <Link
                    href={{ pathname: "/Dashboard", query: { user: userType } }}
                  >
                    <Atag sty>Dashboard</Atag>
                  </Link>
                  <BottomBorder />
                </LI>
                <LI>
                  <Link
                    href={{ pathname: "/Artists", query: { user: userType } }}
                  >
                    <Atag>Artists</Atag>
                  </Link>
                  <BottomBorder />
                </LI>
                <LI>
                  <Link
                    href={{ pathname: "/Genres", query: { user: userType } }}
                  >
                    <Atag>Genres</Atag>
                  </Link>
                  <BottomBorder />
                </LI>
              </UL>
            </ULWrapper>
            <Link
                    href={{ pathname: "/ProfilePage", query: { user: userType } }}
                  >
                  <UserIconWrapper >
              <UserIcon />
            </UserIconWrapper>
                  </Link>
          </HeaderWrapper>
        )}
      </HeaderStyle>
      <PageWrapper>
        <ComponentWrapper>{props.children}</ComponentWrapper>
      </PageWrapper>
    </>
  );
}
