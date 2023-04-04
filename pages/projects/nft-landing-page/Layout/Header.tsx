import { Button } from "@mui/material";
import { styled } from "@mui/system";
import { LinksList } from '../components/Header'
import { FlexSpaceBetweenCentered } from "@/components";

const ButtonStyle = {
  height: "60px",
  width: "164px",
  borderRadius: "25px",
  fontSize: "1rem"
}

const Main = styled(FlexSpaceBetweenCentered)(({ theme }) => ({
  width: 'auto',
  height: theme.spacing(10),
  paddingInline: theme.spacing(6.2)
}));

function Header() {
  return (
    <Main>
      Test
      <LinksList />
      <Button sx={ButtonStyle} variant="contained"> My Wallet</Button>
    </Main>
  );
}

export default Header;
