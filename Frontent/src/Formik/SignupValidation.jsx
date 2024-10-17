import * as Yup from "yup";

const signupValidation = Yup.object({
  name: Yup.string()
    .min(2, "Name must be at least 2 characters")
    .max(50, "Name must be 50 characters or less")
    .required("Name is required"),

  address: Yup.string().required("Address is required"),

  city: Yup.string().required("City is required"),

  state: Yup.string().required("State is required"),

  pincode: Yup.string()
    .matches(/^\d{6}$/, "Pincode must be exactly 6 digits")
    .required("Pincode is required"),

  date: Yup.date()
    .required("Registration Date is required")
    .typeError("Invalid date format, please use dd-mm-yy"),

  availability: Yup.string().required("Ambulance Availability is required"),

  email: Yup.string()
    .email("Invalid email address")
    .required("Email is required"),

  phone: Yup.string()
    .matches(/^\d{10}$/, "Phone number must be exactly 10 digits")
    .required("Phone number is required"),

  registerNum: Yup.string().required("Register number is required"),

  wardNum: Yup.string().required("Ward number is required"),

  password: Yup.string()
    .min(8, "Password must be at least 8 characters")
    .required("Password is required"),

  cpassword: Yup.string()
    .oneOf([Yup.ref("password"), null], "Passwords must match")
    .required("Confirm password is required"),

  certificate: Yup.mixed().required("A certificate file is required"),
});

export default signupValidation;
