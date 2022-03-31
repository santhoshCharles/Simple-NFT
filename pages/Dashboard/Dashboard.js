import Header from "../../component/Header";
import react from "react";
import { withRouter } from "next/router";
import { ADMIN } from "../../constant/Constant";
import AdminPage from "./Admin";
import styled from "styled-components";
import AuthorDashboard from "./AuthorDashboard";

const DashboardWrapper = styled.div`
width: 100%;
background-color: #f7f7f7;
    margin: auto;
        `

function Dashboard(props) {
  const { router } = props;

  // if(router.query.user === 'author') {
  //   return(<AuthorDashboard/>)
  // }
  
  return (
      <Header page={router.route} windowheight={'100%'}>
        { router.query.user === 'admin' && <AdminPage /> }
        { router.query.user === 'author' && <AuthorDashboard/>}
        {/*  */}
      </Header>
  );
}

export default withRouter(Dashboard);
