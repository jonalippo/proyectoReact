import {
  Card,
  CardBody,
  Stack,
  Heading,
  Text,
  Divider,
  CardFooter,
  ButtonGroup,
  Image,
} from "@chakra-ui/react";
import ItemCount from "./ItemCount";
import "./Styles.css";

const ItemDetail = ({ producto }) => {
  return (
    <>
      <Card className="styledCardDetail" boxShadow="dark-lg">
        <CardBody>
          <Stack mt="2" spacing="1" textAlign="center">
            <Image className="containerImgDetail" src={producto.imagen}></Image>
            <Heading size="md" color="white">
              {producto.name}
            </Heading>
          </Stack>
        </CardBody>
        <Text fontSize="18px" color="white">
          {producto.description}
        </Text>
        <Text fontSize="22px" fontWeight="700" color="#af7a18" padding="1em">
          ${producto.price}
        </Text>
        <Divider />
        <CardFooter>
          <ButtonGroup className="styledButtonGroup">
            <ItemCount producto={producto} />
          </ButtonGroup>
        </CardFooter>
      </Card>
    </>
  );
};

export default ItemDetail;
