import HeroSection from "../components/Content/HeroSection";
import Product from "../components/Content/Product";
import Categories from "../components/Content/Categories";
import { styled } from "@mui/system";

const Main = styled("div")({
  display: "flex",
  flexDirection: 'column',
  gap: '100px',
  alignItems: 'center',
  width: "90%",
  marginInline: "auto",
});

function Content() {
  return (
    <Main>
      <HeroSection />
      <Product />
      <Categories />
    </Main>
  )
}

export default Content