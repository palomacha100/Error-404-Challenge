import React from "react"
import { Text, BigTextContainer } from "./BigText.styled"
import { MapTo } from "@adobe/aem-react-editable-components"

const BigText = (props) => {
  const textdefault = "Digite seu texto aqui";
  return (
    <BigTextContainer>
      <Text>{props.text ? props.text : textdefault}</Text>;
    </BigTextContainer>
  )
}

export default MapTo("reactapp/components/big-text")(BigText)
