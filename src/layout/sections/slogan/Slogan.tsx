import React from 'react';
import styled from "styled-components";
import SectionTitle from "../../../components/SectionTitle";
import Button from "../../../components/Button";
import FlexWrapper from "../../../components/FlexWrapper";

const Slogan = () => {
    return (
        <StyledSlogan>
            <SectionTitle>
                I Am Available For Freelance
            </SectionTitle>
            <FlexWrapper justify={"center"}>
                <Button>Hire Me</Button>
            </FlexWrapper>
        </StyledSlogan>
    );
};

export default Slogan;

const StyledSlogan = styled.section`
  min-height: 50vh;
  background-color: #252527;
`