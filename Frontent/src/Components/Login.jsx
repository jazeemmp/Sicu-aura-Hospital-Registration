import React, { useRef, useState } from "react";
import { Link } from "react-router-dom";
import { Field, Form, Formik } from "formik";
import Icon from "@mdi/react";
import { mdiCamera } from "@mdi/js";
import Webcam from "react-webcam";

const Login = () => {
  const [isLogined, setIsLogined] = useState(true);
  const [image, setImage] = useState(null);
  const [cameraAllowed, setCameraAllowed] = useState(true);
  const webcamRef = useRef(null);

  const capture = () => {
    const imageSrc = webcamRef.current.getScreenshot();
    setImage(imageSrc);
  };

  const retake = () => {
    setImage(null);
  };

  const handleUserMediaError = () => {
    setCameraAllowed(false);
  };
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
        <div className="mt-20 w-full flex flex-col items-center justify-center">
          <div>
            <p className="font-semibold text-xl text-start mb-8">
              Please capture your face to continue
            </p>
            <div
              className={`w-[514px] h-[450px] flex items-center justify-center rounded-lg border border-[#90909090] ${
                !cameraAllowed && "bg-[#C0C0C0]"
              }`}
            >
              {image ? (
                <img
                  src={image}
                  alt="Uploaded"
                  className="w-full h-full object-cover rounded-lg"
                />
              ) : cameraAllowed ? (
                <Webcam
                  audio={false}
                  ref={webcamRef}
                  screenshotFormat="image/jpeg"
                  className="w-full h-full object-cover rounded-lg"
                  onUserMediaError={handleUserMediaError}
                />
              ) : (
                <p className="text-[#808080]">
                  <Icon path={mdiCamera} size={4} />
                </p>
              )}
            </div>
          </div>
          {image ? (
            <div className="flex gap-10 my-10">
              <button className="rounded-xl py-2 mt-10 font-semibold text-lg px-8 text-black bg-[#A0A0A0] " onClick={retake}>
                Re-take
              </button>
              <button className="rounded-xl py-2 mt-10 font-semibold text-lg px-8 text-white bg-[#261E3B]">
                Continue
              </button>
            </div>
          ) : (
            <button
              className="rounded-xl py-2 mt-10 font-semibold text-lg px-8 text-white bg-[#261E3B] disabled:bg-gray-200 disabled:text-gray-400"
              onClick={capture}
              disabled={!cameraAllowed}
            >
              Capture
            </button>
          )}
        </div>
      ) : (
        <Formik>
          <Form>
            <div className="flex w-full flex-col items-center justify-center my-16">
              <div className="w-[514px] h-[540px] rounded-3xl flex flex-col  items-center border-[3px] shadow-[10px_10px_15px_rgba(0,0,0,0.20)]">
                <h1 className="mt-8 text-2xl font-medium">
                  Welcome to Sicu-aura
                </h1>
                <p className="text-[#bcbcbc] text-sm font-normal mt-4">
                  Your one stop safety solutions using innovative technology
                </p>
                <div className="w-full p-20">
                  <Field
                    type="text"
                    name="name"
                    className="w-full border-b-2  focus:border-black py-2 outline-none mb-9 text-lg"
                    placeholder="Hospital name"
                  />
                  <Field
                    type="text"
                    name="email"
                    className="w-full border-b-2  focus:border-black py-2 outline-none mb-9 text-lg"
                    placeholder="Email ID"
                  />
                  <Field
                    type="text"
                    name="password"
                    className="w-full border-b-2  focus:border-black py-2 outline-none mb-9 text-lg"
                    placeholder="Password"
                  />
                  <Field
                    type="text"
                    name="accessCode"
                    className="w-full border-b-2  focus:border-black py-2 outline-none mb-9 text-lg"
                    placeholder="Special Access Code"
                  />
                </div>
              </div>
              <button
                type="submit"
                className="mt-16  text-white font-semibold bg-[#261E3B] rounded-2xl py-3 px-14 text-lg"
              >
                Login
              </button>
            </div>
          </Form>
        </Formik>
      )}
      <p className="text-center text-sm mt-10 text-[#BCBCBC]">
        • Terms and Condition privacy policy
      </p>
    </div>
  );
};

export default Login;
