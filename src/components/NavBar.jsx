import React from "react";
import {
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  IconButton,
  Flex,
  Box,
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
            src="../../public/logoBlanco.png"
            alt="coffee"
            className="ImgLogo"
          />
        </Link>
      </Box>

      <Box className="containerButtons">
        <Box>
          <Link to={"/"}>
            <Menu>
              <MenuButton
                className="buttonCategory"
                background="transparent !"
                as={IconButton}
              >
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
              <MenuItem color="rgb(26, 19, 2)">
                <Link to={`/category/${"cafeMolido"}`}>Molido</Link>
              </MenuItem>
              <MenuItem color="rgb(26, 19, 2)">
                <Link to={`/category/${"cafeGranos"}`}>En Granos</Link>
              </MenuItem>
              <MenuItem color="rgb(26, 19, 2)">
                <Link to={`/category/${"cafeCapsulas"}`}>En Cápsulas</Link>
              </MenuItem>
            </MenuList>
          </Menu>
        </Box>

        <Box>
          <Menu>
            <MenuButton as={IconButton} className="buttonCategory">
              Infusiones
            </MenuButton>
            <MenuList>
              <MenuItem color="rgb(26, 19, 2)">
                <Link to={`/category/${"infusionesHebras"}`}>En hebras</Link>
              </MenuItem>
              <MenuItem color="rgb(26, 19, 2)">
                <Link to={`/category/${"infusionesSaquitos"}`}>
                  En saquitos
                </Link>
              </MenuItem>
            </MenuList>
          </Menu>
        </Box>

        <Box>
          <Menu>
            <MenuButton
              as={IconButton}
              className="buttonCategory"
              color="rgb(26, 19, 2)"
            >
              Maquinas
            </MenuButton>
            <MenuList>
              <Link to={`/category/${"maquinas"}`}>Cafeteras</Link>
            </MenuList>
          </Menu>
        </Box>
      </Box>

      <Box marginRight={"1em"}>
        <CartWidget />
      </Box>
    </Flex>
  );
};
export default NavBar;
