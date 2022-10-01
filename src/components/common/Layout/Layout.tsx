import Gnb from "../Gnb/Gnb";
import Footer from "../Footer/Footer";
import { Container } from "./Layout.style";

interface Props {
  children: React.ReactNode;
}

const Layout = ({ children }: Props) => {
  return (
    <Container>
      <Gnb />
      {children}
      <Footer />
    </Container>
  );
};

export default Layout;
