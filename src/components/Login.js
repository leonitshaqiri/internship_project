import React from "react";
// import { useNavigate } from "react-router-dom";
import { Button, TextField } from "@mui/material";
import { Link } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    "& .MuiOutlinedInput-notchedOutline": {
      border: "1px solid #EAEAEA",
      borderRadius: "16px",
    },
    "&:hover": {
      borderColor: "#5dc2a6",
    },
  },
}));

const Login = () => {
  return (
    <div className="w-full flex flex-col items-center h-screen my-auto bg-amber-50">
      <div className="w-full border flex flex-col m-auto shadow-lg w-1/3 rounded-2xl p-6 bg-slate-50">
        <TextField className="w-full" label="Email" type="text" name="email" />
        <TextField
          className="w-full"
          sx={{ mt: 2 }}
          label="Password"
          type="text"
          name="password"
        />
        <Link to="/home-page">
          <Button sx={{ mt: 2 }}>Log in</Button>
        </Link>
      </div>
    </div>
  );
};

export default Login;
