import { styled } from "@mui/system";
import { Button, Link, Stack, Input } from "@mui/material";

const Grid = styled("div")({
  display: "grid",
  gridTemplateColumns: "repeat(3, 1fr)",
  background: "rgba(255,255,255,0.7)",
  width: "auto",
  gap: "1rem",
  padding: "50px"
});

function Upper() {
  return (
    <Grid style={{ color: "rgba(144,144,144)" }}>
      <Stack gap={5}>
        <div
          style={{
            width: "255px",
            height: "50px",
            background: "rgba(0,0,0,.2)"
          }}
        />
        <p style={{ fontSize: "1.125rem" }}>
          MahyuNFT is the largest NFTs Marketplace of Etherium (ETH). Buy,
          sell, and discover exclusive digital items.
        </p>
      </Stack>
      <Stack sx={{ justifyContent: "space-between" }}>
        <Link sx={{ fontSize: "1.125rem" }}>About Us</Link>
        <Link sx={{ fontSize: "1.125rem" }}>
          Frequently Asked Questions (FAQ)
        </Link>
        <Link sx={{ fontSize: "1.125rem" }}>Help Center</Link>
        <Link sx={{ fontSize: "1.125rem" }}>How to Buy and Sell</Link>
      </Stack>
      <Stack gap={3}>
        <p>Subscribe MahyuNFT for newsletter right now!</p>
        <Stack gap={1} direction="row">
          <div
            style={{
              display: 'flex',
              placeItems: 'center',
              paddingInline: "1.2rem",
              flexGrow: 1,
              background: "rgba(255,255,255,0.5)",
              borderRadius: "0.8rem"
            }}
          >
            <Input
              type="email"
              placeholder="Insert your email here"
              sx={{ fontSize: "1.125rem", width: "100%", height: "2rem" }}
            />
          </div>
          <Button
            variant="contained"
            sx={{
              width: "6rem",
              fontSize: "1.125rem",
              borderRadius: "0.8rem",
              height: "3.75rem"
            }}
          >
            Sent
          </Button>
        </Stack>
      </Stack>
    </Grid>
  )
}

export default Upper