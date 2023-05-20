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
      <AccountCircleIcon onClick={handleModalOpen} />
      {user && <LogoutIcon onClick={logout} />}
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
                  color: theme.textColor,
                }}
              ></Tab>
              <Tab
                label="singup"
                style={{
                  color: theme.textColor,
                }}
              ></Tab>
            </Tabs>
          </AppBar>
          {value === 0 && <LoginForm handleClose={handleClose} />}
          {value === 1 && <SingupForm handleClose={handleClose} />}
        </div>
      </Modal>
    </div>
  );
};

export default AccountCircle;
