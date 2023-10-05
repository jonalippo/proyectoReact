import React from "react";
import {
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuGroup,
  MenuDivider,
  IconButton,
  Flex,
  Box,
  Spacer,
} from "@chakra-ui/react";
import CartWidget from "./CartWidget";
import "./Styles.css";

const NavBar = () => {
  return (
    <Flex className="navbarStyled">
      <Box className="boxTitle">
        <h1>Futuro E-commers</h1>
      </Box>
      <Spacer />

      <Box className="containerButtons">
      <Box>
        <Menu>
          <MenuButton as={IconButton} className="buttonCategory">
            Prendas
          </MenuButton>
          <MenuList>
            <MenuGroup title="Pantalones" fontWeight={"800"}>
              <MenuItem>Largos</MenuItem>
              <MenuItem>Cortos</MenuItem>
            </MenuGroup>
            <MenuDivider />
            <MenuGroup title="Remeras" fontWeight={"800"}>
              <MenuItem>Manga larga</MenuItem>
              <MenuItem>Manga corta</MenuItem>
            </MenuGroup>
          </MenuList>
        </Menu>
      </Box>
      <Spacer />

      <Spacer />
      <Box>
        <Menu>
          <MenuButton as={IconButton} className="buttonCategory">
            {" "}
            Calzados
          </MenuButton>
          <MenuList>
            <MenuGroup title="Zapatillas" fontWeight={"800"}>
              <MenuItem>Deportivas</MenuItem>
              <MenuItem>Urbanas</MenuItem>
            </MenuGroup>
            <MenuDivider />
            <MenuGroup title="Zapatos" fontWeight={"800"}>
              <MenuItem>Cuero</MenuItem>
              <MenuItem>Gamuza</MenuItem>
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
