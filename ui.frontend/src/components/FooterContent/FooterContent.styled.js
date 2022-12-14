import styled from "styled-components";

const FooterContainer = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 2.5rem;
  width: 100%;
`;

const TextFooter = styled.div`
  font-family: "Montserrat";
  font-style: normal;
  font-weight: 500;
  font-size: 0.7rem;
  line-height: 1.063rem;
  text-align: center;
  color: #bdbdbd;
`;

export { FooterContainer, TextFooter };
