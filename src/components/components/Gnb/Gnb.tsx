import Image from "next/image";
import { Container, Title, UserArea, Wrapper } from "./Gnb.style";

const Gnb = () => {
  return (
    <Container>
      <Wrapper>
        <Title>Tech Blog Feed</Title>
        <UserArea>
          <Image
            alt="user_profile"
            src="/assets/account.png"
            width={24}
            height={24}
            priority={true}
          />
        </UserArea>
      </Wrapper>
    </Container>
  );
};

export default Gnb;
