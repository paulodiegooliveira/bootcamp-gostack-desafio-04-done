import styled from 'styled-components';

export const Post = styled.ul`
  list-style: none;
  border-top: 1px solid #eee;
`;

export const MainHeader = styled.section`
  background-color: #4a90e2;
`;

export const Header = styled.header`
  background-color: #4a90e2;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 20px;

  a {
    text-decoration: none;
    color: #fff;
    font-size: 14px;
    font-weight: bold;
  }
`;

export const Section = styled.section`
  padding: 20px;
  header {
    display: flex;
  }

  img {
    width: 30px;
    height: 30px;
    margin-right: 10px;
    border-radius: 50%;
  }

  header div {
    display: flex;
    flex-direction: column;
  }

  p {
    margin: 10px 10px 0;
    font-size: 14px;
    font-weight: 300;
  }

  header div small {
    font-size: 12px;
    font-weight: 300;
  }
`;

export const Comment = styled.section`
  display: flex;
  padding: 20px;

  header {
    display: flex;
  }

  img {
    width: 30px;
    height: 30px;
    margin-right: 10px;
    border-radius: 50%;
  }
  p {
    margin: 10px 0px 20px;
    font-size: 14px;
    font-weight: 300;
  }

  article {
    background-color: #eee;
    padding: 10px;
    border-radius: 20px;
    color: #3e3e3e;
  }
`;
