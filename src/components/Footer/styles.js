import styled from "styled-components";

export const Container = styled.div`
  width: 740px;
  margin: 20px auto 50px;
  background: #efefef;
  padding: 30px 0;
  color: #8c8c8c;
  border-radius: 2px;
  font-size: 12px;
  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.2);

  p {
    text-align: center;
  }

  a {
    color: rgba(51, 51, 51, 0.9);
    fill: rgba(51, 51, 51, 0.9);

    transition: all 0.2s ease-in-out;
    -webkit-transition: all 0.2s ease-in-out;
    -moz-transition: all 0.2s ease-in-out;
  }

  a:hover {
    color: #ed2a4c;
    fill: #ed2a4c;
  }

  @media screen and (max-width: 740px) {
    width: 95%;
  }
`;

export const Icons = styled.div`
  margin-bottom: 25px;
  display: flex;
  flex-direction: row;
  justify-content: center;

  span {
    width: 1px;
    height: 15px;
    display: block;
    background: #dbdbdb;
    margin: 1px 10px;
  }
`;
