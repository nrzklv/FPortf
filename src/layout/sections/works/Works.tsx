import React from 'react';
import styled from "styled-components";
import SectionTitle from "../../../components/SectionTitle";
import Menu from "../../../components/menu/Menu";
import FlexWrapper from "../../../components/FlexWrapper";
import Work from "./work/Work";
import socialImg from "../../../assets/images/socialnetwork.webp"
import timerImg from "../../../assets/images/times.webp"

const worksItems = ["All", "Landing page", "React", "Spa"]

const Works = () => {
    return (
        <StyledWorks>
            <SectionTitle>My Works</SectionTitle>
            <Menu menuItems={worksItems}/>
            <FlexWrapper justify={"space-around"}>
                <Work src={socialImg}
                      title={"Social Network"}
                      text={"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim. Lorem ipsum dolor sit amet, consectetur adipisicing elit."}/>
                <Work src={timerImg}
                      title={"Timer"}
                      text={"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim. Lorem ipsum dolor sit amet, consectetur adipisicing elit  ut labore et dolore magna aliqua Ut enim"}/>
            </FlexWrapper>
        </StyledWorks>
    );
};

export default Works;

const StyledWorks = styled.section`
  min-height: 100vh;
  background-color: #1f1f20;
`