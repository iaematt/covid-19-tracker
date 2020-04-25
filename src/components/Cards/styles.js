import styled from "styled-components";

export const Container = styled.div`
  width: 750px;

  margin: 20px auto 10px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;

  @media screen and (max-width: 740px) {
    width: 95%;
    flex-direction: column;
  }
`;

export const Card = styled.div`
  width: 240px;
  margin: 0 5px;
  border-radius: 2px;
  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.2);
  background-color: #333333;
  border-radius: 2px;
  cursor: pointer;
  opacity: 0.9;

  display: flex;
  flex-direction: column;
  justify-content: space-between;

  transition: all 0.2s ease-in-out;

  :hover {
    opacity: 1;
    transform: scale(1.02);
  }

  @media screen and (max-width: 740px) {
    width: 100%;
    margin: 0 0 10px 0;
  }
`;

export const Header = styled.div`
  width: 100%;
  height: 100px;
  background: ${(props) => props.background};
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 2px 2px 0 0;
  cursor: pointer;
  transition: all 0.2s ease-in-out;

  span {
    color: ${(props) => props.background};
    font-size: 17px;
    background: #eeeeee;
    border: 2px solid #eeeeee;
    padding: 2px 5px;
    border-radius: 2px;
    font-weight: 700;
    text-transform: uppercase;
    transition: all 0.2s ease-in-out;
  }
`;

export const Content = styled.div`
  width: 100%;
  background: #333333;
  padding: 10px;

  strong {
    font-weight: 700;
    color: #999999;
    font-size: 12px;

    span {
      font-size: 10px;
      background: rgba(0, 0, 0, 0.4);
      padding: 2px 3px 0 5px;
      font-weight: 400;
      margin-top: -3px;
      margin-left: 5px;
      border-radius: 2px;
    }
  }

  h1,
  h2 {
    color: ${(props) => props.color};
  }

  h1 {
    font-size: 35px;
  }
`;

export const Footer = styled.div`
  width: 100%;
  background: #444444;
  padding: 10px;
  border-radius: 0 0 2px 2px;
  font-size: 11px;
  color: #888888;
`;
