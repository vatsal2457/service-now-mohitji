import React, { useState } from 'react';
import styled from 'styled-components';
import Image from 'next/image';
import Logo1 from '../images/aablack (1).png';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <HeaderWrapper>
      <HeaderContainer>
        <Logo>
          <Image 
            src={Logo1}
            alt="ServiceNow Logo"
            width={150}
            height={40}
            style={{ objectFit: 'contain' }}
            priority
          />
        </Logo>
        <NavMenu isOpen={isMenuOpen}>
          <NavItem>
            <NavLink href="#">About</NavLink>
            <DropdownContent>
              <DropdownItem href="#">Overview</DropdownItem>
              <DropdownItem href="#">Vision & Mission</DropdownItem>
              <DropdownItem href="#">Our Story</DropdownItem>
              <DropdownItem href="#">Leadership Team</DropdownItem>
            </DropdownContent>
          </NavItem>
          <NavItem>
            <NavLink href="#">Services</NavLink>
            <DropdownContent>
              <DropdownItem href="#">IT Service Management</DropdownItem>
              <DropdownItem href="#">Customer Service Management</DropdownItem>
              <DropdownItem href="#">HR Service Delivery</DropdownItem>
              <DropdownItem href="#">Security Operations</DropdownItem>
              <DropdownItem href="#">Professional Services</DropdownItem>
              <DropdownItem href="#">Managed Services</DropdownItem>
              <DropdownItem href="#">Cloud Services</DropdownItem>
              <DropdownItem href="#">Infrastructure Management</DropdownItem>
            </DropdownContent>
          </NavItem>
          <NavItem>
            <NavLink href="#">Solutions</NavLink>
            <DropdownContent>
              <DropdownItem href="#">Product Engineering</DropdownItem>
              <DropdownItem href="#">SaaS & Cloud Solutions</DropdownItem>
              <DropdownItem href="#">Data Management</DropdownItem>
              <DropdownItem href="#">Web Technologies</DropdownItem>
              <DropdownItem href="#">ERP & CRM Integration</DropdownItem>
              <DropdownItem href="#">AI & Machine Learning</DropdownItem>
              <DropdownItem href="#">Digital Transformation</DropdownItem>
              <DropdownItem href="#">Business Process Automation</DropdownItem>
            </DropdownContent>
          </NavItem>
          <NavItem>
            <NavLink href="#">Industries</NavLink>
            <DropdownContent>
              <DropdownItem href="#">Banking & Financial Services</DropdownItem>
              <DropdownItem href="#">Healthcare & Life Sciences</DropdownItem>
              <DropdownItem href="#">Manufacturing</DropdownItem>
              <DropdownItem href="#">Retail & Consumer Goods</DropdownItem>
              <DropdownItem href="#">Technology & Software</DropdownItem>
              <DropdownItem href="#">Telecommunications</DropdownItem>
              <DropdownItem href="#">Energy & Utilities</DropdownItem>
              <DropdownItem href="#">Government & Public Sector</DropdownItem>
            </DropdownContent>
          </NavItem>
          <NavItem>
            <NavLink href="#">Career</NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="#">Contact Us</NavLink>
          </NavItem>
        </NavMenu>
        <MobileMenuButton onClick={() => setIsMenuOpen(!isMenuOpen)}>
          <span></span>
          <span></span>
          <span></span>
        </MobileMenuButton>
      </HeaderContainer>
    </HeaderWrapper>
  );
};

const HomePage = () => {
  return (
    <Container>
      <Header />
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

const HeaderWrapper = styled.header`
  background: white;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1000;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
`;

const HeaderContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 1rem 2rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Logo = styled.div`
  display: flex;
  align-items: center;
  height: 40px;
`;

const NavMenu = styled.ul<{ isOpen: boolean }>`
  display: flex;
  list-style: none;
  margin: 0;
  padding: 0;

  @media (max-width: 768px) {
    display: ${props => props.isOpen ? 'flex' : 'none'};
    flex-direction: column;
    position: absolute;
    top: 100%;
    left: 0;
    right: 0;
    background: white;
    padding: 1rem;
    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  }
`;

const NavItem = styled.li`
  position: relative;
  margin: 0 1rem;

  &:hover > div {
    display: block;
  }

  @media (max-width: 768px) {
    margin: 0.5rem 0;
  }
`;

const NavLink = styled.a`
  color: #333;
  text-decoration: none;
  font-weight: 500;
  padding: 0.5rem;
  transition: color 0.2s;

  &:hover {
    color: #1e3c72;
  }
`;

const DropdownContent = styled.div`
  display: none;
  position: absolute;
  background: white;
  min-width: 200px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  border-radius: 4px;
  padding: 0.5rem 0;
  z-index: 1;

  @media (max-width: 768px) {
    position: static;
    box-shadow: none;
    padding-left: 1rem;
  }
`;

const DropdownItem = styled.a`
  display: block;
  padding: 0.5rem 1rem;
  color: #333;
  text-decoration: none;
  transition: background-color 0.2s;

  &:hover {
    background-color: #f5f5f5;
    color: #1e3c72;
  }
`;

const MobileMenuButton = styled.button`
  display: none;
  background: none;
  border: none;
  cursor: pointer;
  padding: 0.5rem;

  span {
    display: block;
    width: 25px;
    height: 2px;
    background-color: #333;
    margin: 5px 0;
    transition: 0.2s;
  }

  @media (max-width: 768px) {
    display: block;
  }
`;

const Container = styled.div`
  width: 100%;
  min-height: 100vh;
  padding-top: 80px; // Add padding to account for fixed header
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