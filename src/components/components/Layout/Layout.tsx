import { Container } from "./Layout.style";

interface Props {
  children: React.ReactNode;
}

const Layout = ({ children }: Props) => {
  return <Container>{children}</Container>;
};

export default Layout;
