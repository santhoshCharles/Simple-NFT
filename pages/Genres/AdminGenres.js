import React, { useState } from "react";
import styled from "styled-components";
import { Button } from "antd";
import { COLOR } from "../../constant/Constant";
import { connect } from "react-redux";

const CardWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

const SmallCard = styled.div`
  width: 31%;
  box-shadow: rgb(27 31 35 / 4%) 0px 1px 0px,
    rgb(255 255 255 / 25%) 0px 1px 0px inset;
  background-color: ${COLOR.secondary};
  margin: 1%;
  padding: 1.5%;
  border-radius: 10px;
`;
const ActionButtonWrapper = styled.div`
  display: flex;
  margin-top: 10px;
  justify-content: center;
`;
const Description = styled.div`
  margin-top: 20px;
  color: black;
`;

const VerticalList = styled.div`
height: 16px;
    background-color: #b7b3b3;
    width: 2px;
    margin-top: 8px;
`

function AdminGenres(props) {
  const { genresList = [] } = props;
  return (
    <CardWrapper>
      {genresList.map((genres, index) => (
        <>
          <SmallCard>
            <h2>{genres.Title}</h2>
            <Description>{genres.des}</Description>
            <ActionButtonWrapper>
            <Button
              type="link"
              onClick={()=>props.onEdit(index)}
            >
              Edit
            </Button>
            <VerticalList></VerticalList>
            <Button
              type="link"
              onClick={()=>props.onDelete(genres._id)}
            >
              Delete
            </Button>
          </ActionButtonWrapper>
          </SmallCard>
        </>
      ))}
    </CardWrapper>
  );
}

const mapStateToProps = (state) => {
   
    return { state }
  }

export default connect(mapStateToProps)(AdminGenres);
