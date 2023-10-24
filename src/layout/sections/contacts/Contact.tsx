import React from 'react';
import styled from "styled-components";
import SectionTitle from "../../../components/SectionTitle";
import FlexWrapper from "../../../components/FlexWrapper";
import Button from "../../../components/Button";

const Contact = () => {
    return (
        <StyledContact>
            <SectionTitle>
                Contact
            </SectionTitle>
            <FlexWrapper justify={"center"}>
                <Form>
                    <Field placeholder={"name"}/>
                    <Field placeholder={"subject"}/>
                    <Field placeholder={"message"} as={"textarea"}/>
                    <Button type={"submit"}>Send Message</Button>
                </Form>
            </FlexWrapper>
        </StyledContact>
    );
};

export default Contact;

const StyledContact = styled.section`
  min-height: 50vh;
  background-color: #1f1f20;
`

const Form = styled.form`
  max-width: 500px;
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 16px;
`
const Field = styled.input`

`