import styled from "styled-components";

const VerticalLine = (props) => {
  const VerticalLineStyle = styled.div`
    height: ${props.height};
    background-color: #b7b3b3;
    width: ${props.width};
    margin-top: ${props.marginTop};
    position: absolute;
    left: 50%;
  `;
  return <VerticalLineStyle></VerticalLineStyle>;
};

export default VerticalLine;
