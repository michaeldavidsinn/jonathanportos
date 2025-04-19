import { useState } from "react";
import { Link } from "react-router-dom";
import arrow from "../assets/icons/arrow.svg";

import yuccaVid from "../assets/videos/yuccavid.mp4";
import yucca1 from "../assets/images/yucca1.png";
import yucca2 from "../assets/images/yucca2.png";
import yucca3 from "../assets/images/yucca3.png";
import yucca4 from "../assets/images/yucca4.png";
import yuccaQR from "../assets/images/yuccaqr.png";

import pekkaVid from "../assets/videos/pekkavid.mp4";
import pekkaQR from "../assets/images/pekkaqr.png";
import pekka1 from "../assets/images/pekka1.png";
import pekka2 from "../assets/images/pekka2.png";
import pekka3 from "../assets/images/pekka3.png";

import chairVid from "../assets/videos/chairvid.mp4";
import chairQR from "../assets/images/chairqr.png";
import chair1 from "../assets/images/chair1.png";
import chair2 from "../assets/images/chair2.png";
import chair3 from "../assets/images/chair3.png";

import donutVid from "../assets/videos/donutvid.mp4";
import donutQR from "../assets/images/donutqr.png";
import donut1 from "../assets/images/donut1.png";
import donut2 from "../assets/images/donut2.png";

import threed1 from "../assets/images/3d1.png";
import threed2 from "../assets/images/3d2.png";
import threed3 from "../assets/images/3d3.png";
import threed4 from "../assets/images/3d4.png";
import threed5 from "../assets/images/3d5.png";

import plague1 from "../assets/images/plague1.png";
import plague2 from "../assets/images/plague2.png";
import plague3 from "../assets/images/plague3.png";
import plague4 from "../assets/images/plague4.png";
import plague5 from "../assets/images/plague5.jpg";

import acVid from "../assets/videos/acvid.mp4";
import acQR from "../assets/images/acqr.png";
import ac1 from "../assets/images/ac1.jpg";
import ac2 from "../assets/images/ac2.jpg";

import kdmiVid1 from "../assets/videos/kdmis.mp4";
import kdmiVid2 from "../assets/videos/kdmiss.mp4";
import kdmi1 from "../assets/images/kdmi1.jpg";
import kdmi2 from "../assets/images/kdmi2.jpg";
import kdmi3 from "../assets/images/kdmi3.jpg";
import kdmi4 from "../assets/images/kdmi4.jpg";
import kdmi5 from "../assets/images/kdmi5.jpg";
import kdmi6 from "../assets/images/kdmi6.jpg";
import kdmiQR from "../assets/images/kdmiqr.png";

import orange1 from "../assets/images/orange1.jpg";
import orange2 from "../assets/images/orange2.png";
import orange3 from "../assets/images/orange3.png";

import madame1 from "../assets/images/madame1.jpg";
import madame2 from "../assets/images/madame2.jpg";

import blender from "../assets/icons/blender.png";
import ae from "../assets/icons/ae.png";
import ai from "../assets/icons/ai.png";
import ps from "../assets/icons/ps.png";

const HomeInfo = ({ currentStage }) => {
  const [expanded, setExpanded] = useState(false);

  if (currentStage === 1) {
    return (
      <h1 className="sm:text-xl sm:leading-snug text-center bg-white py-4 px-8 text-black mx-5 rounded-md">
        Hi, I'm
        <span className="font-semibold mx-2 text-black">Jonathan</span>
        👋
        <br />A 3D Designer from Indonesia 🇮🇩
      </h1>
    );
  }

  if (currentStage === 2) {
    return (
      <div
        className={`sm:text-xl sm:leading-snug text-center ${
          expanded || !expanded ? "bg-white text-black" : "neo-brutalism-blue text-white"
        } py-4 px-8 mx-5 transition-all duration-500 ease-in-out rounded-md ${
          expanded ? "max-w-[900px] py-6" : "max-w-[320px]"
        } relative`}
      >
        <p
          className={`font-semibold mx-2 ${
            expanded || !expanded ? "text-black mb-4" : "text-white"
          }`}
        >
          Yucca AI
        </p>
  
        {!expanded && (
          <button
            onClick={() => setExpanded(true)}
            className="block mt-3 text-center text-sm font-semibold text-blue-500 bg-white px-4 py-2 rounded-md shadow mx-auto"
          >
            View details
          </button>
        )}
  
        {expanded && (
          <>
            {/* Icon in the top-right corner */}
            <img
              src={blender}
              alt="Blender Icon"
              className="absolute top-0 right-0 w-16 h-16 object-contain mt-4 mr-4"
            />
  
            {/* Main content: video and description */}
            <div className="mt-4 flex flex-col sm:flex-row items-start text-left gap-4">
              {/* Video */}
              <div className="w-full sm:w-1/3 mr-4">
                <div className="relative pb-[177%] w-full">
                  <video
                    src={yuccaVid}
                    controls
                    className="absolute top-0 left-0 w-full h-full object-cover rounded-md shadow-md"
                  >
                    Your browser does not support the video tag.
                  </video>
                </div>
              </div>
  
              {/* Description Text */}
              <div className="w-full sm:w-2/3 space-y-3">
                <p className="text-sm leading-relaxed">
                  In this project, I was responsible for creating animated
                  emotes for an application developed by our IT team as part of
                  the YUCCA AI competition. These emotes are designed to
                  visually express various emotions and reactions during user
                  interactions with the application, enhancing the overall user
                  experience by making the interface more engaging and
                  responsive.
                </p>
  
                <div className="h-3" />
  
                {/* Project Information */}
                <div className="flex items-center space-x-4">
                  {/* Text Information */}
                  <div className="w-full sm:w-2/3 space-y-2">
                    <div className="h-1" />
  
                    <div className="text-sm leading-relaxed space-y-1">
                      <p>
                        <span className="font-bold">Client:</span> IT Yucca AI
                        Competition
                      </p>
                      <p>
                        <span className="font-bold">Job Desk:</span> Animator
                      </p>
                      <p>
                        <span className="font-bold">Project:</span> YUCCA AI
                        Competition 2024
                      </p>
                      <p>
                        <span className="font-bold">Project Video Link:</span>{" "}
                        <a
                          href="https://bit.ly/JFLYuccaAI"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="underline text-blue-200"
                        >
                          https://bit.ly/JFLYuccaAI
                        </a>
                      </p>
                    </div>
                  </div>
  
                  {/* Image on the right */}
                  <div className="w-1/3">
                    <img
                      src={yuccaQR}
                      alt="Animated Emotes Preview"
                      className="w-full max-w-[80px]  object-contain"
                    />
                  </div>
                </div>
  
                <div className="h-3" />
  
                <div className="flex space-x-4">
                  <img
                    src={yucca1}
                    alt="Animated Emotes Preview"
                    className="w-full max-w-[100px]  object-contain"
                  />
                  <img
                    src={yucca3}
                    alt="Animated Emotes Preview"
                    className="w-full max-w-[100px]  object-contain"
                  />
                  <img
                    src={yucca4}
                    alt="Animated Emotes Preview"
                    className="w-full max-w-[100px]  object-contain"
                  />
                  <img
                    src={yucca2}
                    alt="Animated Emotes Preview"
                    className="w-full max-w-[90px]  object-contain"
                  />
                </div>
              </div>
            </div>
  
            {/* Hide Details Button */}
            <div className="mt-4 flex justify-end">
              <button
                onClick={() => setExpanded(false)}
                className="text-sm font-semibold text-white bg-blue-500 px-4 py-2 rounded-md shadow"
              >
                Hide details
              </button>
            </div>
          </>
        )}
      </div>
    );
  }

  if (currentStage === 3) {
    return (
      <div
        className={`sm:text-xl sm:leading-snug text-center ${
          expanded || !expanded ? "bg-white text-black" : "neo-brutalism-blue text-white"
        } py-4 px-8 mx-5 transition-all duration-500 ease-in-out rounded-md ${
          expanded ? "max-w-[900px] py-6" : "max-w-[320px]"
        } relative`}
      >
        <p
          className={`font-semibold mx-2 ${
            expanded || !expanded ? "text-black mb-4" : "text-white"
          }`}
        >
          P.E.K.K.A
        </p>

        {!expanded && (
          <button
            onClick={() => setExpanded(true)}
            className="block mt-3 text-center text-sm font-semibold text-blue-500 bg-white px-4 py-2 rounded-md shadow mx-auto"
          >
            View details
          </button>
        )}

        {expanded && (
          <>
            {/* Icon in the top-right corner */}
            <img
              src={blender}
              alt="Blender Icon"
              className="absolute top-0 right-0 w-16 h-16 object-contain mt-4 mr-4"
            />

            {/* Main content: video and description */}
            <div className="mt-4 flex flex-col sm:flex-row items-start text-left gap-4">
              {/* Video */}
              <div className="w-full sm:w-1/3 mr-4 mt-36">
                <div className="relative pb-[56.25%] w-full">
                  {" "}
                  {/* Aspect ratio of 16:9 for landscape */}
                  <video
                    src={pekkaVid}
                    controls
                    className="absolute top-0 left-0 w-full h-full object-cover rounded-md shadow-md"
                  >
                    Your browser does not support the video tag.
                  </video>
                </div>
              </div>

              {/* Description Text */}
              <div className="w-full sm:w-2/3 space-y-3">
                <p className="text-sm leading-relaxed">
                  For this project, I modeled a character based on P.E.K.K.A
                  from a game I like to play. After finishing the 3D model, I
                  created a simple environment to place it in. Then I added some
                  basic animations to bring the character to life. It was a fun
                  way to practice modeling, environment design, and animation
                  all in one project.
                </p>

                <div className="h-3" />

                {/* Project Information */}
                <div className="flex items-center space-x-4">
                  {/* Text Information */}
                  <div className="w-full sm:w-2/3 space-y-2">
                    <div className="h-1" />

                    <div className="text-sm leading-relaxed space-y-1">
                      <p>
                        <span className="font-bold">Client:</span> Personal
                        Project
                      </p>
                      <p>
                        <span className="font-bold">Job Desk:</span> 3D
                        modelling
                      </p>
                      <p>
                        <span className="font-bold">Project:</span> P.E.K.K.A
                        Project
                      </p>
                      <p>
                        <span className="font-bold">Project Video Link:</span>{" "}
                        <a
                          href="https://bit.ly/JFLPEKKA"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="underline text-blue-200"
                        >
                          https://bit.ly/JFLPEKKA
                        </a>
                      </p>
                    </div>
                  </div>

                  {/* Image on the right */}
                  <div className="w-1/3">
                    <img
                      src={pekkaQR}
                      alt="Animated Emotes Preview"
                      className="w-full max-w-[80px]  object-contain"
                    />
                  </div>
                </div>

                <div className="h-3" />

                <div className="flex space-x-4">
                  <img
                    src={pekka1}
                    alt="Animated Emotes Preview"
                    className="w-full max-w-[130px]  object-contain"
                  />
                  <img
                    src={pekka2}
                    alt="Animated Emotes Preview"
                    className="w-full max-w-[130px]  object-contain"
                  />
                  <img
                    src={pekka3}
                    alt="Animated Emotes Preview"
                    className="w-full max-w-[130px]  object-contain"
                  />
                </div>
              </div>
            </div>

            {/* Hide Details Button */}
            <div className="mt-4 flex justify-end">
              <button
                onClick={() => setExpanded(false)}
                className="text-sm font-semibold text-white bg-blue-500 px-4 py-2 rounded-md shadow"
              >
                Hide details
              </button>
            </div>
          </>
        )}
      </div>
    );
  }

  if (currentStage === 4) {
    return (
      <div
      className={`sm:text-xl sm:leading-snug text-center ${
        expanded || !expanded ? "bg-white text-black" : "neo-brutalism-blue text-white"
      } py-4 px-8 mx-5 transition-all duration-500 ease-in-out rounded-md ${
        expanded ? "max-w-[900px] py-6" : "max-w-[320px]"
      } relative`}
    >
      <p
        className={`font-semibold mx-2 ${
          expanded || !expanded ? "text-black mb-4" : "text-white"
        }`}
      >
          Fredericia Chair
        </p>

        {!expanded && (
          <button
            onClick={() => setExpanded(true)}
            className="block mt-3 text-center text-sm font-semibold text-blue-500 bg-white px-4 py-2 rounded-md shadow mx-auto"
          >
            View details
          </button>
        )}

        {expanded && (
          <>
            {/* Icon in the top-right corner */}
            <img
              src={blender}
              alt="Blender Icon"
              className="absolute top-0 right-0 w-16 h-16 object-contain mt-4 mr-4"
            />

            {/* Main content: video and description */}
            <div className="mt-4 flex flex-col sm:flex-row items-start text-left gap-4">
              {/* Video */}
              <div className="w-full sm:w-1/3 mr-4">
                <div className="relative pb-[177%] w-full">
                  <video
                    src={chairVid}
                    controls
                    className="absolute top-0 left-0 w-full h-full object-cover rounded-md shadow-md"
                  >
                    Your browser does not support the video tag.
                  </video>
                </div>
              </div>

              {/* Description Text */}
              <div className="w-full sm:w-2/3 space-y-3">
                <p className="text-sm leading-relaxed">
                  After learning to create a donut, I moved on to more complex
                  projects. I chose to model a chair from the Danish brand
                  Fredericia and created an animation similar to a product
                  advertisement. This project helped me practice advanced
                  techniques like texturing, lighting, and animation, allowing
                  me to further develop my skills in Blender.
                </p>

                <div className="h-3" />

                {/* Project Information */}
                <div className="flex items-center space-x-4">
                  {/* Text Information */}
                  <div className="w-full sm:w-2/3 space-y-2">
                    <div className="h-1" />

                    <div className="text-sm leading-relaxed space-y-1">
                      <p>
                        <span className="font-bold">Client:</span> Personal
                        Project
                      </p>
                      <p>
                        <span className="font-bold">Job Desk:</span> 3D
                        modelling
                      </p>
                      <p>
                        <span className="font-bold">Project:</span> Fredericia
                        chair project
                      </p>
                      <p>
                        <span className="font-bold">Project Video Link:</span>{" "}
                        <a
                          href="https://bit.ly/JFLChair"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="underline text-blue-200"
                        >
                          https://bit.ly/JFLChair
                        </a>
                      </p>
                    </div>
                  </div>

                  {/* Image on the right */}
                  <div className="w-1/3">
                    <img
                      src={chairQR}
                      alt="Animated Emotes Preview"
                      className="w-full max-w-[80px]  object-contain"
                    />
                  </div>
                </div>

                <div className="h-3" />

                <div className="flex space-x-4">
                  <img
                    src={chair1}
                    alt="Animated Emotes Preview"
                    className="w-full max-w-[130px]  object-contain"
                  />
                  <img
                    src={chair2}
                    alt="Animated Emotes Preview"
                    className="w-full max-w-[130px]  object-contain"
                  />
                  <img
                    src={chair3}
                    alt="Animated Emotes Preview"
                    className="w-full max-w-[130px]  object-contain"
                  />
                </div>
              </div>
            </div>

            {/* Hide Details Button */}
            <div className="mt-4 flex justify-end">
              <button
                onClick={() => setExpanded(false)}
                className="text-sm font-semibold text-white bg-blue-500 px-4 py-2 rounded-md shadow"
              >
                Hide details
              </button>
            </div>
          </>
        )}
      </div>
    );
  }

  if (currentStage === 5) {
    return (
      <div
        className={`sm:text-xl sm:leading-snug text-center ${
          expanded || !expanded ? "bg-white text-black" : "neo-brutalism-blue text-white"
        } py-4 px-8 mx-5 transition-all duration-500 ease-in-out rounded-md ${
          expanded ? "max-w-[900px] py-6" : "max-w-[320px]"
        } relative`}
      >
        <p
          className={`font-semibold mx-2 ${
            expanded || !expanded ? "text-black mb-4" : "text-white"
          }`}
        >
          Donut
        </p>

        {!expanded && (
          <button
            onClick={() => setExpanded(true)}
            className="block mt-3 text-center text-sm font-semibold text-blue-500 bg-white px-4 py-2 rounded-md shadow mx-auto"
          >
            View details
          </button>
        )}

        {expanded && (
          <>
            {/* Icon in the top-right corner */}
            <img
              src={blender}
              alt="Blender Icon"
              className="absolute top-0 right-0 w-16 h-16 object-contain mt-4 mr-4"
            />

            {/* Main content: video and description */}
            <div className="mt-4 flex flex-col sm:flex-row items-start text-left gap-4">
              {/* Video */}
              <div className="w-full sm:w-1/3 mr-4">
                <div className="relative pb-[177%] w-full">
                  <video
                    src={donutVid}
                    controls
                    className="absolute top-0 left-0 w-full h-full object-cover rounded-md shadow-md"
                  >
                    Your browser does not support the video tag.
                  </video>
                </div>
              </div>

              {/* Description Text */}
              <div className="w-full sm:w-2/3 space-y-3">
                <p className="text-sm leading-relaxed">
                  When I was learning to transition from MAYA to Blender, one of
                  the most common tutorials I came across was creating a donut.
                  It seemed like the go-to project for beginners, as it covers a
                  lot of essential skills like modeling, texturing, and
                  lighting. So, for my first project in Blender, I decided to
                  follow this popular tutorial and create a chocolate donut. It
                  was a fun and challenging experience, helping me familiarize
                  myself with Blender's interface and tools, while also giving
                  me a solid foundation in 3D modeling.
                </p>

                <div className="h-3" />

                {/* Project Information */}
                <div className="flex items-center space-x-4">
                  {/* Text Information */}
                  <div className="w-full sm:w-2/3 space-y-2">
                    <div className="h-1" />

                    <div className="text-sm leading-relaxed space-y-1">
                      <p>
                        <span className="font-bold">Client:</span> Personal
                        Project
                      </p>
                      <p>
                        <span className="font-bold">Job Desk:</span> 3D
                        modelling
                      </p>
                      <p>
                        <span className="font-bold">Project:</span> Blender Guru
                        Donut Project
                      </p>
                      <p>
                        <span className="font-bold">Project Video Link:</span>{" "}
                        <a
                          href="https://bit.ly/JFLDonut"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="underline text-blue-200"
                        >
                          https://bit.ly/JFLDonut
                        </a>
                      </p>
                    </div>
                  </div>

                  {/* Image on the right */}
                  <div className="w-1/3">
                    <img
                      src={donutQR}
                      alt="Animated Emotes Preview"
                      className="w-full max-w-[80px]  object-contain"
                    />
                  </div>
                </div>

                <div className="h-3" />

                <div className="flex space-x-4">
                  <img
                    src={donut1}
                    alt="Animated Emotes Preview"
                    className="w-full max-w-[120px]  object-contain"
                  />
                  <img
                    src={donut2}
                    alt="Animated Emotes Preview"
                    className="w-full max-w-[130px]  object-contain"
                  />
                </div>
              </div>
            </div>

            {/* Hide Details Button */}
            <div className="mt-4 flex justify-end">
              <button
                onClick={() => setExpanded(false)}
                className="text-sm font-semibold text-white bg-blue-500 px-4 py-2 rounded-md shadow"
              >
                Hide details
              </button>
            </div>
          </>
        )}
      </div>
    );
  }

  if (currentStage === 6) {
    return (
      <div
        className={`sm:text-xl sm:leading-snug text-center ${
          expanded || !expanded ? "bg-white text-black" : "neo-brutalism-blue text-white"
        } py-4 px-8 mx-5 transition-all duration-500 ease-in-out rounded-md ${
          expanded ? "max-w-[900px] py-6" : "max-w-[320px]"
        } relative`}
      >
        <p
          className={`font-semibold mx-2 ${
            expanded || !expanded ? "text-black mb-4" : "text-white"
          }`}
        >
          Basic Modelling
        </p>

        {!expanded && (
          <button
            onClick={() => setExpanded(true)}
            className="block mt-3 text-center text-sm font-semibold text-blue-500 bg-white px-4 py-2 rounded-md shadow mx-auto"
          >
            View details
          </button>
        )}

        {expanded && (
          <>
            {/* Icon in the top-right corner */}
            <img
              src={blender}
              alt="Blender Icon"
              className="absolute top-0 right-0 w-16 h-16 object-contain mt-4 mr-4"
            />

            {/* Main content: video and description */}
            <div className="mt-4 flex flex-col sm:flex-row items-start text-left gap-4">
              {/* Description Text */}
              <div className="w-full sm:w-2/3 space-y-3">
                <p className="text-sm leading-relaxed">
                  I also created several 3D models of simple objects such as a
                  house, car, plate, and weapons like a katana and an iron club.
                </p>

                <div className="h-3" />

                {/* Project Information */}
                <div className="flex items-center space-x-4">
                  {/* Text Information */}
                  <div className="w-full sm:w-2/3 space-y-2">
                    <div className="h-1" />

                    <div className="text-sm leading-relaxed space-y-1">
                      <p>
                        <span className="font-bold">Client:</span> Personal
                        Project
                      </p>
                      <p>
                        <span className="font-bold">Job Desk:</span> 3D
                        modelling
                      </p>
                      <p>
                        <span className="font-bold">Project:</span> 2024 3D
                        class
                      </p>
                    </div>
                  </div>
                </div>

                <div className="h-3" />
              </div>

              {/* Image Section */}
              <div className="w-full sm:w-1/3 flex flex-wrap gap-4">
                <img
                  src={threed1}
                  alt="Animated Emotes Preview"
                  className="w-full max-w-[120px]  object-contain"
                />
                <img
                  src={threed2}
                  alt="Animated Emotes Preview"
                  className="w-full max-w-[120px]  object-contain"
                />
                <img
                  src={threed3}
                  alt="Animated Emotes Preview"
                  className="w-full max-w-[120px]  object-contain"
                />
                <img
                  src={threed4}
                  alt="Animated Emotes Preview"
                  className="w-full max-w-[120px]  object-contain"
                />
                <img
                  src={threed5}
                  alt="Animated Emotes Preview"
                  className="w-full max-w-[120px]  object-contain"
                />
              </div>
            </div>

            {/* Hide Details Button */}
            <div className="mt-4 flex justify-end">
              <button
                onClick={() => setExpanded(false)}
                className="text-sm font-semibold text-white bg-blue-500 px-4 py-2 rounded-md shadow"
              >
                Hide details
              </button>
            </div>
          </>
        )}
      </div>
    );
  }

  if (currentStage === 7) {
    return (
      <div
        className={`sm:text-xl sm:leading-snug text-center ${
          expanded || !expanded ? "bg-white text-black" : "neo-brutalism-blue text-white"
        } py-4 px-8 mx-5 transition-all duration-500 ease-in-out rounded-md ${
          expanded ? "max-w-[900px] py-6" : "max-w-[320px]"
        } relative`}
      >
        <p
          className={`font-semibold mx-2 ${
            expanded || !expanded ? "text-black mb-4" : "text-white"
          }`}
        >
          Plague Doctor
        </p>

        {!expanded && (
          <button
            onClick={() => setExpanded(true)}
            className="block mt-3 text-center text-sm font-semibold text-blue-500 bg-white px-4 py-2 rounded-md shadow mx-auto"
          >
            View details
          </button>
        )}

        {expanded && (
          <>
            {/* Icon in the top-right corner */}
            <img
              src={blender}
              alt="Blender Icon"
              className="absolute top-0 right-0 w-16 h-16 object-contain mt-4 mr-4"
            />

            {/* Main content: video and description */}
            <div className="mt-4 flex flex-col sm:flex-row items-start text-left gap-4">
              {/* Description Text */}
              <div className="w-full sm:w-2/3 space-y-3">
                <p className="text-sm leading-relaxed">
                  This character is inspired by a plague doctor from the Dark
                  Ages. After losing one of their arms to the plague, they
                  replaced it with a prosthetic ending in a syringe, suited for
                  their medical work. The syringe symbolizes their dedication to
                  treating the sick during the plague, reflecting both the grim
                  reality of their work and their resilience in the face of
                  tragedy. The prosthetic becomes a symbol of their ingenuity
                  and commitment to combating the disease.
                </p>

                <div className="h-3" />

                {/* Project Information */}
                <div className="flex items-center space-x-4">
                  {/* Text Information */}
                  <div className="w-full sm:w-2/3 space-y-2">
                    <div className="h-1" />

                    <div className="text-sm leading-relaxed space-y-1">
                      <p>
                        <span className="font-bold">Client:</span> Personal
                        Project
                      </p>
                      <p>
                        <span className="font-bold">Job Desk:</span> 3D
                        modelling
                      </p>
                      <p>
                        <span className="font-bold">Project:</span> 2024 3D
                        class
                      </p>
                    </div>
                  </div>
                </div>

                <div className="h-3" />
              </div>

              {/* Image Section */}
              <div className="w-full sm:w-1/3 flex flex-wrap gap-4">
                {/* Gambar 1, 2, 3 di atas */}
                <div className="flex w-full gap-4">
                  <img
                    src={plague1}
                    alt="Animated Emotes Preview"
                    className="w-full max-w-[100px]  object-contain"
                  />
                  <img
                    src={plague2}
                    alt="Animated Emotes Preview"
                    className="w-full max-w-[80px]  object-contain"
                  />
                  <img
                    src={plague3}
                    alt="Animated Emotes Preview"
                    className="w-full max-w-[80px]  object-contain"
                  />
                </div>

                {/* Gambar 4 dan 5 di bawah */}
                <div className="flex w-full gap-4">
                  <img
                    src={plague4}
                    alt="Animated Emotes Preview"
                    className="w-full max-w-[130px]  object-contain"
                  />
                  <img
                    src={plague5}
                    alt="Animated Emotes Preview"
                    className="w-full max-w-[150px]  object-contain"
                  />
                </div>
              </div>
            </div>

            {/* Hide Details Button */}
            <div className="mt-4 flex justify-end">
              <button
                onClick={() => setExpanded(false)}
                className="text-sm font-semibold text-white bg-blue-500 px-4 py-2 rounded-md shadow"
              >
                Hide details
              </button>
            </div>
          </>
        )}
      </div>
    );
  }

  if (currentStage === 8) {
    return (
      <div
        className={`sm:text-xl sm:leading-snug text-center ${
          expanded || !expanded ? "bg-white text-black" : "neo-brutalism-blue text-white"
        } py-4 px-8 mx-5 transition-all duration-500 ease-in-out rounded-md ${
          expanded ? "max-w-[900px] py-6" : "max-w-[320px]"
        } relative`}
      >
        <p
          className={`font-semibold mx-2 ${
            expanded || !expanded ? "text-black mb-4" : "text-white"
          }`}
        >
          Journey to Art & Craft
        </p>

        {!expanded && (
          <button
            onClick={() => setExpanded(true)}
            className="block mt-3 text-center text-sm font-semibold text-blue-500 bg-white px-4 py-2 rounded-md shadow mx-auto"
          >
            View details
          </button>
        )}

        {expanded && (
          <>
            {/* Logo Icon in the top-right corner */}
            <div className="absolute top-0 right-0 mt-4 mr-4 flex space-x-4">
              <img
                src={ai}
                alt="Blender Icon"
                className="w-16 h-16 object-contain"
              />
              <img
                src={ae}
                alt="Blender Icon"
                className="w-16 h-16 object-contain"
              />
              <img
                src={ps}
                alt="Blender Icon"
                className="w-16 h-16 object-contain"
              />
            </div>

            {/* Main content: video and description */}
            <div className="mt-4 flex flex-col sm:flex-row items-start text-left gap-4">
              {/* Video */}
              <div className="w-full sm:w-1/3 mr-4 mt-36">
                <div className="relative pb-[56.25%] w-full">
                  {" "}
                  {/* Aspect ratio of 16:9 for landscape */}
                  <video
                    src={acVid}
                    controls
                    className="absolute top-0 left-0 w-full h-full object-cover rounded-md shadow-md"
                  >
                    Your browser does not support the video tag.
                  </video>
                </div>
              </div>

              {/* Description Text */}
              <div className="w-full sm:w-2/3 space-y-3">
                <p className="text-sm leading-relaxed">
                  "Journey to Art and Craft" is an animated story about Emily, a
                  curious student who is magically transported back to the time
                  of the Art and Craft movement. In this historical journey,
                  Emily learns about the movement's focus on craftsmanship, the
                  beauty of handmade objects, and the rejection of mass
                  production. She discovers how the movement influenced art and
                  design. Eventually, Emily wakes up back in her classroom.
                </p>

                <div className="h-3" />

                {/* Project Information */}
                <div className="flex items-center space-x-4">
                  {/* Text Information */}
                  <div className="w-full sm:w-2/3 space-y-2">
                    <div className="h-1" />

                    <div className="text-sm leading-relaxed space-y-1">
                      <p>
                        <span className="font-bold">Client:</span> Class Group
                        Project
                      </p>
                      <p>
                        <span className="font-bold">Job Desk:</span> Animator, Editor
                      </p>
                      <p>
                        <span className="font-bold">Project:</span> 2023
                        Computer Graphic Class
                      </p>
                      <p>
                        <span className="font-bold">Project Video Link:</span>{" "}
                        <a
                          href="https://bit.ly/JFLAnC"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="underline text-blue-200"
                        >
                          https://bit.ly/JFLAnC
                        </a>
                      </p>
                    </div>
                  </div>

                  {/* Image on the right */}
                  <div className="w-1/3">
                    <img
                      src={acQR}
                      alt="Animated Emotes Preview"
                      className="w-full max-w-[80px] object-contain"
                    />
                  </div>
                </div>

                <div className="h-3" />

                <div className="flex space-x-4">
                  <img
                    src={ac1}
                    alt="Animated Emotes Preview"
                    className="w-full max-w-[130px] object-contain"
                  />
                  <img
                    src={ac2}
                    alt="Animated Emotes Preview"
                    className="w-full max-w-[130px] object-contain"
                  />
                </div>
              </div>
            </div>

            {/* Hide Details Button */}
            <div className="mt-4 flex justify-end">
              <button
                onClick={() => setExpanded(false)}
                className="text-sm font-semibold text-white bg-blue-500 px-4 py-2 rounded-md shadow"
              >
                Hide details
              </button>
            </div>
          </>
        )}
      </div>
    );
  }

  if (currentStage === 9) {
    return (
      <div
      className={`sm:text-xl sm:leading-snug text-center ${
        expanded || !expanded ? "bg-white text-black" : "neo-brutalism-blue text-white"
      } py-4 px-8 mx-5 transition-all duration-500 ease-in-out rounded-md ${
        expanded ? "max-w-[900px] py-6" : "max-w-[320px]"
      } relative`}
    >
      <p
        className={`font-semibold mx-2 ${
          expanded || !expanded ? "text-black mb-4" : "text-white"
        }`}
      >
          KDMI
        </p>

        {!expanded && (
          <button
            onClick={() => setExpanded(true)}
            className="block mt-3 text-center text-sm font-semibold text-blue-500 bg-white px-4 py-2 rounded-md shadow mx-auto"
          >
            View details
          </button>
        )}

        {expanded && (
          <>
            {/* Icon in the top-right corner */}
            <div className="absolute top-0 right-0 mt-4 mr-4 flex space-x-4">
              <img
                src={ae}
                alt="Blender Icon"
                className="w-16 h-16 object-contain"
              />
              <img
                src={ps}
                alt="Blender Icon"
                className="w-16 h-16 object-contain"
              />
            </div>

            {/* Main content: video and description */}
            <div className="mt-4 flex flex-col sm:flex-row items-start text-left gap-4">
              {/* Video */}
              <div className="w-full sm:w-1/3 mr-4">
                <div className="w-full">
                  <video
                    src={kdmiVid1}
                    muted
                    controls
                    className="w-full h-auto object-contain rounded-md shadow-md"
                  >
                    Your browser does not support the video tag.
                  </video>
                </div>
                <div className="w-full mt-4">
                  <video
                    src={kdmiVid2}
                    muted
                    controls
                    className="w-full h-auto object-contain rounded-md shadow-md"
                  >
                    Your browser does not support the video tag.
                  </video>
                </div>
              </div>

              {/* Description Text */}
              <div className="w-full sm:w-2/3 space-y-3">
                <p className="text-sm leading-relaxed">
                  KDMI 2024 was held at Universitas Ciputra, with this year's
                  theme featuring a lion mascot with its eyes closed to
                  symbolize fairness in the debate competition. In this debate
                  competition, I was working as an animator, creating an
                  animated video that was showcased during the event.
                </p>

                <div className="h-3" />

                {/* Project Information */}
                <div className="flex items-center space-x-4">
                  {/* Text Information */}
                  <div className="w-full sm:w-2/3 space-y-2">
                    <div className="h-1" />

                    <div className="text-sm leading-relaxed space-y-1">
                      <p>
                        <span className="font-bold">Client:</span> Personal
                        Project
                      </p>
                      <p>
                        <span className="font-bold">Job Desk:</span> Animator
                      </p>
                      <p>
                        <span className="font-bold">Project:</span> 2024
                        Kompetisi Debat Mahasiswa Indonesia
                      </p>
                      <p>
                        <span className="font-bold">Project Video Link:</span>{" "}
                        <a
                          href="https://bit.ly/JFLKDMI"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="underline text-blue-200"
                        >
                          https://bit.ly/JFLKDMI
                        </a>
                      </p>
                    </div>
                  </div>

                  {/* Image on the right */}
                  <div className="w-1/3">
                    <img
                      src={kdmiQR}
                      alt="Animated Emotes Preview"
                      className="w-full max-w-[80px]  object-contain"
                    />
                  </div>
                </div>

                <div className="h-3" />

                <div className="flex space-x-4 items-start">
                  {/* Kiri: Gambar 3 */}
                  <div className="flex items-center justify-center">
                    <img
                      src={kdmi3}
                      alt="Gambar 3"
                      className="w-full max-w-[120px]  object-contain"
                    />
                  </div>

                  {/* Kanan: Grid */}
                  <div className="grid grid-cols-3 gap-4">
                    {/* Baris 1 */}
                    <img
                      src={kdmi1}
                      alt="Gambar 1"
                      className="w-full max-w-[100px]  object-contain"
                    />
                    <img
                      src={kdmi2}
                      alt="Gambar 2"
                      className="w-full max-w-[100px]  object-contain"
                    />

                    {/* Spacer untuk baris 1 agar gambar tetap di baris pertama */}
                    <div />

                    {/* Baris 2 */}
                    <img
                      src={kdmi4}
                      alt="Gambar 4"
                      className="w-full max-w-[100px]  object-contain"
                    />
                    <img
                      src={kdmi5}
                      alt="Gambar 5"
                      className="w-full max-w-[100px]  object-contain"
                    />
                    <img
                      src={kdmi6}
                      alt="Gambar 6"
                      className="w-full max-w-[100px]  object-contain"
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* Hide Details Button */}
            <div className="mt-4 flex justify-end">
              <button
                onClick={() => setExpanded(false)}
                className="text-sm font-semibold text-white bg-blue-500 px-4 py-2 rounded-md shadow"
              >
                Hide details
              </button>
            </div>
          </>
        )}
      </div>
    );
  }

  if (currentStage === 10) {
    return (
      <div
      className={`sm:text-xl sm:leading-snug text-center ${
        expanded || !expanded ? "bg-white text-black" : "neo-brutalism-blue text-white"
      } py-4 px-8 mx-5 transition-all duration-500 ease-in-out rounded-md ${
        expanded ? "max-w-[900px] py-6" : "max-w-[320px]"
      } relative`}
    >
      <p
        className={`font-semibold mx-2 ${
          expanded || !expanded ? "text-black mb-4" : "text-white"
        }`}
      >
          スッキリ!! Orange Water
        </p>

        {!expanded && (
          <button
            onClick={() => setExpanded(true)}
            className="block mt-3 text-center text-sm font-semibold text-blue-500 bg-white px-4 py-2 rounded-md shadow mx-auto"
          >
            View details
          </button>
        )}

        {expanded && (
          <>
            {/* Icon in the top-right corner */}
            <div className="absolute top-0 right-0 mt-4 mr-4 flex space-x-4">
              <img
                src={ai}
                alt="Blender Icon"
                className="w-16 h-16 object-contain"
              />
              <img
                src={ps}
                alt="Blender Icon"
                className="w-16 h-16 object-contain"
              />
            </div>

            {/* Main content: video and description */}
            <div className="mt-4 flex flex-col sm:flex-row items-start text-left gap-4">
              {/* Video */}
              <img
                src={orange1}
                alt="Animated Emotes Preview"
                className="w-full max-w-[300px] object-contain"
              />

              {/* Description Text */}
              <div className="w-full sm:w-2/3 space-y-3">
                <p className="text-sm leading-relaxed">
                  The design features a refreshing sky-blue back- ground,
                  evoking a sense of purity and freshness, inspired by Japanese
                  beverage advertisements. The clean, minimalist layout
                  highlights the rejuvenating qualities of the desserts,
                  inviting the viewer to experience the cool, refreshing
                  indulgence, much like enjoying a chilled drink on a warm day.
                </p>

                <div className="h-3" />

                {/* Project Information */}
                <div className="flex items-center space-x-4">
                  {/* Text Information */}
                  <div className="w-full sm:w-2/3 space-y-2">
                    <div className="h-1" />

                    <div className="text-sm leading-relaxed space-y-1">
                      <p>
                        <span className="font-bold">Client:</span> Class Group
                        Project
                      </p>
                      <p>
                      <span className="font-bold">Job Desk:</span> Photograph Assistant, Editor, Typewriter
                      </p>
                      <p>
                        <span className="font-bold">Project:</span> 2024
                        Photography Class
                      </p>
                    </div>
                  </div>
                </div>

                <div className="h-3" />

                <div className="flex space-x-4">
                  <img
                    src={orange1}
                    alt="Animated Emotes Preview"
                    className="w-full max-w-[100px]  object-contain"
                  />
                  <img
                    src={orange2}
                    alt="Animated Emotes Preview"
                    className="w-full max-w-[100px]  object-contain"
                  />
                </div>
              </div>
            </div>

            {/* Hide Details Button */}
            <div className="mt-4 flex justify-end">
              <button
                onClick={() => setExpanded(false)}
                className="text-sm font-semibold text-white bg-blue-500 px-4 py-2 rounded-md shadow"
              >
                Hide details
              </button>
            </div>
          </>
        )}
      </div>
    );
  }

  if (currentStage === 11) {
    return (
      <div
      className={`sm:text-xl sm:leading-snug text-center ${
        expanded || !expanded ? "bg-white text-black" : "neo-brutalism-blue text-white"
      } py-4 px-8 mx-5 transition-all duration-500 ease-in-out rounded-md ${
        expanded ? "max-w-[900px] py-6" : "max-w-[320px]"
      } relative`}
    >
      <p
        className={`font-semibold mx-2 ${
          expanded || !expanded ? "text-black mb-4" : "text-white"
        }`}
      >
          One Dessert Many Memories
        </p>

        {!expanded && (
          <button
            onClick={() => setExpanded(true)}
            className="block mt-3 text-center text-sm font-semibold text-blue-500 bg-white px-4 py-2 rounded-md shadow mx-auto"
          >
            View details
          </button>
        )}

        {expanded && (
          <>
            {/* Icon in the top-right corner */}
            <div className="absolute top-0 right-0 mt-4 mr-4 flex space-x-4">
              <img
                src={ai}
                alt="Blender Icon"
                className="w-16 h-16 object-contain"
              />
              <img
                src={ps}
                alt="Blender Icon"
                className="w-16 h-16 object-contain"
              />
            </div>

            {/* Main content: video and description */}
            <div className="mt-4 flex flex-col sm:flex-row items-start text-left gap-4">
              {/* Video */}
              <img
                src={madame1}
                alt="Animated Emotes Preview"
                className="w-full max-w-[300px] object-contain"
              />

              {/* Description Text */}
              <div className="w-full sm:w-2/3 space-y-3">
                <p className="text-sm leading-relaxed">
                  "One Dessert, Many Memories" carries the theme of a dessert
                  loved by people of all ages, perfect for enjoying with family.
                  With the healthy concept from Madame Chang, each dessert
                  served is designed to be enjoyed by all generations,
                  supporting the theme of togetherness, and creating moments of
                  warmth and bonding.
                </p>

                <div className="h-3" />

                {/* Project Information */}
                <div className="flex items-center space-x-4">
                  {/* Text Information */}
                  <div className="w-full sm:w-2/3 space-y-2">
                    <div className="h-1" />

                    <div className="text-sm leading-relaxed space-y-1">
                      <p>
                        <span className="font-bold">Client:</span> Madame Chang
                      </p>
                      <p>
                        <span className="font-bold">Job Desk:</span> Photograph, Editor, IG Content Creator
                      </p>
                      <p>
                        <span className="font-bold">Project:</span> 2024
                        Photography Class
                      </p>
                    </div>
                  </div>
                </div>

                <div className="h-3" />

                <div className="flex space-x-4">
                  <img
                    src={madame2}
                    alt="Animated Emotes Preview"
                    className="w-full max-w-[500px] object-contain"
                  />
                </div>
              </div>
            </div>

            {/* Hide Details Button */}
            <div className="mt-4 flex justify-end">
              <button
                onClick={() => setExpanded(false)}
                className="text-sm font-semibold text-white bg-blue-500 px-4 py-2 rounded-md shadow"
              >
                Hide details
              </button>
            </div>
          </>
        )}
      </div>
    );
  }

  return null;
};

export default HomeInfo;
