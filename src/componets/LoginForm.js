import React, { useState } from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import { useTheme } from "../Context/ThemeContext";
import { auth } from "../firebaseConfig";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { errorMapping } from "../Utils/errorMapping";

const LoginForm = ({ handleClose }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const { theme } = useTheme();

  const handleSubmit = () => {
    console.log("email", email, "password", password);
    if (!email || !password) {
      toast.warning("Fill all details", {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
      return;
    }

    auth
      .createUserWithEmailAndPassword(email, password)
      .then((createdUser) => {
        // User account successfully created, now sign in
        return auth.signInWithEmailAndPassword(email, password);
      })
      .then((signedInUser) => {
        toast.success("Logged in", {
          position: "top-right",
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
        });
        handleClose();
      })
      .catch((err) => {
        console.log(err.code);
        toast.error(errorMapping[err.code] || "Invalid credentials", {
          position: "top-right",
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
        });
      });
  };

  return (
    <Box
      p={3}
      style={{
        display: "flex",
        flexDirection: "column",
        gap: "20px",
        background: "#fff",
      }}
    >
      <TextField
        variant="outlined"
        type="email"
        label="Enter Email"
        onChange={(e) => setEmail(e.target.value)}
        InputLabelProps={{
          style: {
            color: theme.typeTextColor,
            fontFamily: "Lato",
          },
        }}
        InputProps={{
          style: {
            color: theme.typeTextColor,
            fontFamily: "Lato",
          },
        }}
      />
      <TextField
        variant="outlined"
        type="password"
        label="Enter Password"
        onChange={(e) => setPassword(e.target.value)}
        InputLabelProps={{
          style: {
            color: theme.typeTextColor,
            fontFamily: "Lato",
          },
        }}
        InputProps={{
          style: {
            color: theme.typeTextColor,
          },
        }}
      />

      <Button
        onClick={handleSubmit}
        variant="contained"
        size="large"
        style={{ backgroundColor: theme.background, fontFamily: "Roboto Mono" }}
      >
        Login
      </Button>
    </Box>
  );
};

export default LoginForm;
