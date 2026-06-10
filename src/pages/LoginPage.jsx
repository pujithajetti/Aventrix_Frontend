import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { loginSchema } from "../validationSchema";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Checkbox from "@mui/material/Checkbox";
import Typography from "@mui/material/Typography";
import FormControlLabel from "@mui/material/FormControlLabel";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import InputAdornment from "@mui/material/InputAdornment";

import { FcGoogle } from "react-icons/fc";
import { FaGithub, FaEye, FaEyeSlash } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
const initialValues = {
  email: "",
  password: "",
  terms: false,
};

const LoginPage = () => {

  const navigate=useNavigate()
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm({
    defaultValues: initialValues,
    resolver: yupResolver(loginSchema),
  });

  

  const [showPassword, setShowPassword] = useState(false);

  const onSubmit = (data) => {
  const users =
    JSON.parse(localStorage.getItem("users")) || [];

  const existingUser = users.find(
    (u) =>
      u.email.toLowerCase() ===
data.email.trim().toLowerCase()
  );

  if (!existingUser) {
    alert(
      "Account does not exist. Please Sign Up."
    );

    navigate("/signup");
    return;
  }

  if (
    existingUser.password !== data.password.trim()
  ) {
    alert("Invalid Password");
    return;
  }

  localStorage.setItem(
    "isLoggedIn",
    "true"
  );

  localStorage.setItem(
    "currentUser",
    JSON.stringify(existingUser)
  );

  alert("Login Successful");

  navigate("/dashboard");
};

  return (
    <div className="min-h-screen flex items-center justify-center bg-slate-100 px-4">
      <div className="bg-white shadow-xl rounded-2xl p-6 w-full max-w-md">
        <Typography
          variant="h4"
          className="text-center"
          sx={{ fontWeight: "bold", mb: 0.5 }}
        >
          Welcome Back!
        </Typography>

        <Typography
          variant="body2"
          className="text-center"
          sx={{ color: "#64748B", mb: 2 }}
        >
          Sign in to your account
        </Typography>

        <form
          onSubmit={handleSubmit(onSubmit)}
          className="flex flex-col gap-2.5"
        >
          <TextField
            label="Email"
            type="email"
            fullWidth
            {...register("email")}
          />

          {errors.email && (
            <Typography variant="caption" color="error">
              {errors.email.message}
            </Typography>
          )}

          <TextField
            label="Password"
            type={showPassword ? "text" : "password"}
            fullWidth
            {...register("password")}
            slotProps={{
              input: {
                endAdornment: (
                  <InputAdornment position="end">
                    <IconButton
                      onClick={() => setShowPassword(!showPassword)}
                      edge="end"
                    >
                      {showPassword ? <FaEyeSlash /> : <FaEye />}
                    </IconButton>
                  </InputAdornment>
                ),
              },
            }}
          />

          {errors.password && (
            <Typography variant="caption" color="error">
              {errors.password.message}
            </Typography>
          )}

          <div className="flex items-center justify-between">
            <FormControlLabel
              control={<Checkbox {...register("terms")} />}
              label="Remember Me"
            />

            <Typography
            onClick={()=>navigate("/reset")}
              variant="body2"
              className="text-blue-600 cursor-pointer font-medium"
            >
              Forgot Password?
            </Typography>
          </div>

          <Button
            type="submit"
            variant="contained"
            disabled={isSubmitting}
            fullWidth
            
            sx={{
              py: 1.5,
              textTransform: "none",
              fontWeight: 600,
            }}
          >
            {isSubmitting ? "Signing In..." : "Sign In"}
          </Button>

          <Divider>OR continue with</Divider>

          <div className="flex flex-col gap-2">
            <Button
              variant="outlined"
              fullWidth
              startIcon={<FcGoogle size={22} />}
              sx={{
                py: 1.4,
                textTransform: "none",
                fontWeight: 600,
                borderRadius: "12px",
                borderColor: "#E5E7EB",
                color: "#111827",
                backgroundColor: "#FFFFFF",
                "&:hover": {
                  backgroundColor: "#F9FAFB",
                  borderColor: "#D1D5DB",
                },
              }}
            >
              Continue with Google
            </Button>

            <Button
              variant="outlined"
              fullWidth
              startIcon={<FaGithub size={20} />}
              sx={{
                py: 1.4,
                textTransform: "none",
                fontWeight: 600,
                borderRadius: "12px",
                borderColor: "#E5E7EB",
                color: "#111827",
                backgroundColor: "#FFFFFF",
                "&:hover": {
                  backgroundColor: "#F9FAFB",
                  borderColor: "#D1D5DB",
                },
              }}
            >
              Continue with GitHub
            </Button>
          </div>

          <Typography
            variant="body2"
            className="text-center"
          >
            Don't have an account?{" "}
            <span 
            onClick={()=>navigate("/signup")}
            className="text-blue-600 font-semibold cursor-pointer hover:underline">
              Sign Up
            </span>
          </Typography>
        </form>
      </div>
    </div>
  );
};

export default LoginPage;