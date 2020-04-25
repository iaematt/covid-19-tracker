import styled from "styled-components";

export const Container = styled.div`
  width: 740px;
  margin: 20px auto;

  display: flex;
  flex-direction: row;
  justify-content: space-between;

  @media screen and (max-width: 740px) {
    width: 95%;
  }
`;

export const Content = styled.div`
  width: 365px;
  background-color: #333333;
  border-radius: 2px;
  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.2);
  padding: 5px 10px 20px;
  transition: all 0.2s ease-in-out;
  cursor: pointer;

  @media screen and (max-width: 740px) {
    width: 49%;
    margin: 5px 0;
  }

  :hover {
    transform: scale(1.02);
  }
`;
