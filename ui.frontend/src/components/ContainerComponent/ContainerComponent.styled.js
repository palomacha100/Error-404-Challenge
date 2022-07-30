import styled from "styled-components";

const ContainerContent = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  justify-content: left;
  align-items: left;
  height: 25rem;
  width: 28rem;
`;

const Title = styled.div`
  font-family: "Space Mono";
  height: 9rem;
  width: 27rem;
  font-style: normal;
  font-weight: 700;
  font-size: 3rem;
  line-height: 4.5rem;
  letter-spacing: -0.035em;
  color: #333333;
  margin: 2rem 0 0.5rem 0;
`;

const Text = styled.div`
  width: 18.5rem;
  height: 8rem;
  font-family: "Space Mono";
  font-style: normal;
  font-weight: 400;
  font-size: 1rem;
  line-height: 2rem;
  letter-spacing: -0.035em;
  color: #4f4f4f;
  margin: 1rem 0 0.5rem 0;
`;

const Button = styled.button`
  width: 9rem;
  height: 3rem;
  background: #333333;
  border: none;
  font-family: "Space Mono";
  font-style: normal;
  font-weight: 700;
  font-size: 0.7rem;
  line-height: 1rem;
  letter-spacing: -0.035em;
  text-transform: uppercase;
  color: #ffffff;
`;

export { ContainerContent, Title, Text, Button };
