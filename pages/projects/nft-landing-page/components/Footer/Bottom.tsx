
import { Stack } from "@mui/material";

function Bottom() {
  return (
    <Stack
      direction="row"
      gap={3}
      style={{ background: "rgba(114,114,114,1)", padding: "20px" }}
    >
      <p style={{ marginRight: "auto" }}>© 2023 MahyuNFT, Inc</p>
      <p>Privacy Policy</p>
      <p>Terms of Service</p>
    </Stack>
  )
}

export default Bottom