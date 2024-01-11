import { Box, Button, Container, TextField } from "@mui/material";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

function Login() {
  const [userdetails, setUserdetails] = useState({
    username: "",
    password: "",
  });
  const navigate = useNavigate();

  const handleChange = (e) => {
    setUserdetails((prevUserdetails) => ({
      ...prevUserdetails,
      [e.target.name]: e.target.value,
    }));
  };

  const handleLogin = () => {
    if (userdetails.username.length !== 0 && userdetails.password.length !== 0) {
      
      navigate("/todoapp");
       // Store user details in local storage
       localStorage.setItem("userDetails", JSON.stringify(userdetails));
    } else {
      toast.error("Fields can't be empty");
    }
  };

  return (
    <Box sx={{ display: "flex", alignItems: "center", height: "100vh", position: "relative" }}>
      <Container maxWidth="sm">
        <Box className="Login-box">
          <Box>
            <TextField
              variant="outlined"
              placeholder="Username"
              name="username"
              value={userdetails.username}
              fullWidth
              onChange={handleChange}
              size="small"
              autoComplete="off"
            />
          </Box>
          <Box pb={3} pt={3}>
            <TextField
              variant="outlined"
              placeholder="Password"
              name="password"
              value={userdetails.password}
              fullWidth
              onChange={handleChange}
              size="small"
              autoComplete="off"
            />
          </Box>
          <Box>
            <Button variant="contained" color="secondary" fullWidth onClick={handleLogin}>
              Login
            </Button>
          </Box>
        </Box>
      </Container>
    </Box>
  );
}

export default Login;
