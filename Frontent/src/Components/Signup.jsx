import React from "react";
import { Link } from "react-router-dom";
import { Formik, Form, Field, ErrorMessage } from "formik";

const Signup = () => {
  return (
    <div className=" p-16 pb-3">
      <div className="flex">
        <img src="/images/doctorlogo.png" alt="" className="w-[88px]" />
        <div className="flex w-[100%] items-center justify-center">
          <h1 className="text-3xl font-semibold">
            Sign Up{" "}
            <Link to="/login" className="text-[#CDCDCD] font-medium">
              / Login
            </Link>
          </h1>
        </div>
      </div>
      <div>
        <Formik
          initialValues={{ email: "", password: "" }}
          //   validationSchema={LoginScehema}
          //   onSubmit={handleSubmit}
        >
          <Form className="flex flex-col mt-5 justify-center items-center">
            <div className="flex gap-20  justify-center">
              <div className="w-1/2 ">
                <Field
                  type="text"
                  name="name"
                  className="w-full border-b-2  focus:border-black py-2 outline-none mb-9 text-lg"
                  placeholder="Hospital name"
                />
                <Field
                  type="text"
                  name="address"
                  className="w-full border-b-2  focus:border-black py-2 outline-none mb-9 text-lg"
                  placeholder="Address"
                />
                <Field
                  type="text"
                  name="city"
                  className="w-full border-b-2  focus:border-black py-2 outline-none mb-9 text-lg"
                  placeholder="City"
                />
                <Field
                  type="text"
                  name="state"
                  className="w-full border-b-2  focus:border-black py-2 outline-none mb-9 text-lg"
                  placeholder="State"
                />
                <Field
                  type="number"
                  name="pincode"
                  id="email"
                  className="w-full border-b-2  focus:border-black py-2 outline-none mb-9 text-lg"
                  placeholder="Pincode"
                />
                <Field
                  type="text"
                  name="date"
                  id="email"
                  className="w-full border-b-2  focus:border-black py-2 outline-none mb-9 text-lg"
                  placeholder="Hospital Registration Date"
                />
                <Field
                  type="text"
                  name="availability"
                  id="email"
                  className="w-full border-b-2  focus:border-black py-2 outline-none mb-9 text-lg"
                  placeholder="Number Of Ambulance available"
                />
              </div>
              <div className="w-1/2">
                <Field
                  type="email"
                  name="email"
                  className="w-full border-b-2  focus:border-black py-2 outline-none mb-9 text-lg"
                  placeholder="Email ID"
                />
                <Field
                  type="email"
                  name="phone"
                  className="w-full border-b-2  focus:border-black py-2 outline-none mb-9 text-lg"
                  placeholder="Phone Number"
                />
                <Field
                  type="email"
                  name="regnum"
                  className="w-full border-b-2  focus:border-black py-2 outline-none mb-9 text-lg"
                  placeholder="Hospital Registration Number"
                />
                <Field
                  type="email"
                  name="wardnum"
                  className="w-full border-b-2  focus:border-black py-2 outline-none mb-9 text-lg"
                  placeholder="Emergency-Ward Number"
                />
                <div className="relative mb-3">
                  <label className="w-full border-b-2 block text-gray-400 focus:border-black py-2 outline-none mb-9 text-lg">
                    Registration certificate Upload
                  </label>
                  <Field
                    type="file" 
                    name="certificate"
                    id="certificate"
                    className="hidden"
                    placeholder="Registration certificate Upload"
                  />

                  <label
                    htmlFor="certificate"
                    className="bg-[#57555e] text-white rounded-md p-1 px-4 text-lg"
                  >
                    Choose
                  </label>
                </div>
                <Field
                  type="text"
                  name="password"
                  className="w-full border-b-2  focus:border-black py-2 outline-none mb-9 text-lg"
                  placeholder="Create Password"
                />
                <Field
                  type="text"
                  name="cpassword"
                  className="w-full border-b-2  focus:border-black py-2 outline-none mb-9 text-lg"
                  placeholder="Confrim Password"
                />
              </div>
            </div>
            <button
              type="submit"
              className="rounded-lg mt-3 bg-[#261E3B] text-white py-3 px-7 "
            >
              Sign Up
            </button>
          </Form>
        </Formik>
      </div>
      <p className="text-center text-sm mt-10 text-[#BCBCBC]">
      • Terms and Condition privacy policy
      </p>
    </div>
  );
};
export default Signup;
