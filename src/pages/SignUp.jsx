import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { signupSchema } from "../validationSchema";

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
  name: "",
  email: "",
  password: "",
  confirmpassword: "",
  terms: false,
};



const SignUp = () => {

  const navigate=useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm({
    defaultValues: initialValues,
    resolver: yupResolver(signupSchema),
  });

  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const onSubmit = async (data) => {

  const users =
    JSON.parse(
      localStorage.getItem("users")
    ) || [];

  const existingUser = users.find(
  (user) =>
    user.email.toLowerCase() ===
    data.email.toLowerCase()
);

  if (existingUser) {
    alert(
      "User already exists. Please Login."
    );
    return;
  }

  const newUser = {
  id: Date.now(),
  name: data.name.trim(),
  email: data.email.trim().toLowerCase(),
  password: data.password,
};

  users.push(newUser);

  localStorage.setItem(
    "users",
    JSON.stringify(users)
  );

  alert(
    "Registration Successful"
  );

  console.log(
    "Registered User:",
    newUser
  );

  navigate("/login");
  alert("User already exists. Please Login.");
};

  return (
    <div className="min-h-screen flex items-center justify-center bg-slate-100 px-4">
      <div className="bg-white shadow-xl rounded-2xl p-6 w-full max-w-md">
        <Typography
          variant="h4"
          className="text-center"
          sx={{ fontWeight: "bold", mb: 0.5 }}
        >
          Create Account
        </Typography>

        <Typography
          variant="body2"
          className="text-center"
          sx={{ color: "#64748B", mb: 2 }}
        >
          Sign up to get started
        </Typography>

        <form
          onSubmit={handleSubmit(onSubmit)}
          className="flex flex-col gap-2.5"
        >
          <TextField
            label="Full Name"
            fullWidth
            {...register("name")}
          />

          {errors.name && (
            <Typography variant="caption" color="error">
              {errors.name.message}
            </Typography>
          )}

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

          <TextField
            label="Confirm Password"
            type={showConfirmPassword ? "text" : "password"}
            fullWidth
            {...register("confirmpassword")}
            slotProps={{
              input: {
                endAdornment: (
                  <InputAdornment position="end">
                    <IconButton
                      onClick={() =>
                        setShowConfirmPassword(!showConfirmPassword)
                      }
                    >
                      {showConfirmPassword ? (
                        <FaEyeSlash />
                      ) : (
                        <FaEye />
                      )}
                    </IconButton>
                  </InputAdornment>
                ),
              },
            }}
          />

          {errors.confirmpassword && (
            <Typography variant="caption" color="error">
              {errors.confirmpassword.message}
            </Typography>
          )}

          <div className="flex flex-col">
            <FormControlLabel
              control={<Checkbox {...register("terms")} />}
              label="I agree to Terms & Conditions"
            />

            {errors.terms && (
              <Typography variant="caption" color="error">
                {errors.terms.message}
              </Typography>
            )}
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
            {isSubmitting ? "Registering..." : "Register"}
          </Button>

          <Divider>OR</Divider>

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
            Already have an account?{" "}
            <span 
            onClick={()=> navigate('/login')}
            className="text-blue-600 font-semibold cursor-pointer">
              Login
            </span>
          </Typography>
        </form>
      </div>
    </div>
  );
};

export default SignUp;