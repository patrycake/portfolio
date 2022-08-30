import React from "react";
import { Container, Grid, Button } from "../components/Common";
import styled from "styled-components";

function Contact() {
  return (
    <ContContainer id="contact">
      <Title>Get in Contact</Title>
      <ContactGrid>
        <Info>
          <Subtitle>Let's talk about everything</Subtitle>
          <Details>Don't like forms send me an email</Details>
        </Info>
        <Form>
          <Group>
            <Wrapper>
              <Input type="text" placeholder="Insert your name" />
            </Wrapper>
            <Wrapper>
              <Input type="email" placeholder="Insert your email" />
            </Wrapper>
          </Group>
          <Wrapper>
            <Input type="email" placeholder="Insert your subject" />
          </Wrapper>
          <Wrapper>
            <TextArea placeholder="Write your message" />
          </Wrapper>
          <Submit>Message Me!</Submit>
        </Form>
      </ContactGrid>
    </ContContainer>
  );
}

export default Contact;

const ContContainer = styled(Container)`
  padding-bottom: 6.25rem;
`;
const Title = styled.h2`
  font-size: var(--h2-font-size);
  margin-bottom: 2rem;
`;
const ContactGrid = styled(Grid)`
  grid-template-columns: 4fr 8fr;
  column-gap: 1.875rem;
`;
const Info = styled.div``;
const Subtitle = styled.h3`
  font-size: var(--h3-font-size);
`;
const Details = styled.p``;
const Form = styled.form``;
const Group = styled(Grid)`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  column-gap: 1.5rem;
`;
const Wrapper = styled.div`
  position: relative;
  margin-bottom: 1.875rem;
  height: 3.75rem;
`;
const Input = styled.input`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  box-shadow: var(--shadow);
  background-color: var(--container-color);
  color: var(--text-color);
  border: none;
  outline: none;
  border-radius: var(--border-radius);
  padding: 0.625rem 1.875rem;
  z-index: 1;
`;
const TextArea = styled.textarea`
  /* position: relative;
  top: 0;
  left: 0;
  right: 0; */
  /* width: 100%; */
  /* height: 100%; */
  box-shadow: var(--shadow);
  background-color: var(--container-color);
  color: var(--text-color);
  border: none;
  outline: none;
  border-radius: var(--border-radius);
  padding: 0.625rem 1.875rem;
  z-index: 1;
  resize: none;
  height: 10.25rem;
`;
const Submit = styled(Button)``;
