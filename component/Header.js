import react from "react";
import styled from "styled-components";
import Link from "next/link";
import { UserOutlined } from "@ant-design/icons";

const HeaderStyle = styled.div`
width: 100%;
height: 90px;
background-color: #36bd79;
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
  color: white;
`;
const Atag = styled.a`
color: white;
font-size: 16px;
    font-weight: bold;
    &:hover {
        color: white;
    }
}
`

const BottomBorder = styled.div`
width: 100%;
    height: 2px;
    background-color: white;
`


export default function Header(props) {
  console.log("header");
  const { page, userType } = props;
  return (
    <>
      <HeaderStyle>
        {page !== "Login" && (
            <>
          <UL>
            <LI>
              <Link href={{pathname: '/Dashboard', query: {user: 'admin'}}}>
                <Atag sty >Dashboard</Atag>
              </Link>
              <BottomBorder/>
            </LI>
            <LI>
              <Link href={{pathname: '/Artists', query: {user: 'admin'}}}>
                <Atag>Artists</Atag>
              </Link>
              <BottomBorder/>
            </LI>
            <LI>
              <Link href={{pathname: '/Genres', query: {user: 'admin'}}}>
                <Atag>Genres</Atag>
              </Link>
              <BottomBorder/>
            </LI>
          </UL>
          {/* <UserOutlined /> */}
          </>
        )}
      </HeaderStyle>
      {props.children}
    </>
  );
}
