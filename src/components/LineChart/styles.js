import styled from "styled-components";

export const Container = styled.div`
  width: 740px;
  margin: 20px auto;
  background-color: #333333;
  border-radius: 4px;
  padding: 5px;
  border: 3px solid #444444;

  @media screen and (max-width: 740px) {
    width: 95%;
  }
`;
