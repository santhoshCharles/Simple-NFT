import { Pagination } from "antd";
import styled from "styled-components";

const PaginationWrapper = styled(Pagination)`
  float: right;
  padding-bottom: 2%;
`;
function PaginationRow(props) {
    
    const { currentPage, onChangePage, total } = props;
    return ( <PaginationWrapper
              current={currentPage}
              onChange={onChangePage}
              total={
                total
              }
              defaultPageSize={10}
            /> )
}

export default PaginationRow;