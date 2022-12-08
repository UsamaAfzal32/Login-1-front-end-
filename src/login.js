import {
  Box,
  Button,
  Card,
  Checkbox,
  FormControlLabel,
  InputAdornment,
  TextField,
  Typography,
} from "@mui/material";
import React from "react";
import Usama from "./lap4.jpg";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import LockOpenOutlinedIcon from "@mui/icons-material/LockOpenOutlined";
import { Link } from "react-router-dom";
export function Start() {
  return (
    <Box
      sx={{
        height: "100vh",
        width: "100%",
        backgroundImage: `url(${Usama})`,
        backgroundSize: "cover",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "space-evenly",
      }}
    >
      <Typography variant="h4" color={"white"}>
        Existing Login Form
      </Typography>
      <Card
        sx={{
          height: "60vh",
          width: "40%",
          backgroundColor: "#00000078",
          color: "white",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "space-evenly",
        }}
      >
        <Typography color={"white"}>LOGIN HERE</Typography>
        <TextField
          color="success"
          label="Email"
          InputProps={{
            endAdornment: (
              <InputAdornment>
                <EmailOutlinedIcon sx={{ color: "white" }} />
              </InputAdornment>
            ),
          }}
          sx={{ width: "80%" }}
        ></TextField>
        <TextField
          color="success"
          label="Password"
          sx={{ width: "80%" }}
          InputProps={{
            endAdornment: (
              <InputAdornment>
                <LockOpenOutlinedIcon sx={{ color: "white" }} />
              </InputAdornment>
            ),
          }}
        ></TextField>
        <Box
          sx={{
            color: "white",
            height: "10vh",
            width: "80%",
            justifyContent: "space-between",
            display: "flex",
            alignItems: "center",
          }}
        >
          <FormControlLabel control={<Checkbox />} label="Remember Me" />
          <Typography>Forget Password</Typography>
        </Box>
        <Button variant="contained">LogIn</Button>
        <Link to="/sign" style={{ textDecoration: "none" }}>
          <Button sx={{ backgroundColor: "yellowgreen" }} variant="contained">
            Register Here
          </Button>
        </Link>
      </Card>
    </Box>
  );
}
