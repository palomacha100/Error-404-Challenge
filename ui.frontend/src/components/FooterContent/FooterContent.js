import React from "react";
import { MapTo } from "@adobe/aem-react-editable-components";
import { FooterContainer, TextFooter } from "./FooterContent.styled";

const Footer = ({ textBasic }) => {
  return (
    <FooterContainer>
      <TextFooter>{textBasic}</TextFooter>
    </FooterContainer>
  );
};
Footer.defaultProps = {
  textBasic: "Digite um texto",
};

export default MapTo("reactapp/components/footer-content")(Footer);
