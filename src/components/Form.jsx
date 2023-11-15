import { FormControl, FormLabel, Button, Input } from "@chakra-ui/react";
import { useState } from "react";
import { collection, addDoc, getFirestore } from "firebase/firestore";
import { Link } from "react-router-dom";

const Form = () => {
  const [nombre, setNombre] = useState("");
  const [email, setEmail] = useState("");
  const [telefono, setTelefono] = useState("");
  const [orderId, setOrderId] = useState(null);

  const db = getFirestore();
  const orderCollection = collection(db, "MiOrden");

  const isAlpha = (text) => /^[A-Za-z]+$/.test(text);
  const isNumeric = (text) => /^\d+$/.test(text);
  const isValidEmail = (email) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!nombre || !telefono || !email) {
      alert("Por favor, complete todos los campos.");
      return;
    }

    if (!isAlpha(nombre)) {
      alert("Por favor, ingrese solo letras en el nombre y apellido.");
      return;
    }

    if (!isNumeric(telefono)) {
      alert("Por favor, ingrese solo números en el teléfono.");
      return;
    }

    if (!isValidEmail(email)) {
      alert("Por favor, ingrese un correo electrónico válido.");
      return;
    }

    const order = {
      nombre,
      telefono,
      email,
    };

    addDoc(orderCollection, order)
      .then(({ id }) => {
        setOrderId(id);
        setNombre("");
        setTelefono("");
        setEmail("");
      })
      .catch((error) => {
        console.error("Error al guardar en la base de datos:", error);
      });
  };

  return (
    <div className="boxPagCart">
      <div className="containerForm">
        <h3 className="titleForm">
          Complete el formulario para terminar la compra.
        </h3>

        <FormControl action="" onSubmit={handleSubmit}>
          <FormLabel
            marginTop={"2"}
            fontWeight={"800"}
            color={"rgb(26, 19, 2)"}
          >
            Nombre y apellido
          </FormLabel>
          <Input
            type="text"
            value={nombre}
            onChange={(e) => setNombre(e.target.value)}
            placeholder="Ingrese nombre y apellido"
            bg={"white"}
          />

          <FormLabel
            marginTop={"2"}
            fontWeight={"800"}
            color={"rgb(26, 19, 2)"}
          >
            Telefono
          </FormLabel>
          <Input
            type="text"
            value={telefono}
            onChange={(e) => setTelefono(e.target.value)}
            placeholder="Ingrese su telefono"
            bg={"white"}
          />

          <FormLabel
            marginTop={"2"}
            fontWeight={"800"}
            color={"rgb(26, 19, 2)"}
          >
            Email
          </FormLabel>
          <Input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Ingrese su correo"
            bg={"white"}
          />
        </FormControl>

        <Button type="submit" className="buttonEnviar" onClick={handleSubmit}>
          Enviar
        </Button>

        {orderId && (
          <>
            <p className="parrafoOrden">
              Para hacer el seguimiento de su compra, le enviaremos un correo a
              su cuenta con el codigo obtenido.{" "}
            </p>
            <p className="numeroOrden">{orderId}</p>
            <Link to="/" className="buttonInicio">
              Inicio
            </Link>
          </>
        )}
      </div>
    </div>
  );
};

export default Form;
