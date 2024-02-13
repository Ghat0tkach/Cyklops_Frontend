import Image from "next/image";
import { FaGithub, FaGoogle, FaNodeJs, FaReact } from "react-icons/fa";
import { SiFastapi, SiNextdotjs, SiPython } from "react-icons/si";
const TechStackIcons = () => {
  return (
    <div className="container mx-auto my-8 bg-gray-800 text-center p-8 rounded-3xl shadow-md">
      <h1 className="text-4xl font-bold">Tech Stack Used</h1>
      <p className="mb-4 font-extralight text-xs">
        The following technologies have been integrated with the open-source
        LlaVA model
      </p>
      <div className="flex flex-wrap justify-center md:justify-between">
        {generateCard(SiNextdotjs, "Next.js")}
        {generateCard(FaNodeJs, "Node.js")}
        {generateCard(FaGoogle, "Google Gemini")}
        {generateCard(FaGithub, "GitHub")}
        {generateCard(SiFastapi, "FastAPI")}
        {generateCard(SiPython, "Python")}
        {generateCustomCard("🦜", "Langchain")}
        {/* Add more cards as needed */}
      </div>
    </div>
  );
};

const generateCard = (Icon, label) => (
  <div className=" p-4 mx-3 my-3 rounded-md shadow-md hover:scale-[1.5]  transition-all">
    <Icon size={64} className="text-gray-100  hover:text-none" />
    <p className="text-center mt-2 text-xs font-medium">{label}</p>
  </div>
);

const generateCustomCard = (emoji, label) => (
  <div className="p-4 mx-3 my-3 rounded-md shadow-md hover:scale-[1.5]  transition-all">
    <p
      className="text-[45px] text-center text-gray-100 hover:text-black"
      style={{ color: "green" }}
    >
      {emoji}
    </p>
    <p className="text-center mt-2 text-xs font-medium">{label}</p>
  </div>
);
export default TechStackIcons;
