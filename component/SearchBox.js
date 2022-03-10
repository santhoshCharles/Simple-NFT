import { Pagination, Input } from "antd";
import styled from "styled-components";
const { Search } = Input;

const SearchInput = styled(Search)`
  width: 20%;
  margin-left: 69%;
  margin-bottom: 8px;
`;

export default function SearchBox(props) {
  return(
  <form>
  <SearchInput
    placeholder="Search Artist Name/Email"
    onChange={props.searchList}
    value={props.searchText}
    //focus={"all"}
    autoFocus
  />
  </form>
  )
    
}