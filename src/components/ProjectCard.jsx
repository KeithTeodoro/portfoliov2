import { useState } from "react";

export default function ProjectCard({ projectType, title, image, link }) {
  const [showBackdrop, setShowBackdrop] = useState(false);

  const handleHover = () => {
    setShowBackdrop(true);
  };

  const handleHoverOut = () => {
    setShowBackdrop(false);
  };
  const handleClick = () => {
    setShowBackdrop(false);

    link();
  };
  return (
    <div className="md:max-w-[550px] flex gap-5 flex-col md:flex-row">
      <div className="md:max-w-[150px] flex items-center md:items-start md:flex-col justify-between md:justify-normal gap-10">
        <div className="flex flex-col md:gap-3">
          <h2 className="font-ibmSans text-xl md:text-2xl font-bold">
            {title}
          </h2>
          <p className="flex-wrap italic font-ibmSans text-md">{projectType}</p>
        </div>
        <i
          className="fa-solid fa-arrow-up-right-from-square text-lg md:text-2xl cursor-pointer hover:text-blue-900"
          onClick={handleClick}
          onMouseEnter={handleHover}
          onMouseLeave={handleHoverOut}
        ></i>
      </div>
      <div
        className="cursor-pointer xl:relative"
        onMouseEnter={handleHover}
        onMouseLeave={handleHoverOut}
      >
        <img
          src={image}
          alt={title}
          className="object-fit w-full h-full"
          onClick={handleClick}
        />
        {showBackdrop && (
          <div className="absolute inset-0 flex justify-center items-center bg-black opacity-50 transition-opacity duration-300 rounded-lg">
            <span className="text-white text-lg font-bold">{title}</span>
          </div>
        )}
      </div>
    </div>
  );
}
