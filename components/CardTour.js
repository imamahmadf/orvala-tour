import React from "react";
import {
  Button,
  Container,
  Typography,
  Box,
  Grid,
  Paper,
  Modal,
  Divider,
} from "@mui/material";
import Aurora from "../assets/cardA.jpg";
import StarIcon from "@mui/icons-material/Star";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import ZoomInIcon from "@mui/icons-material/ZoomIn";
import NearMeIcon from "@mui/icons-material/NearMe";

function CardTour() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  return (
    <>
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
              backgroundImage: `url(${Aurora.src})`,
              backgroundPosition: "center",
              backgroundSize: "cover",
              backgroundRepeat: "no-repeat",
              textAlign: "center", // Pusatkan teks horizontal
              position: "relative", // Tambahkan
            }}
          >
            <Box
              sx={{
                position: "absolute",
                top: "0",
                left: "0",
                backgroundColor: "yellow",
                borderRadius: "5px",
                marginTop: "10px",
                marginLeft: "10px",
                paddingX: "20px",
                paddingY: "10px",
                fontSize: "18px",
                color: "white",
              }}
            >
              Promo
            </Box>
            <Button
              variant="contained"
              sx={{
                borderRadius: "5px",
                paddingY: "0px",
                paddingX: "10px",
                fontSize: "15px",
                marginBottom: "10px ",
                marginLeft: "10px",
                color: "black",
                position: "absolute", // Tambahkan ini
                bottom: "0", // Geser tombol ke bawah
                left: "0", // Geser tombol ke kiri
              }}
              onClick={handleOpen}
            >
              <ZoomInIcon /> Quick View
            </Button>
          </Box>
          <Box
            sx={{
              padding: "20px",
              display: "flex",
              justifyContent: "space-between",
              flexDirection: "column",

              minHeight: "340px",
            }}
          >
            <Box>
              <StarIcon />
              <Typography
                color={"yellow"}
                sx={{ marginTop: "15px", fontSize: "24px" }}
              >
                HUNTING AURORA
              </Typography>
              <Typography>Start: 25 December 2023</Typography>
            </Box>
            <Box>
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "row",
                  gap: "40px",
                  marginBottom: "30px",
                }}
              >
                <Box sx={{ display: "flex", flexDirection: "row", gap: "7px" }}>
                  <CalendarMonthIcon /> <Typography>9D/8N</Typography>
                </Box>
                <Box sx={{ display: "flex", flexDirection: "row", gap: "7px" }}>
                  <NearMeIcon /> <Typography>9D/8N</Typography>
                </Box>
              </Box>
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "space-between",
                }}
              >
                <Box
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "space-between",
                    marginTop: "10px",
                  }}
                >
                  <Typography
                    sx={{
                      textDecorationLine: "line-through",
                      fontSize: "15px",
                    }}
                  >
                    Was Rp. 40 Jt.
                  </Typography>
                  <Typography color={"primary"} sx={{ fontSize: "20px" }}>
                    From: Rp. 35 Jt.
                  </Typography>
                </Box>
                <Button
                  variant="kuning"
                  sx={{
                    borderRadius: "50px",
                    paddingY: "17px",
                    paddingX: "24px",
                    fontSize: "18px",
                  }}
                >
                  View Trip
                </Button>
              </Box>
            </Box>
          </Box>
        </Paper>
      </Grid>

      <div>
        <Modal
          open={open}
          onClose={handleClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Container
            sx={{
              position: "absolute",
              top: "50%",
              left: "50%",
              transform: "translate(-50%, -50%)",

              bgcolor: "background.paper",
              boxShadow: 24,
              p: "30px",
            }}
          >
            <Paper sx={{ padding: "15px" }}>
              <StarIcon />
              <Typography sx={{ marginTop: "10px" }}>HUNTING AURORA</Typography>
              <Typography>Start: 25 December 2023</Typography>
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "row",
                  gap: "40px",
                  marginBottom: "30px",
                }}
              >
                <Box sx={{ display: "flex", flexDirection: "row", gap: "7px" }}>
                  <CalendarMonthIcon /> <Typography>9D/8N</Typography>
                </Box>
                <Box sx={{ display: "flex", flexDirection: "row", gap: "7px" }}>
                  <NearMeIcon /> <Typography>9D/8N</Typography>
                </Box>
              </Box>
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "row",
                }}
              >
                <Box></Box>
                <Divider orientation="vertical" />
              </Box>
            </Paper>
          </Container>
        </Modal>
      </div>
    </>
  );
}

export default CardTour;
