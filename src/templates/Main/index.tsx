import { Container } from "../../components/Container";
import { Footer } from "../../components/Footer";
import { Logo } from "../../components/Logo";
import { Menu } from "../../components/Menu";

type MainProps = {
    children: React.ReactNode;
}
export function Main({ children }: MainProps) {
  return (
    <>
      <Container>
        <Logo />
      </Container>

      <Container>
        <Menu />
      </Container>

     {children}

      <Container>
        <Footer/>
      </Container>
    </>
  );
}
