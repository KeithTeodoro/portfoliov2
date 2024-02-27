import project1 from "../assets/proj1.png";
import project2 from "../assets/proj2.png";
import project3 from "../assets/proj3.png";
import project4 from "../assets/proj4.png";
import ProjectCard from "./ProjectCard";
import openTab from "../function";

export default function Works() {
  return (
    <>
      <div className="h-full md:p-16">
        <p className="italic font-ibmSans text-lg font-bold text-center md:text-start">
          Work
        </p>
        <h1 className="font-bold font-ibmSans text-4xl mb-10 text-center md:text-start">
          RECENT PROJECT
        </h1>
        <section className="flex flex-col gap-8">
          <div className="flex justify-evenly gap-5 xl:gap-x-24 flex-wrap">
            <ProjectCard
              image={project1}
              title="Project Management"
              projectType="Udemy Project"
              link={() =>
                openTab("https://guileless-sherbet-748dc3.netlify.app/")
              }
            />
            <ProjectCard
              image={project2}
              title="ALMOST Final Countdown"
              projectType="Udemy Project"
              link={() => openTab("https://dreamy-druid-fd86cc.netlify.app")}
            />
          </div>
          <div className="flex justify-evenly gap-5 xl:gap-x-24 flex-wrap">
            <ProjectCard
              image={project3}
              title="Investment Calculator"
              projectType="Udemy Project"
              link={() =>
                openTab("https://roaring-pavlova-d4dc4d.netlify.app/")
              }
            />
            <ProjectCard
              image={project4}
              title="TailwindCSS Practice"
              projectType="Udemy Project"
              link={() =>
                openTab("https://statuesque-concha-21c3df.netlify.app/")
              }
            />
          </div>
        </section>
        <div className="w-full flex justify-center mt-16">
          <button
            className="bg-dark text-slate-50 px-10 py-2 flex items-center gap-2 lg:text-base text-xl hover:bg-customBlue hover:text-customColorOne"
            onClick={() => openTab("https://github.com/KeithTeodoro")}
          >
            Github Account{" "}
            <i className="fa-solid fa-arrow-up-right-from-square"></i>
          </button>
        </div>
      </div>
    </>
  );
}
