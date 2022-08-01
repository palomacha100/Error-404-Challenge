import styled from "styled-components";

const ContainerContent = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  justify-content: left;
  align-items: left;
  height: 32.5rem;
  width: 100%;
  @media (max-width: 768px) {
    height: 21rem;
  }
`;

const Title = styled.div`
  font-family: "Space Mono";
  height: 7rem;
  width: 27rem;
  font-style: normal;
  font-weight: 700;
  font-size: 2.8rem;
  line-height: 3.8rem;
  letter-spacing: -0.035em;
  color: #333333;
  margin: 5rem 0 0.7rem 0;
  @media (max-width: 768px) {
    width: 100%;
    height: 6rem;
    font-weight: 700;
    font-size: 2.2rem;
    line-height: 3rem;
    margin: 1rem 0 0.7rem 0;
  }
`;

const Text = styled.div`
  width: 13rem;
  height: 7rem;
  font-family: "Space Mono";
  font-style: normal;
  font-weight: 400;
  font-size: 0.8rem;
  line-height: 1.8rem;
  letter-spacing: -0.035em;
  color: #4f4f4f;
  margin: 1rem 0 0.5rem 0;
`;

const Button = styled.button`
  width: 8.5rem;
  height: 2.5rem;
  background: #333333;
  border: none;
  font-family: "Space Mono";
  font-style: normal;
  font-weight: 700;
  font-size: 0.6rem;
  line-height: 1rem;
  letter-spacing: -0.035em;
  text-transform: uppercase;
  color: #ffffff;
  margin-bottom: 3rem;
  cursor: pointer;
  &:hover {
    background-color: #000000;
  }
`;

export { ContainerContent, Title, Text, Button };
