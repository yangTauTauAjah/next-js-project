import { createTheme, ThemeProvider } from "@mui/material";
import { themeSettings } from "@/public/nft-landing-page/theme";
import Header from "./Layout/Header";
import Footer from "./Layout/Footer";
import Content from "./Layout/Content";

const Theme = createTheme(themeSettings);

function App() {
  return (
    <ThemeProvider theme={Theme}>
      <Header />
      <Content />
      <Footer />
    </ThemeProvider>
  );
}

export default App;
