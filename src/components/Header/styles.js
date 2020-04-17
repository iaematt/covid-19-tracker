import styled from "styled-components";

export const Nav = styled.header`
  width: 100%;
  height: 50px;
  background-color: #333333;
`;

export const Container = styled.div`
  width: 740px;
  margin: 0 auto;
  height: 50px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;

  @media screen and (max-width: 740px) {
    width: 95%;
  }
`;

export const Logo = styled.img`
  width: 145px;
  display: flex;
  align-self: center;
`;

export const Menu = styled.div`
  padding-left: 10px;
  height: 50px;
  line-height: 50px;
`;

export const Social = styled.div`
  height: 50px;
  line-height: 60px;

  svg {
    margin-left: 5px;
  }

  a svg {
    fill: #999999;
    transition: all 0.2s ease-in-out;
    -webkit-transition: all 0.2s ease-in-out;
    -moz-transition: all 0.2s ease-in-out;
  }
  a:hover svg {
    fill: #ed2a4c;
  }
`;
