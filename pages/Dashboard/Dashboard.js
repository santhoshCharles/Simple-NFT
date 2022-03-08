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
  console.log(props);
  const { router } = props;
  return (
    <div>
      <Header page={router.route} >
        <DashboardWrapper>
        { router.query.user === 'admin' && <AdminPage /> }
        </DashboardWrapper>
      </Header>
    </div>
  );
}

export default withRouter(Dashboard);
