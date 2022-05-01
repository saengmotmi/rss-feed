import { Container } from "./Footer.style";

const Footer = () => {
  return (
    <Container>
      ©{" "}
      <a href="https://github.com/saengmotmi" target="_blank" rel="noreferrer">
        saengmotmi
      </a>
      , Built with Next.js
    </Container>
  );
};

export default Footer;
