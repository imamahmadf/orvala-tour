import React from "react";
import { Box, Paper, CardMedia, Typography, Grid, Button } from "@mui/material";
import Promo from "../assets/promo.png";
import Image from "next/image";
function Artikel() {
  return (
    <Grid item xs={12} md={4} sm={6} p={"5px"}>
      <Paper elevation={2}>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            height: "230px",
            borderRadius: "5px 5px 0px 0px",
            backgroundImage: `url(${Promo.src})`,
            backgroundPosition: "center",
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
            textAlign: "center", // Pusatkan teks horizontal
            position: "relative", // Tambahkan
          }}
        ></Box>
        <Box padding={"20px"}>
          <Typography
            textAlign={"center"}
            fontSize={"24px"}
            marginBottom={"20px"}
          >
            SYARAT VISA RUSIA 2023
          </Typography>
          <Typography>
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </Typography>{" "}
          <Button>Read More ...</Button>
        </Box>
      </Paper>
    </Grid>
  );
}

export default Artikel;
