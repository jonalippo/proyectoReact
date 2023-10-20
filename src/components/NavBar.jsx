import React from "react";
import {
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuGroup,
  IconButton,
  Flex,
  Box,
  Spacer,
} from "@chakra-ui/react";
import CartWidget from "./CartWidget";
import "./Styles.css";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <Flex className="navbarStyled">
      <Box className="boxImg">
        <Link to={"/home"}>
          <img
            src="../../public/houseCoffee1.png"
            alt="coffee"
            className="ImgLogo"
          />
        </Link>
      </Box>
      <Spacer />

      <Box className="containerButtons">
        <Box>
          <Link to={"/"}>
            <Menu>
              <MenuButton className="buttonCategory" background="transparent !" as={IconButton} >
                Inicio
              </MenuButton>
            </Menu>
          </Link>
        </Box>

        <Box>
          <Menu>
            <MenuButton as={IconButton} className="buttonCategory">
              Café
            </MenuButton>
            <MenuList>
              <MenuGroup>
                <MenuItem>Café en grano</MenuItem>
                <MenuItem>Café molido</MenuItem>
                <MenuItem>Café en cápsulas</MenuItem>
              </MenuGroup>
            </MenuList>
          </Menu>
        </Box>

        <Box>
          <Menu>
            <MenuButton as={IconButton} className="buttonCategory">
              Infusiones
            </MenuButton>
            <MenuList>
              <MenuGroup>
                <MenuItem>Té en Hebras</MenuItem>
                <MenuItem>Té en saquitos</MenuItem>
              </MenuGroup>
            </MenuList>
          </Menu>
        </Box>

        <Box>
          <Menu>
            <MenuButton as={IconButton} className="buttonCategory">
              Maquinas
            </MenuButton>
            <MenuList>
              <MenuGroup>
                <MenuItem>Maquinas de cápsulas</MenuItem>
                <MenuItem>Espresso</MenuItem>
                <MenuItem>Cafeteras Italianas</MenuItem>
                <MenuItem>Molinos</MenuItem>
                <MenuItem>Con filtro</MenuItem>
              </MenuGroup>
            </MenuList>
          </Menu>
        </Box>
      </Box>

      <Spacer />

      <Box marginRight={"1em"}>
        <CartWidget />
      </Box>
    </Flex>
  );
};
export default NavBar;
