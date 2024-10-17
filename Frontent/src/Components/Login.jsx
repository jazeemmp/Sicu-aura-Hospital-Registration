import { useEffect, useState } from "react";
import { Link, Navigate, useNavigate } from "react-router-dom";
import { useFormik } from "formik";
import FaceRecognition from "./FaceRecognition";
import loginValidation from "../Formik/LoginValidation";
import axios from "../Axios/authAxios";
import { toast } from "sonner";
const Login = () => {
  const navigate = useNavigate();
  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      navigate("/");
    }
  }, [navigate]);
  const [isLogined, setIsLogined] = useState(false);
  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      password: "",
      accessCode: "",
    },
    validationSchema: loginValidation,
    onSubmit: async (values) => {
      try {
        const { data } = await axios.post("/login", values);
        localStorage.setItem("token", data.token);
        toast.success("Login Success");
        setIsLogined(true);
      } catch (error) {
        console.log(error);
        toast.error(error.response.data.message);
      }
    },
  });
  return (
    <div className="p-16 pb-3">
      <div className="flex">
        <img src="/images/doctorlogo.png" alt="" className="w-[88px]" />
        <div className="flex w-[100%] items-center justify-center">
          <h1 className="text-3xl font-semibold">
            <Link to="/signup" className="text-[#CDCDCD] font-medium">
              Sign Up /
            </Link>{" "}
            Login
          </h1>
        </div>
      </div>
      {isLogined ? (
        <FaceRecognition />
      ) : (
        <form onSubmit={formik.handleSubmit}>
          <div className="flex w-full flex-col items-center justify-center my-16">
            <div className="w-[514px] h-[540px] rounded-3xl flex flex-col  items-center border-[3px] shadow-[10px_10px_15px_rgba(0,0,0,0.20)]">
              <h1 className="mt-8 text-2xl font-medium">
                Welcome to Sicu-aura
              </h1>
              <p className="text-[#bcbcbc] text-sm font-normal mt-4">
                Your one stop safety solutions using innovative technology
              </p>
              <div className="w-full p-20">
                <div className="mb-9">
                  <input
                    type="text"
                    name="name"
                    className="w-full border-b-2  focus:border-black py-2 outline-none text-lg"
                    placeholder="Hospital name"
                    onChange={formik.handleChange}
                    value={formik.values.name}
                    onBlur={formik.handleBlur}
                  />
                  {formik.touched.name && formik.errors.name && (
                    <div className="text-red-500 text-sm absolute ">
                      {formik.errors.name}
                    </div>
                  )}
                </div>
                <div className="mb-9">
                  <input
                    type="text"
                    name="email"
                    className="w-full border-b-2  focus:border-black py-2 outline-none text-lg"
                    placeholder="Email ID"
                    onChange={formik.handleChange}
                    value={formik.values.email}
                    onBlur={formik.handleBlur}
                  />
                  {formik.touched.email && formik.errors.email && (
                    <div className="text-red-500 text-sm absolute">
                      {formik.errors.email}
                    </div>
                  )}
                </div>
                <div className="mb-9">
                  <input
                    type="text"
                    name="password"
                    className="w-full border-b-2  focus:border-black py-2 outline-none text-lg"
                    placeholder="Password"
                    onChange={formik.handleChange}
                    value={formik.values.password}
                    onBlur={formik.handleBlur}
                  />
                  {formik.touched.password && formik.errors.password && (
                    <div className="text-red-500 text-sm absolute">
                      {formik.errors.password}
                    </div>
                  )}
                </div>
                <div className="mb-9">
                  <input
                    type="text"
                    name="accessCode"
                    className="w-full border-b-2  focus:border-black py-2 outline-none text-lg"
                    placeholder="Special Access Code"
                  />
                </div>
              </div>
            </div>
            <button
              type="submit"
              className="mt-16  text-white font-semibold bg-[#261E3B] rounded-2xl py-3 px-14 text-lg"
            >
              Login
            </button>
          </div>
        </form>
      )}
      <p className="text-center text-sm mt-10 text-[#BCBCBC]">
        • Terms and Condition privacy policy
      </p>
    </div>
  );
};

export default Login;
