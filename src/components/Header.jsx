import styled from "styled-components";

const Header = () => (
  <header>
    <Title>My Todo List 📝</Title>
  </header>
);

const Title = styled.div`
  display: flex;
  height: 70px;
  justify-content: center;
  align-items: center;
  font-size: 40px;
  margin: 10px 0 30px 0;
`;

export default Header;
