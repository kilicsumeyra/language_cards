import { useState } from "react";
import Container from "react-bootstrap/Container";
import Image from "react-bootstrap/Image";

const Language = ({ name, img, options }) => {
  // const{name, img, options}=lang; //destr
  const [showDesc, setShowDesc] = useState(false);

  return (
    <Container
      className="rounded-3 p-4 h-100 lang-card"
      style={{ backgroundColor: "lavender" }}
      onClick={() => setShowDesc(!showDesc)}
    >
      {!showDesc && (
        <Container>
          <Image src={img} width="70%" className="lang-logo" />
          <h3 className="display-6">{name}</h3>
        </Container>
      )}
      {showDesc && (
        <ol className="h-100 d-flex flex-column justify-content-center">
          {options.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ol>
      )}
    </Container>
  );
};

export default Language;
