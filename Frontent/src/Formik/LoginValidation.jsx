import * as Yup from "yup";

const loginValidation = Yup.object().shape({
  email: Yup.string().required("Email is required").email("Email is not valid"),
  password: Yup.string().required("Password is required"),
  name: Yup.string().required("Name is required"),
});

export default loginValidation;
