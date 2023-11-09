import { useParams } from "react-router-dom";
import {
  Card,
  CardBody,
  Stack,
  Heading,
  Text,
  Divider,
  CardFooter,
  ButtonGroup,
  Box,
} from "@chakra-ui/react";
import ItemCount from "./ItemCount";
import "./Styles.css";

const ItemDetail = ({ productos }) => {
  const { id } = useParams();

  const handleOnAdd = () => {};

  return (
    <>
          <Card className="styledCardDetail" boxShadow="dark-lg">
            <CardBody>
              <Stack mt="2" spacing="1" textAlign="center">
                <Box className="containerImgDetail">imagen</Box>
                <Heading size="md">{productos.name}</Heading>
              </Stack>
            </CardBody>
            <Text fontSize="18px">{productos.description}</Text>
            <Text fontSize="22px" fontWeight="700" color="brown" padding="1em">
              ${productos.price}
            </Text>
            <Divider />
            <CardFooter>
              <ButtonGroup className="styledButtonGroup">
                  <ItemCount productos = {productos} initial={1} onAdd={handleOnAdd} />
              </ButtonGroup>
            </CardFooter>
          </Card>
    </>
  );
};

export default ItemDetail;
