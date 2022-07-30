import React from "react";
import { Title, TitleContainer } from "./TitleContent.styled";
import { MapTo } from "@adobe/aem-react-editable-components";

const TitleContent = (props) => {
  const textdefault = "Digite seu texto aqui";
  return (
    <TitleContainer>
      <Title>{props.text ? props.text : textdefault}</Title>
    </TitleContainer>
  );
};

export default MapTo("reactapp/components/title-content")(TitleContent);
