import React from "react";
import styled from "styled-components";

const Box = styled.div`
    display: flex;
    width: 100%;
    height: 10vh;
    background-color: white;
    justify-content: space-between;
    align-items: center;
    z-index: 10;

    @media (max-width: 768px) {
        justify-content: center;
        height: 4rem;
    }
`

const Menu = styled.div`
    display: flex;
`

const Logo = styled.button`
    font-size: 2rem;
    outline: none;
    background: none;
    border: none;
    padding: 1rem;
    font-family: 'Scheherazade New', serif;
    font-weight: 600;
`

const Button = styled.button`
    height: 3em;
    font-size: 1rem;
    justify-content: center;
    padding: 0.5rem 1rem;
    outline: none;
    background: none;
    border: none;
    border-radius: 4px;
    display: block;
    box-sizing: inherit;
    font-family: 'Times New Roman', Times, serif;

    &:hover {
        font-weight: 600;
    }

    @media (max-width: 768px) {
        display: none;
    }

`

function Header() {
  return (
    <Box>
        <Logo>EFUB</Logo>
        <Menu>
            <Button>About</Button>
            <Button>Contents</Button>
            <Button>Contact</Button>
        </Menu>
    </Box>
  );
}

export default Header;
