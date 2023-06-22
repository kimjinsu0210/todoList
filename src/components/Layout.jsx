import styled from "styled-components";

const Layout = ({ children }) => <LayoutBox>{children}</LayoutBox>;

const LayoutBox = styled.div`
  max-width: 1200px;
  min-width: 800px;
  margin: 0 auto;
`;

export default Layout;
