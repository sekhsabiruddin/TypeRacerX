import React, { useState } from "react";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import { Modal } from "@mui/material";
import { AppBar, Tabs, Tab } from "@mui/material";
import LoginForm from "./LoginForm";
import SingupForm from "./SingupForm";
import { useTheme } from "../Context/ThemeContext";
import { auth } from "../firebaseConfig";
import LogoutIcon from "@mui/icons-material/Logout";
import { toast } from "react-toastify";
import { useAuthState } from "react-firebase-hooks/auth";
import { useNavigate } from "react-router-dom";
import GoogleButton from "react-google-button";
import Box from "@mui/material/Box";
import { signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { errorMapping } from "../Utils/errorMapping";
const AccountCircle = () => {
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState(0);
  const { theme } = useTheme();

  const [user] = useAuthState(auth);
  const navigate = useNavigate();
  const handleModalOpen = () => {
    if (user) {
      //naviagete to uesr page
      navigate("./user");
    } else {
      setOpen(true);
    }
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleValueChnage = (e, v) => {
    setValue(v);
  };
  const gooleProvider = new GoogleAuthProvider();
  const handleGooleSingIn = () => {
    signInWithPopup(auth, gooleProvider)
      .then((res) => {
        toast.success("Google login successful", {
          position: "top-right",
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "dark",
        });
        handleClose();
      })
      .catch((err) => {
        toast.error(errorMapping[err.code] || "not able to user google", {
          position: "top-right",
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "dark",
        });
      });
  };
  //log in function
  const logout = () => {
    auth
      .signOut()
      .then(() => {
        toast.success("Logged out", {
          position: "top-right",
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "dark",
        });
      })
      .catch((err) => {
        toast.error("Error logging out", {
          position: "top-right",
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "dark",
        });
      });
  };

  return (
    <div>
      <AccountCircleIcon
        onClick={handleModalOpen}
        className="accountcircleIcon"
      />
      {user && <LogoutIcon onClick={logout} className="logout" />}
      <Modal
        open={open}
        onClose={handleClose}
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <div style={{ width: "400px" }}>
          <AppBar position="static" style={{ background: "white" }}>
            <Tabs
              value={value}
              variant="fullWidth"
              onChange={handleValueChnage}
            >
              <Tab
                label="login"
                style={{
                  color: theme.typeTextColor,
                  fontFamily: "Roboto mono",
                }}
              ></Tab>
              <Tab
                label="singup"
                style={{
                  color: theme.typeTextColor,
                  fontFamily: "Roboto mono",
                }}
              ></Tab>
            </Tabs>
          </AppBar>

          {value === 0 && <LoginForm handleClose={handleClose} />}
          {value === 1 && <SingupForm handleClose={handleClose} />}
          {value === 0 && (
            <Box style={{ backgroundColor: "#fff", paddingBottom: "10px" }}>
              <span className="or">OR</span>
              <GoogleButton
                style={{
                  width: "100%",
                  marginTop: "10px",
                  fontFamily: "Helvetica",
                }}
                onClick={handleGooleSingIn}
              />
            </Box>
          )}
        </div>
      </Modal>
    </div>
  );
};

export default AccountCircle;
