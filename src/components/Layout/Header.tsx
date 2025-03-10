import React from 'react';
import styled from 'styled-components';

const Header = () => {
  return (
    <HeaderContainer>
      <Nav>
        <Logo>ServiceNow Clone</Logo>
        <NavLinks>
          <NavItem>Solutions</NavItem>
          <NavItem>Platform</NavItem>
          <NavItem>Customers</NavItem>
          <NavItem>Resources</NavItem>
          <NavItem>Company</NavItem>
        </NavLinks>
        <ActionButtons>
          <LoginButton>Login</LoginButton>
          <TryButton>Try For Free</TryButton>
        </ActionButtons>
      </Nav>
    </HeaderContainer>
  );
};

const HeaderContainer = styled.header`
  background: white;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1000;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`;

const Nav = styled.nav`
  max-width: 1400px;
  margin: 0 auto;
  padding: 1rem 2rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Logo = styled.div`
  font-size: 1.5rem;
  font-weight: bold;
  color: #1e3c72;
`;

const NavLinks = styled.div`
  display: flex;
  gap: 2rem;
`;

const NavItem = styled.a`
  color: #333;
  text-decoration: none;
  font-weight: 500;
  cursor: pointer;
  transition: color 0.2s;

  &:hover {
    color: #1e3c72;
  }
`;

const ActionButtons = styled.div`
  display: flex;
  gap: 1rem;
`;

const LoginButton = styled.button`
  background: none;
  border: none;
  color: #1e3c72;
  font-weight: 500;
  cursor: pointer;
  padding: 0.5rem 1rem;
  
  &:hover {
    text-decoration: underline;
  }
`;

const TryButton = styled.button`
  background-color: #00c853;
  color: white;
  border: none;
  padding: 0.5rem 1.5rem;
  border-radius: 20px;
  font-weight: 500;
  cursor: pointer;
  transition: transform 0.2s;

  &:hover {
    transform: translateY(-2px);
  }
`;

export default Header; 