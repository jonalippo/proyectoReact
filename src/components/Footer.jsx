import { Link } from "react-router-dom";
import { Box } from "@chakra-ui/react";
import { PhoneIcon, EmailIcon,  } from '@chakra-ui/icons'

const Footer = () => {
  return (
    <div className="containerFooter">
      <Box className="boxImg">
        <Link to={"/home"}>
          <img
            src="../../public/houseCoffee1.png"
            alt="coffee"
            className="ImgLogo"
          />
        </Link>
      </Box>

      <div>
        <ul>
          <li className="contactos"> <PhoneIcon className="iconsFooter"/>Telefono: 2494623456</li>
          <li className="contactos"> <EmailIcon className="iconsFooter"/>Email: housecoffee@gmail.com</li>
          <li className="contactos"> <img src="/public/instagram.png" width="20px" className="iconsFooter" alt="instagram" />Instagram: House Coffe Tandil</li>
          <li className="contactos"> <img src="/public/ubicacion.png" width="20px" className="iconsFooter" alt="ubiacion" />Ubicación: Tandil</li>
        </ul>
      </div>
    </div>
  );
}

export default Footer;
