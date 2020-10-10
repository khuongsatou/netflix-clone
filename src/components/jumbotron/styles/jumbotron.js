import styped from "styled-components/macro";

export const Inner = styped.section`
    display:flex;
    flex-direction: ${({ direction }) => direction};
    justify-content:center;
    max-width: 1100px;
    margin: auto;
    width: 100%;
     @media (max-width: 1000px) {
    flex-direction: column;
  }
`;
export const Title = styped.h1``;
export const SubTitle = styped.h2``;
export const Image = styped.img`
  max-width: 100%;
  height: auto;
`;

export const Container = styped.div``;
export const Pane = styped.div`
width: 50%`;
