import styled from "styled-components";

const TitleContainer = styled.div`
  display: flex;
  flex: 1;
  height: 3rem;
  width: 12rem;
  justify-content: start;
`;

const Title = styled.h1`
  font-family: "Inconsolata";
  font-style: normal;
  font-weight: 700;
  font-size: 1.2rem;
  letter-spacing: -0.08em;
  text-transform: uppercase;
  text-align: left;
  color: #333333;
`;
export { Title, TitleContainer };
