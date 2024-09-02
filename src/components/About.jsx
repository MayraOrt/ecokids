import React from 'react';
import styled from 'styled-components';

const About = () => {
    const handleLoginClick = () => {
      window.location.href = '/login';
    };
  
    const handleRegisterClick = () => {
      window.location.href = '/register';
    };
  return (
    <Container>
      <Content>
      <TextSection>
          <Title>Deine E-Learning-Plattform 
            <br></br>
            für Schule & Nachhaltigkeit!
          </Title>
          <ButtonContainer>
            <LoginButton className="login-button" onClick={handleLoginClick}>Login</LoginButton>
            <RegisterButton className="register-button" onClick={handleRegisterClick}>Register</RegisterButton>
          </ButtonContainer>
        </TextSection>
        <ImageSection>
          <StyledImage
            loading="lazy"
            srcSet="
              https://cdn.builder.io/api/v1/image/assets/TEMP/c23177c5e8275c21e6d3d820c91b0ab77ff356a82b4a5db8a57b68d5b079fefc?width=100 100w,
              https://cdn.builder.io/api/v1/image/assets/TEMP/c23177c5e8275c21e6d3d820c91b0ab77ff356a82b4a5db8a57b68d5b079fefc?width=200 200w,
              https://cdn.builder.io/api/v1/image/assets/TEMP/c23177c5e8275c21e6d3d820c91b0ab77ff356a82b4a5db8a57b68d5b079fefc?width=400 400w,
              https://cdn.builder.io/api/v1/image/assets/TEMP/c23177c5e8275c21e6d3d820c91b0ab77ff356a82b4a5db8a57b68d5b079fefc?width=800 800w,
              https://cdn.builder.io/api/v1/image/assets/TEMP/c23177c5e8275c21e6d3d820c91b0ab77ff356a82b4a5db8a57b68d5b079fefc?width=1200 1200w,
              https://cdn.builder.io/api/v1/image/assets/TEMP/c23177c5e8275c21e6d3d820c91b0ab77ff356a82b4a5db8a57b68d5b079fefc?width=1600 1600w,
              https://cdn.builder.io/api/v1/image/assets/TEMP/c23177c5e8275c21e6d3d820c91b0ab77ff356a82b4a5db8a57b68d5b079fefc?width=2000 2000w
            "
            sizes="(max-width: 600px) 100vw, 700px"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/c23177c5e8275c21e6d3d820c91b0ab77ff356a82b4a5db8a57b68d5b079fefc"
            alt="Urlaubsplanung Illustration"
          />
        </ImageSection>
      </Content>
    </Container>
  );
};

export default About;

/* Styled Components */

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: rgba(245, 232, 232, 1);
  padding: 20px;
`;


const Title = styled.h1`
  font-size: 2.3rem;
  margin: 0;
  color: rgba(237, 84, 29, 1);
    padding: 1rem 6rem;
`;



const Content = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  width: 100%;
`;

const TextSection = styled.div`
  flex: 2;
  padding-right: 20px;
`;

const ButtonContainer = styled.div`
  display: flex;
  flex-direction: column; /* Buttons untereinander */
  gap: 10px;
  margin-top: 20px;
    padding: 1rem 9rem;
`;

const LoginButton = styled.button`
  width: 300px;
  height: 40px;
  border: none;
  border-radius: 30px;
  background-color: rgba(202, 180, 239, 1);
  color: white;
  font-size: 1rem;
  font-weight: 500;
  cursor: pointer;
  transition: background-color 0.3s ease;
  padding: 0; /* Kein zusätzliches Padding */
  margin-top: 20px;
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
  white-space: nowrap;

  &:hover {
    background-color: #fbcfe8;
    color: rgba(72, 0, 144, 1);
  }
`;

const RegisterButton = styled(LoginButton)`
  background-color: #fbbf24;
  border: 5px solid #fbbf24;

  &:hover {
    background-color: #fbcfe8;
    color: rgba(72, 0, 144, 1);
  }
`;


const ImageSection = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const StyledImage = styled.img`
    width: 90%; /* Das Bild auf die volle Breite des Containers setzen */
  max-width: 800px; /* Maximale Breite des Bildes */
  height: auto;
  border-radius: 8px;
  object-fit: cover;

`;