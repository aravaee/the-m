import React from "react";
import styled from "styled-components";

const Section = styled.section`
  width: 100%;
  height: 100%;
  /* background-color: #323232; */
  padding: 1rem calc((100vw - 1250px) / 2) 0rem calc((100vw - 1250px) / 2);
  @media screen and (max-width: 1310px) {
    padding: 1rem 2rem;
  }
`;

const Container = styled.div`
  /* padding: 0rem calc((100vw - 1300px) / 2); */
  /* padding: 0 1rem; */
  display: flex;
  border-radius: 28px;
  position: relative;
  border: 2px solid #323232;
  /* background-color: rgba(255, 255, 255, 0.534); */
  background-color: #519872;
  backdrop-filter: blur(10px);
`;

const DetailsContainer = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  flex: 1;
  align-items: center;
  justify-content: center;
  padding: 2rem 0;
`;

const InnerContainer = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 90%;
`;

const Header = styled.h1`
  margin: 0;
  color: #323232;
  font-weight: 700;
  font-size: clamp(2rem, 4vw, 3rem);
`;

const SubHeader = styled.h3`
  margin: 10px 0;
  color: #e6e6e7;
  font-weight: 700;
  font-size: clamp(1rem, 2.5vw, 1.8rem);
`;

const Text = styled.p`
  color: #e6e6e7;
  font-weight: 500;
  /* font-size: 20px; */
`;

const FormGroup = styled.div`
  display: flex;
  position: relative;
  height: 3.5rem;
  margin-top: 1em;
  @media screen and (max-width: 490px) {
    height: 2.5rem;
  }
`;

const EmailInput = styled.input`
  outline: none;
  border: none;
  background-color: #e6e6e7;
  padding-left: 1em;
  padding-right: 1em;
  border-bottom-left-radius: 16px;
  border-top-left-radius: 16px;
  border: 1px solid #323232;
  font-size: clamp(0.7rem, 2vw, 1.5rem);
  color: #323232;

  height: 100%;
  width: 100%;

  &::placeholder {
    color: #272727;
    opacity: 0.5;
  }
  @media screen and (max-width: 768px) {
    font-size: clamp(0.8rem, 3.8vw, 1.5rem);
  }
`;

const SubscribeButton = styled.button`
  /* position: absolute;
  right: 100px;
  top: 0; */
  height: 100%;
  border: none;
  outline: none;
  color: #e6e6e7;
  background-color: #323232;
  font-size: 1.2rem;
  font-weight: 500;
  cursor: pointer;
  transition: all 300ms ease-in-out;
  border-bottom-right-radius: 16px;
  border-top-right-radius: 16px;
  padding: 0 10px;

  &:hover {
    background-color: #000000;
  }

  @media screen and (max-width: 490px) {
    width: 6rem;
    font-size: 1rem;
  }
`;

const SideImageContainer = styled.div`
  max-width: 45%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex: 1;
  position: relative;
  background: #e6e6e7;
  /* background: linear-gradient(217deg, #ba3a33 0%, #b34f4a 100%); */
  clip-path: polygon(0 0, 100% 0, 100% 100%, 15% 100%);
  border-top-right-radius: 26px;
  border-bottom-right-radius: 26px;
  /* padding-right: rem; */

  @media screen and (max-width: 768px) {
    display: none;
  }
`;

const Image = styled.div`
  width: auto;
  height: 12em;

  img {
    width: auto;
    height: 100%;
  }
`;

const Signup = ({ heading, body, image }) => {
  return (
    <Section>
      <Container>
        <DetailsContainer>
          <InnerContainer>
            <Header>{heading}</Header>
            <SubHeader>Subscribe to our newsletter!</SubHeader>
            <Text>{body}</Text>
            <FormGroup>
              <EmailInput type="text" placeholder="name@email.ca" />
              <SubscribeButton to="/">Subscribe</SubscribeButton>
            </FormGroup>
          </InnerContainer>
        </DetailsContainer>
        <SideImageContainer>
          <Image>
            <img src={image} alt="newsletter" />
          </Image>
        </SideImageContainer>
      </Container>
    </Section>
  );
};

export default Signup;
