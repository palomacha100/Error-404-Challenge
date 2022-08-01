import styled from "styled-components";

const ImageContainer = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 24rem;
  width: 27rem;
  @media (max-width: 768px) {
    width: 100%;
    height: 12rem;
  }
`;

const Image = styled.img`
  width: 22rem;
  @media (max-width: 768px) {
    width: 12rem;
  }
`;

export { ImageContainer, Image };
