import * as yup from "yup";

// Signup Schema
export const signupSchema = yup.object({
  name: yup
    .string()
    .trim()
    .matches(/^[A-Za-z\s]+$/, "Name must contain only letters")
    .min(3, "Name must be at least 3 characters")
    .required("Name is required"),

  email: yup
    .string()
    .email("Invalid email")
    .required("Email is required"),

  password: yup
    .string()
    .min(8, "Password must be at least 8 characters")
    .matches(/[A-Z]/, "Password must contain at least one uppercase letter")
    .matches(/[a-z]/, "Password must contain at least one lowercase letter")
    .matches(/[0-9]/, "Password must contain at least one number")
    .matches(
      /[@$!%*?&]/,
      "Password must contain at least one special character"
    )
    .required("Password is required"),

  confirmpassword: yup
    .string()
    .oneOf([yup.ref("password")], "Passwords must match")
    .required("Confirm password is required"),

  terms: yup
    .boolean()
    .oneOf([true], "You must accept Terms & Conditions"),
});

// Login Schema
export const loginSchema = yup.object({
  email: yup
    .string()
    .email("Invalid email")
    .required("Email is required"),

  password: yup
    .string()
    .required("Password is required"),
});




const addUserSchema = yup.object({
  name: yup
    .string()
    .trim()
    .matches(
      /^[A-Za-z\s]+$/,
      "User name must contain only letters"
    )
    .min(
      3,
      "User name must be at least 3 characters"
    )
    .required(
      "User name is required"
    ),

  email: yup
    .string()
    .trim()
    .email(
      "Invalid email address"
    )
    .required(
      "Email is required"
    ),

  role: yup
    .string()
    .required(
      "Role is required"
    ),

  status: yup
    .string()
    .oneOf(
      [
        "Active",
        "Inactive",
      ],
      "Please select a valid status"
    )
    .required(
      "Status is required"
    ),
});

export default addUserSchema;