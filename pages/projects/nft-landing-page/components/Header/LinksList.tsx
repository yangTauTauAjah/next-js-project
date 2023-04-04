import { FlexSpaceBetweenCentered } from "..";
import { Link } from "@mui/material";
import { styled } from "@mui/system";

export const Main = styled(FlexSpaceBetweenCentered)(({ theme }) => ({
  justifyContent: "initial",
  gap: "2.5rem"
}));

function LinksList() {
  return (
    <Main>
      <Link sx={{ color: "gray", textDecoration: "none", cursor: "pointer" }}>
        Auction
      </Link>
      <Link sx={{ color: "gray", textDecoration: "none", cursor: "pointer" }}>
        Community
      </Link>
      <Link sx={{ color: "gray", textDecoration: "none", cursor: "pointer" }}>
        Explore
      </Link>
    </Main>
  );
}

export default LinksList;
