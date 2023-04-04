import { styled } from "@mui/system";
import { categories } from '@nft-landing-page/mockData.json'

const Grid = styled("div")({
  display: "grid",
  gridTemplateColumns: "repeat(auto-fill, minmax(19rem, 1fr))",
  width: "100%",
  rowGap: 20,
  columnGap: 10,
  marginBottom: '100px'
});

const Card = styled("div")({
  aspectRatio: "1.0614",
  display: "flex",
  flexDirection: "column",
  justifyContent: "space-around",
  alignItems: "center",
  background: "rgba(0,0,0,0.2)",
  padding: "20px",
  borderRadius: "2rem"
});

function Categories() {
  return (
    <Grid>
      {categories.map(({category}, i) => (
        <Card key={i}>
          <div
            style={{
              borderRadius: "2rem",
              height: "75%",
              width: "100%",
              background: "rgba(255,255,255,0.02)"
            }}
          />
          <h4 style={{ fontSize: 20 }}>{category}</h4>
        </Card>
      ))}
    </Grid>
  );
}

export default Categories;
