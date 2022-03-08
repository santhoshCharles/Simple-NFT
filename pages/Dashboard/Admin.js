import react from "react";
import styled from "styled-components";
import { Button } from "antd";
import { PlusCircleOutlined, ArrowRightOutlined } from "@ant-design/icons";

const AdminWrapper = styled.div`
  background-color: white;
  margin-left: 5%;
  margin-right: 5%;
  height: 90vh;
  padding: 2%;
`;

const Card = styled.div`
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  transition: 0.3s;
  width: 270px;
  border-radius: 5px;
  //   &:hover {
  //     box-shadow: 0 8px 16px 0 rgba(0,0,0,0.2);
  //   }
`;

const CardWrapper = styled.div`
  display: flex;
  width: 36%;
  justify-content: space-between;
`;

const CardHeader = styled.h3`
  padding: 5%;
  padding-bottom: 1%;
`;

const CardBody = styled.div`
  text-align: center;
`;

const ArtistsCardFooter = styled.div`
  padding: 2%;
  float: right;
`;

const CardFooter = styled.div`
  padding: 2%;
`;

const CardFooterView = styled(Button)`
  margin-left: 10%;
`;

const PlusIcon = styled(PlusCircleOutlined)`
  font-size: 15px;
  color: #1890ff;
  margin-right: -3%;
`;
const ViewMore = styled(ArrowRightOutlined)`
  font-size: 15px;
  color: #1890ff;
  margin-left: -4%;
`;

function Admin() {
  return (
    <AdminWrapper>
      <CardWrapper>
        <Card>
          <CardHeader>
            <b>Artists</b>
          </CardHeader>
          <CardBody>
            <h1>40</h1>
          </CardBody>
          <ArtistsCardFooter>
            <Button type="link">View Artists</Button>
            <ViewMore />
          </ArtistsCardFooter>
        </Card>
        <Card>
          <CardHeader>
            <b>Genres</b>
          </CardHeader>
          <CardBody>
            <h1>20</h1>
          </CardBody>
          <CardFooter>
            <PlusIcon />
            <Button type="link">Add Genres</Button>
            <CardFooterView type="link">View Genres</CardFooterView>
            <ViewMore />
          </CardFooter>
        </Card>
      </CardWrapper>
    </AdminWrapper>
  );
}

export default Admin;
