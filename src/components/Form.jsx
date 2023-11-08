import {
  FormControl,
  FormLabel,
  FormHelperText,
  Divider,
  Button,
  Input,
} from "@chakra-ui/react";
import { useState } from "react";

const Form = () => {
  const [nombre, setNombre] = useState("");
  const [email, setEmail] = useState("");
  const [telefono, setTelefono] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    //Validacion para que los campos no queden vacios:
    alert("Nombre ingresado: "(nombre));
    alert("Email ingresado: "(email));
    alert("Telefono ingresado: "(telefono));
  };

  return (
    <div className="containerForm">
      <h3 className="titleForm">Complete el formulario para terminar la compra.</h3>
    
      <FormControl onSubmit={handleSubmit}>
        <FormLabel marginTop={"2"}>Nombre y apellido</FormLabel>
        <Input
          type="text"
          onChange={(e) => setNombre(e.target.value)}
          placeholder="Ingrese nombre y apellido"
        />
      <Divider />

      <FormLabel marginTop={"2"}>Telefono</FormLabel>
        <Input
          type="text"
          onChange={(e) => setTelefono(e.target.value)}
          placeholder="Ingrese su telefono"
        />
      <Divider/>

        <FormLabel marginTop={"2"}>Email</FormLabel>
        <Input
          type="email"
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Ingrese su correo"
        />
      </FormControl>
      <Divider />

      <Button type="submit" onClick={() => {alert("Gracias por su compra")}} className="buttonEnviar">Enviar</Button>
      
      </div>
  );
};

export default Form;
