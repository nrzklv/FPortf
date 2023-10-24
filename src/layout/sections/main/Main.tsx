import React from 'react';
import styled from "styled-components";
import Image from "../../../assets/images/photo.webp"
import FlexWrapper from "../../../components/FlexWrapper";

const Main = () => {
    return (
        <StyledMain>
            <FlexWrapper align={"center"} justify={"space-around"}>
                <div>
                <span>
                    Hi There
                </span>
                    <Name>
                        I am Svetlana Dyablo
                    </Name>
                    <MainTitle>
                        A Web Developer.
                    </MainTitle>
                </div>

                <Photo src={Image} alt=""/>
            </FlexWrapper>
        </StyledMain>
    );
};


export default Main;

const StyledMain = styled.div`
  background-color: #1f1f20;
`

const Name = styled.h2`
  color: #fff;
`

const MainTitle = styled.h1`
  color: #fff;
`

const Photo = styled.img`
  width: 350px;
  height: 430px;
  object-fit: cover;
`