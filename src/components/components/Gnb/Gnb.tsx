import Image from "next/image";
import { Container, Title, UserArea, Wrapper } from "./Gnb.style";

const Gnb = () => {
  return (
    <Container>
      <Wrapper>
        <Title>Tech Blog Feed</Title>
        <UserArea>
          <a
            href={`https://github.com/login/oauth/authorize?client_id=${
              process.env.GITHUB_CLIENT_ID ??
              process.env.NEXT_PUBLIC_GITHUB_CLIENT_ID
            }&scope=user,repo,admin:org`}
          >
            <Image
              alt="user_profile"
              src="/assets/account.png"
              width={24}
              height={24}
            />
          </a>
        </UserArea>
      </Wrapper>
    </Container>
  );
};

export default Gnb;
