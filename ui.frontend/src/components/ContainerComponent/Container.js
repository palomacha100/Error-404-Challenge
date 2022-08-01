import React from "react";
import { MapTo } from "@adobe/aem-react-editable-components";
import {
  ContainerContent,
  Title,
  Text,
  Button,
} from "./ContainerComponent.styled";

const Container = ({ titleBasic, textBasic, buttonBasic }) => {
  return (
    <ContainerContent>
      <Title>{titleBasic}</Title>
      <Text>{textBasic}</Text>
      <Button>{buttonBasic}</Button>
    </ContainerContent>
  );
};
Container.defaultProps = {
  titleBasic: "Digite um título",
  textBasic: "Digite um texto",
  buttonBasic: "Digite um texto para o botão",
};

export default MapTo("reactapp/components/container-component")(Container);
