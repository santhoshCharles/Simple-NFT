import Header from "../../component/Header";
import react from "react";
import { withRouter } from "next/router";
import { ADMIN } from "../../constant/Constant";
import AdminPage from "./Admin";
import styled from "styled-components";

const DashboardWrapper = styled.div`
width: 100%;
background-color: #f7f7f7;
    margin: auto;
        `

function Dashboard(props) {
  const { router } = props;
  return (
      <Header page={router.route} windowheight={'100%'}>
        { router.query.user === 'admin' && <AdminPage /> }
      </Header>
  );
}

export default withRouter(Dashboard);
