import React from "react";
import { MapTo } from "@adobe/aem-react-editable-components";
import { ImageContainer, Image } from "./PrincipalImage.styled";

const PrincipalImage = ({ principalImage }) => {
  return (
    <ImageContainer>
      <Image src={principalImage && principalImage.src} />
    </ImageContainer>
  );
};
PrincipalImage.defaultProps = {
  principalImage: "Insira uma imagem aqui",
};

export default MapTo("reactapp/components/principal-image")(PrincipalImage);
