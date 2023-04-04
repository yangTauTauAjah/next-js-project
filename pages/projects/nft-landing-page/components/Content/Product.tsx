import React, { useRef, useEffect } from "react";
import { styled } from "@mui/system";
import { useTheme } from "@mui/material";
import { Button, Link, Avatar, Stack } from "@mui/material";
import { newAuction, categories } from "@nft-landing-page/mockData.json";

const Recommendation = styled("div")({
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  width: "100%"
});

const BigCard = styled("div")({
  borderRadius: "2rem",
  display: "flex",
  flexDirection: "column",
  justifyContent: "space-between",
  width: "40vw",
  aspectRatio: "0.674",
  background: "rgba(0,0,0,0.3)",
  color: "rgba(255,255,255,0.2)",
  padding: "40px"
});

const Card = styled("div")({
  display: "flex",
  gap: "20px",
  borderRadius: "12px",
  alignItems: "center",
  padding: "20px",
  width: "30.5vw",
  aspectRatio: "3.142",
  fontSize: "1rem",
  background: "rgba(0,0,0,0.3)",
  color: "rgba(255,255,255,0.2)"
});

const LongCard = (props: {
  image: string;
  title: string;
  eth: number;
  time: string;
}) => {
  return (
    <Card>
      <div
        style={{
          height: "100%",
          aspectRatio: 1,
          background: "rgba(0,0,0,0.3)",
          borderRadius: "12px"
        }}
      />
      <div style={{ flexGrow: 1 }}>
        <h3 style={{ fontSize: "1.1rem" }}>{props.title}</h3>
        <div style={{ display: "flex", justifyContent: "space-between" }}>
          <p style={{ fontSize: "1rem" }}>{props.eth} ETH</p>
          <p style={{ fontSize: "1rem" }}>{props.time}</p>
        </div>
      </div>
    </Card>
  );
};

let time = 45242000;
let first = 0;

function Product() {
  const ref = useRef<HTMLHeadingElement>(null);
  const Theme = useTheme()

  useEffect(() => {
    if (ref.current?.innerText && first === 1) {
      let id = setInterval(() => {
        const timer = new Date((time -= 1000));
        // @ts-ignore
        ref.current.innerText = `${timer.getUTCHours()}:${timer.getUTCMinutes()}:${timer
          .getUTCSeconds()
          .toString()
          .padStart(2, "0")}`;
      }, 1000);
      return () => clearInterval(id);
    }
    if (first === 0) first = 1;

    // new Date((60*(12 * 60 + 34) + 2)* 1000)
  }, []);

  return (
    <Stack gap={10} sx={{ width: "80vw", marginInline: "auto" }}>
      <Recommendation>
        <BigCard>
          <h3 style={{ fontSize: 32 }}>Item ending soon</h3>
          <div
            style={{
              borderRadius: "0.7rem",
              width: "auto",
              aspectRatio: 1.314,
              background: "rgba(0,0,0,0.3)"
            }}
          />
          <div>
            <h3 style={{ fontSize: 26 }}>Hurricane (Common Body)</h3>
            <p>by Spider Tanks</p>
          </div>
          <div
            style={{
              display: "flex",
              justifyContent: "space-between"
            }}
          >
            <div>
              {/* @ts-ignore */}
              <p style={{ fontSize: '1.25rem', fontWeight: 600, color: Theme.palette.primary[400] }}>Current bid</p>
              <h3 style={{ marginTop: '0.5rem', fontSize: 32 }}>0.0079 ETH</h3>
            </div>
            <div style={{ textAlign: "end" }}>
              {/* @ts-ignore */}
              <p style={{ fontSize: '1.25rem', fontWeight: 600, color: Theme.palette.primary[400] }}>Remaining Time</p>
              <h3 ref={ref} style={{ marginTop: '0.5rem', fontSize: 32 }}>
                12:34:02
              </h3>
            </div>
          </div>
          <div
            style={{
              display: "flex",
              justifyContent: "space-between"
            }}
          >
            <Button
              style={{
                fontSize: "1rem",
                width: "200px",
                height: "60px",
                borderRadius: "60px"
              }}
              variant="contained"
            >
              Place a bid
            </Button>
            <Button
              style={{
                fontSize: "1rem",
                width: "200px",
                height: "60px",
                borderRadius: "60px"
              }}
              variant="outlined"
            >
              View art work
            </Button>
          </div>
        </BigCard>
        <div>
          <h3 style={{ fontSize: "2rem", marginBottom: "30px" }}>
            New Auction
          </h3>
          <Stack gap={1.5} style={{ marginBottom: "30px" }}>
            {newAuction.map(({ name, price, time }, i) => (
              <LongCard
                key={i}
                image="test"
                title={name}
                eth={price}
                time={time}
              />
            ))}
          </Stack>
          <div>
            <Link sx={{ color: "gray" }}>View all auctions</Link>
          </div>
        </div>
      </Recommendation>
      <Stack gap={5} sx={{ alignItems: "center" }}>
        <h3 style={{ fontSize: "2rem" }}>Top Seller</h3>
        <Stack
          direction="row"
          gap={"3vw"}
          sx={{ flexWrap: "wrap", justifyContent: "center" }}
        >
          {categories.map(({ category }, i) => (
            <Stack key={i} gap={3} sx={{ alignItems: "center" }}>
              <Avatar sx={{ width: "7vw", height: "7vw" }}>A</Avatar>
              <p>{category}</p>
            </Stack>
          ))}
        </Stack>
      </Stack>
    </Stack>
  );
}

export default Product;
