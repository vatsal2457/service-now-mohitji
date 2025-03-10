import React from 'react';
import styled from 'styled-components';
import Header from './Header';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <LayoutContainer>
      <Header />
      <Main>{children}</Main>
      <Footer>
        <FooterContent>
          <FooterSection>
            <h4>Company</h4>
            <FooterLink>About Us</FooterLink>
            <FooterLink>Careers</FooterLink>
            <FooterLink>Press</FooterLink>
          </FooterSection>
          <FooterSection>
            <h4>Resources</h4>
            <FooterLink>Documentation</FooterLink>
            <FooterLink>Blog</FooterLink>
            <FooterLink>Community</FooterLink>
          </FooterSection>
          <FooterSection>
            <h4>Support</h4>
            <FooterLink>Help Center</FooterLink>
            <FooterLink>Contact Us</FooterLink>
            <FooterLink>Status</FooterLink>
          </FooterSection>
          <FooterSection>
            <h4>Legal</h4>
            <FooterLink>Privacy Policy</FooterLink>
            <FooterLink>Terms of Service</FooterLink>
            <FooterLink>Security</FooterLink>
          </FooterSection>
        </FooterContent>
        <Copyright>
          © {new Date().getFullYear()} ServiceNow Clone. All rights reserved.
        </Copyright>
      </Footer>
    </LayoutContainer>
  );
};

const LayoutContainer = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
`;

const Main = styled.main`
  flex: 1;
  margin-top: 64px; // Height of the header
`;

const Footer = styled.footer`
  background-color: #1e3c72;
  color: white;
  padding: 4rem 2rem 2rem;
`;

const FooterContent = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 2rem;
`;

const FooterSection = styled.div`
  h4 {
    font-size: 1.2rem;
    margin-bottom: 1rem;
  }
`;

const FooterLink = styled.a`
  display: block;
  color: #ffffff99;
  text-decoration: none;
  margin-bottom: 0.5rem;
  cursor: pointer;
  transition: color 0.2s;

  &:hover {
    color: white;
  }
`;

const Copyright = styled.div`
  text-align: center;
  margin-top: 3rem;
  padding-top: 2rem;
  border-top: 1px solid #ffffff33;
  color: #ffffff99;
`;

export default Layout; 