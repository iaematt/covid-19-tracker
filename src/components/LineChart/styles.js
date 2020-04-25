import styled from "styled-components";

export const Container = styled.div`
  width: 740px;
  margin: 20px auto;
  background-color: #333333;
  border-radius: 2px;
  padding: 5px;
  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.2);
  transition: all 0.2s ease-in-out;
  cursor: pointer;

  @media screen and (max-width: 740px) {
    width: 95%;
  }

  :hover {
    transform: scale(1.01);
  }
`;
