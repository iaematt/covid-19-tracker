import styled from "styled-components";

export const Container = styled.div`
  width: 750px;
  height: 210px;

  margin: 20px auto 10px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;

  @media screen and (max-width: 740px) {
    width: 95%;
    flex-direction: column;
    height: auto;
  }
`;

export const Card = styled.div`
  width: 240px;
  margin: 0 5px;
  height: 200px;
  border-radius: 4px;
  padding: 10px;
  border: 3px solid #444444;
  background-color: #333333;

  display: flex;
  flex-direction: column;
  justify-content: space-between;

  @media screen and (max-width: 740px) {
    width: 100%;
    margin: 0 0 10px 0;
  }
`;

export const Title = styled.h1`
  border: 2px solid ${(props) => props.color};
  background: ${(props) => props.color};
  width: fit-content;
  font-size: 13px;
  padding: 2px 7px;
  border-radius: 2px;
  color: #333333;
  text-transform: uppercase;
  font-weight: 500;
`;

export const Numbers = styled.h1`
  color: ${(props) => props.color};
  font-size: 45px;
`;

export const Info = styled.div`
  font-size: 11px;
  color: #999999;
  font-style: italic;
`;
