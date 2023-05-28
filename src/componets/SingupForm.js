import React from "react";
import { useState } from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import { useTheme } from "../Context/ThemeContext";
import { auth } from "../firebaseConfig";
import { toast } from "react-toastify";
import { errorMapping } from "../Utils/errorMapping";

const SingupForm = ({ handleClose }) => {
  const { theme } = useTheme();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirm, setConfirmPassword] = useState("");
  //--------------------handle submit form-------------------->
  const handleSubmit = () => {
    if (!email || !password || !confirm) {
      toast.warning("Fill all dettails", {
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
    if (password !== confirm) {
      toast.warning("Password mismatch.", {
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
      .then((res) => {
        toast.success("user created", {
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
        console.log("error code is ", err.code);
        toast.error(errorMapping[err.code] || "some error occured", {
          position: "top-right",
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
        });
        console.error(err);
      });
  };

  return (
    <Box
      p={3}
      style={{
        display: "flex",
        flexDirection: "column",
        gap: "20px",
        background: "white",
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
            fontSize: "15px",
          },
        }}
        InputProps={{
          style: {
            color: theme.textColor,
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
      <TextField
        variant="outlined"
        type="password"
        label="Enter confirm Password"
        onChange={(e) => setConfirmPassword(e.target.value)}
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
      <Button
        variant="contained"
        size="large"
        style={{ backgroundColor: theme.background, fontFamily: "Roboto Mono" }}
        onClick={handleSubmit}
      >
        singup
      </Button>
    </Box>
  );
};

export default SingupForm;
