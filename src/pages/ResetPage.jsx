import React from "react";
import { useForm } from "react-hook-form";

import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";

import { useNavigate } from "react-router-dom";

const ResetPage = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm({
    defaultValues: {
      email: "",
    },
  });

  const navigate=useNavigate();


  const onSubmit = (data) => { 
    console.log(data);

  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-slate-100 px-4">
      <div className="bg-white shadow-xl rounded-2xl p-6 w-full max-w-md">
        <Typography
          variant="h5"
          className="text-center"
          sx={{ fontWeight: "bold", mb: 2}}
        >
          Forgot Password
        </Typography>

        

        <form
          onSubmit={handleSubmit(onSubmit)}
          className="flex flex-col gap-3"
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
            {isSubmitting ? "Sending OTP..." : "Send OTP"}
          </Button>

          <Typography
            variant="body2"
            className="text-center"
          >
            
            <span 
            onClick={()=> navigate('/login')}
            className="text-blue-600 font-semibold cursor-pointer">
              Back to Login
            </span>
          </Typography>
        </form>
      </div>
    </div>
  );
};

export default ResetPage;