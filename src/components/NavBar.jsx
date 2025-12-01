import React, { useState } from "react";
import {
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  IconButton,
  Flex,
  Box,
  useDisclosure,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Button,
} from "@chakra-ui/react";
import CartWidget from "./CartWidget";
import "./Styles.css";
import { Link } from "react-router-dom";
import { getAuth, signOut } from "firebase/auth";
import { app } from "../firebase";

const auth = getAuth(app);

const NavBar = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [modalMessage, setModalMessage] = useState("");

  const handleLogout = async () => {
    try {
      await signOut(auth);
      setModalMessage("Sesión cerrada correctamente ✅");
      onOpen();
    } catch (error) {
      setModalMessage("Error al cerrar sesión: " + error.message);
      onOpen();
    }
  };

  return (
    <Flex className="navbarStyled">
      
        <Link to={"/"}>
          <img
            src="../../public/logoBlanco.png"
            alt="coffee"
            className="ImgLogo"
          />
        </Link>

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

      <Box className="containerCartLogin">
      <Box>
        <Link to={"/login"} as={IconButton}>
          <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24">
          <path fill="#ffffff" d="M12 21v-2h7V5h-7V3h7q.825 0 1.413.588T21 5v14q0 .825-.587 1.413T19 21zm-2-4l-1.375-1.45l2.55-2.55H3v-2h8.175l-2.55-2.55L10 7l5 5z"/></svg>
        </Link>
      </Box>
        <CartWidget />
      </Box>

      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Estado de sesión</ModalHeader>
          <ModalBody>{modalMessage}</ModalBody>
          <ModalFooter>
            <Button colorScheme="blue" onClick={onClose}>
              Cerrar
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </Flex>
  );
};
export default NavBar;
