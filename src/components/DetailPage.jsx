import React from "react";
import { useLocation } from "react-router-dom";
import { Link } from "react-router-dom";
import styled from "styled-components";

const DetailPage = () => {
  const location = useLocation();
  const data = location.state;
  return (
    <DetailBox>
      <StyledLink to="/"><DetailBackIcon src="/home.png" alt="" /></StyledLink>
      <DetailPinImg src="/pin.png" alt="" />
      <div>id: {data.id}</div>
      <div>
        <DetailH2>{data.title}</DetailH2>
      </div>
      <div>{data.content}</div>
    </DetailBox>
  );
};
const DetailBox = styled.div`
  display: flex;
  flex-direction: column;
  background-color: #a5cbf0;
  width: 500px;
  border-radius: 10px;
  padding: 30px 30px 60px 30px;
  color: rgb(43, 43, 43);
  box-shadow: 0px 3px 5px 0px #000000;
  position: absolute;
  top: 10%;
  left: 35%;
  font-size: 1.3vw;
  gap: 20px;
  word-break: break-all
`;
const DetailH2 = styled.h2`
  margin: 0;
  border-bottom: 1px solid rgba(0, 0, 0, 0.301);
`;
const DetailPinImg = styled.img`
  width: 100px;
  height: 100px;
  margin: 0 auto;
  position: absolute;
  left: 43%;
  top: -13%;
`;
const StyledLink = styled(Link)`
  margin-right: 450px;
`;
const DetailBackIcon = styled.img`
&:hover {
    scale: 1.15;
  }
  width: 50px;
  height: 50px;
  cursor: pointer;
  transition: scale 0.3s;
`
export default DetailPage;
