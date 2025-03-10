import React from 'react';
import styled from 'styled-components';

const HomePage = () => {
  return (
    <Container>
      <Hero>
        <HeroContent>
          <Title>Transform Your Business with Digital Workflows</Title>
          <Subtitle>
            Accelerate your digital transformation with the platform that connects people,
            functions, and systems across your organization
          </Subtitle>
          <CTAButton>Get Started</CTAButton>
        </HeroContent>
      </Hero>

      <FeaturesSection>
        <SectionTitle>Why Choose Our Platform</SectionTitle>
        <FeaturesGrid>
          <FeatureCard>
            <h3>IT Service Management</h3>
            <p>Streamline and automate IT services delivery</p>
          </FeatureCard>
          <FeatureCard>
            <h3>Customer Service</h3>
            <p>Create exceptional customer experiences</p>
          </FeatureCard>
          <FeatureCard>
            <h3>HR Service Delivery</h3>
            <p>Transform the employee experience</p>
          </FeatureCard>
          <FeatureCard>
            <h3>Security Operations</h3>
            <p>Respond faster to security incidents</p>
          </FeatureCard>
        </FeaturesGrid>
      </FeaturesSection>
    </Container>
  );
};

const Container = styled.div`
  width: 100%;
  min-height: 100vh;
`;

const Hero = styled.div`
  background: linear-gradient(135deg, #1e3c72 0%, #2a5298 100%);
  height: 80vh;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  padding: 0 2rem;
`;

const HeroContent = styled.div`
  max-width: 1200px;
  text-align: center;
`;

const Title = styled.h1`
  font-size: 3.5rem;
  font-weight: bold;
  margin-bottom: 1.5rem;
`;

const Subtitle = styled.p`
  font-size: 1.5rem;
  margin-bottom: 2rem;
  max-width: 800px;
  margin-left: auto;
  margin-right: auto;
`;

const CTAButton = styled.button`
  background-color: #00c853;
  color: white;
  padding: 1rem 2.5rem;
  border: none;
  border-radius: 30px;
  font-size: 1.2rem;
  cursor: pointer;
  transition: transform 0.2s;

  &:hover {
    transform: translateY(-2px);
  }
`;

const FeaturesSection = styled.section`
  padding: 5rem 2rem;
  background-color: #f5f5f5;
`;

const SectionTitle = styled.h2`
  text-align: center;
  font-size: 2.5rem;
  margin-bottom: 3rem;
`;

const FeaturesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 2rem;
  max-width: 1200px;
  margin: 0 auto;
`;

const FeatureCard = styled.div`
  background: white;
  padding: 2rem;
  border-radius: 10px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  transition: transform 0.2s;

  &:hover {
    transform: translateY(-5px);
  }

  h3 {
    font-size: 1.5rem;
    margin-bottom: 1rem;
    color: #1e3c72;
  }

  p {
    color: #666;
    line-height: 1.6;
  }
`;

export default HomePage; 