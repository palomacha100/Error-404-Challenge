import React from "react";
import { MapTo } from "@adobe/aem-react-editable-components";
import { FooterContainer, TextFooter } from "./FooterContent.styled";

const Footer = ({ footerContent }) => {
  return (
    <FooterContainer>
      <TextFooter>{footerContent}</TextFooter>
    </FooterContainer>
  );
};
Footer.defaultProps = {
  footerContent: "Digite um texto",
};

export default MapTo("reactapp/components/footer-content")(Footer);
