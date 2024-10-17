import React from "react";
import { Link } from "react-router-dom";
import { useFormik, ErrorMessage } from "formik";
import signupValidation from "../Formik/SignupValidation";

const Signup = () => {
  const formik = useFormik({
    initialValues: {
      name: "",
      address: "",
      city: "",
      state: "",
      pincode: "",
      date: "",
      availability: "",
      email: "",
      phone: "",
      registerNum: "",
      wardNum: "",
      password: "",
      cpassword: "",
      certificate: null,
    },
    validationSchema: signupValidation,
    onSubmit: async (values) => {
      const formData = new FormData();
      Object.keys(values).forEach((key) => {
        formData.append(key, values[key]);
      });
    },
  });

  return (
    <div className="p-20 pb-3">
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
        <form onSubmit={formik.handleSubmit}>
          <div className="flex gap-20 justify-center">
            <div className="w-1/2">
              <div className="mb-9">
                <input
                  type="text"
                  name="name"
                  className="w-full border-b-2 focus:border-black py-2 outline-none text-lg"
                  placeholder="Hospital Name"
                  onChange={formik.handleChange}
                  value={formik.values.name}
                  onBlur={formik.handleBlur}
                />
                {formik.touched.name && formik.errors.name && (
                  <div className="text-red-500 text-sm mt-1 ">
                    {formik.errors.name}
                  </div>
                )}
              </div>
              <div className="mb-9">
                <input
                  type="text"
                  name="address"
                  className="w-full border-b-2 focus:border-black py-2 outline-none text-lg"
                  placeholder="Address"
                  onChange={formik.handleChange}
                  value={formik.values.address}
                  onBlur={formik.handleBlur}
                />
                {formik.touched.address && formik.errors.address && (
                  <div className="text-red-500 text-sm mt-1">
                    {formik.errors.address}
                  </div>
                )}
              </div>
              <div className="mb-9">
                <input
                  type="text"
                  name="city"
                  className="w-full border-b-2 focus:border-black py-2 outline-none text-lg"
                  placeholder="City"
                  onChange={formik.handleChange}
                  value={formik.values.city}
                  onBlur={formik.handleBlur}
                />
                {formik.touched.city && formik.errors.city && (
                  <div className="text-red-500 text-sm mt-1">
                    {formik.errors.city}
                  </div>
                )}
              </div>
              <div className="mb-9">
                <input
                  type="text"
                  name="state"
                  className="w-full border-b-2 focus:border-black py-2 outline-none text-lg"
                  placeholder="State"
                  onChange={formik.handleChange}
                  value={formik.values.state}
                  onBlur={formik.handleBlur}
                />
                {formik.touched.state && formik.errors.state && (
                  <div className="text-red-500 text-sm mt-1">
                    {formik.errors.state}
                  </div>
                )}
              </div>
              <div className="mb-9">
                <input
                  type="number"
                  name="pincode"
                  className="w-full border-b-2 focus:border-black py-2 outline-none text-lg"
                  placeholder="Pincode"
                  onChange={formik.handleChange}
                  value={formik.values.pincode}
                  onBlur={formik.handleBlur}
                />
                {formik.touched.pincode && formik.errors.pincode && (
                  <div className="text-red-500 text-sm mt-1">
                    {formik.errors.pincode}
                  </div>
                )}
              </div>
              <div className="mb-9">
                <input
                  type="text"
                  name="date"
                  className="w-full border-b-2 focus:border-black py-2 outline-none text-lg"
                  placeholder="Hospital Registration Date"
                  onChange={formik.handleChange}
                  value={formik.values.date}
                  onBlur={formik.handleBlur}
                />
                {formik.touched.date && formik.errors.date && (
                  <div className="text-red-500 text-sm mt-1">
                    {formik.errors.date}
                  </div>
                )}
              </div>
              <div className="mb-9">
                <input
                  type="text"
                  name="availability"
                  className="w-full border-b-2 focus:border-black py-2 outline-none text-lg"
                  placeholder="Number of Ambulance Available"
                  onChange={formik.handleChange}
                  value={formik.values.availability}
                  onBlur={formik.handleBlur}
                />
                {formik.touched.availability && formik.errors.availability && (
                  <div className="text-red-500 text-sm mt-1">
                    {formik.errors.availability}
                  </div>
                )}
              </div>
            </div>

            <div className="w-1/2">
              <div className="mb-9">
                <input
                  type="email"
                  name="email"
                  className="w-full border-b-2 focus:border-black py-2 outline-none text-lg"
                  placeholder="Email ID"
                  onChange={formik.handleChange}
                  value={formik.values.email}
                  onBlur={formik.handleBlur}
                />
                {formik.touched.email && formik.errors.email && (
                  <div className="text-red-500 text-sm mt-1">
                    {formik.errors.email}
                  </div>
                )}
              </div>
              <div className="mb-9">
                <input
                  type="number"
                  name="phone"
                  className="w-full border-b-2 focus:border-black py-2 outline-none text-lg"
                  placeholder="Phone Number"
                  onChange={formik.handleChange}
                  value={formik.values.phone}
                  onBlur={formik.handleBlur}
                />
                {formik.touched.phone && formik.errors.phone && (
                  <div className="text-red-500 text-sm mt-1">
                    {formik.errors.phone}
                  </div>
                )}
              </div>
              <div className="mb-9">
                <input
                  type="text"
                  name="registerNum"
                  className="w-full border-b-2 focus:border-black py-2 outline-none text-lg"
                  placeholder="Hospital Registration Number"
                  onChange={formik.handleChange}
                  value={formik.values.registerNum}
                  onBlur={formik.handleBlur}
                />
                {formik.touched.registerNum && formik.errors.registerNum && (
                  <div className="text-red-500 text-sm mt-1">
                    {formik.errors.registerNum}
                  </div>
                )}
              </div>
              <div className="mb-9">
                <input
                  type="text"
                  name="wardNum"
                  className="w-full border-b-2 focus:border-black py-2 outline-none text-lg"
                  placeholder="Emergency-Ward Number"
                  onChange={formik.handleChange}
                  value={formik.values.wardNum}
                  onBlur={formik.handleBlur}
                />
                {formik.touched.wardNum && formik.errors.wardNum && (
                  <div className="text-red-500 text-sm mt-1">
                    {formik.errors.wardNum}
                  </div>
                )}
              </div>
              <div className="relative mb-3">
                <div className="mb-4">
                  <label className="w-full border-b-2 block text-gray-400 focus:border-black py-2 outline-none  text-lg">
                    Registration Certificate Upload
                  </label>
                  {formik.touched.certificate && formik.errors.certificate && (
                    <div className="text-red-500 text-sm mt-1">
                      {formik.errors.certificate}
                    </div>
                  )}
                </div>

                <input
                  type="file"
                  name="certificate"
                  id="certificate"
                  className="hidden"
                  onChange={(event) => {
                    formik.setFieldValue(
                      "certificate",
                      event.currentTarget.files[0]
                    );
                  }}
                />
                <label
                  htmlFor="certificate"
                  className="bg-[#57555e] text-white rounded-md p-1 px-4 mb-2 text-lg"
                >
                  Choose
                </label>
              </div>
              <div className="mb-9">
                <input
                  type="password"
                  name="password"
                  className="w-full border-b-2 focus:border-black py-2 outline-none text-lg"
                  placeholder="Create Password"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.password}
                />
                {formik.touched.password && formik.errors.password && (
                  <div className="text-red-500 text-sm mt-1">
                    {formik.errors.password}
                  </div>
                )}
              </div>
              <div className="mb-9">
                <input
                  type="password"
                  name="cpassword"
                  className="w-full border-b-2 focus:border-black py-2 outline-none text-lg"
                  placeholder="Confirm Password"
                  onChange={formik.handleChange}
                  value={formik.values.cpassword}
                  onBlur={formik.handleBlur}
                />
                {formik.touched.cpassword && formik.errors.cpassword && (
                  <div className="text-red-500 text-sm mt-1">
                    {formik.errors.cpassword}
                  </div>
                )}
              </div>
            </div>
          </div>

          <div className="w-full flex items-center justify-center">
            <button
              type="submit"
              className="rounded-lg mt-3 bg-[#261E3B] text-white py-3 px-7"
            >
              Sign Up
            </button>
          </div>
        </form>
      </div>
      <p className="text-center text-sm mt-10 text-[#BCBCBC]">
        • Terms and Condition privacy policy
      </p>
    </div>
  );
};

export default Signup;
