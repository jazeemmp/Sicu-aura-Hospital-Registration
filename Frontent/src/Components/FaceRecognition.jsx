import React, { useRef, useState } from "react";
import Icon from "@mdi/react";
import { mdiCamera } from "@mdi/js";
import Webcam from "react-webcam";
import { useNavigate } from "react-router-dom";

const FaceRecognition = () => {
  const navigate = useNavigate();
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
          <button
            className="rounded-xl py-2 mt-10 font-semibold text-lg px-8 text-black bg-[#A0A0A0] "
            onClick={retake}
          >
            Re-take
          </button>
          <button
            onClick={() => navigate("/")}
            className="rounded-xl py-2 mt-10 font-semibold text-lg px-8 text-white bg-[#261E3B]"
          >
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
  );
};

export default FaceRecognition;
