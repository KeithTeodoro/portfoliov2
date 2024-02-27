import cv from "../assets/Keith_Andre_Teodoro_CV.pdf";

export default function About() {
  return (
    <>
      <div className="h-full flex flex-col lg:flex-row md:justify-center md:items-center gap-5 md:gap-20">
        <div className="text-center md:text-start flex flex-col gap-3 lg:w-96">
          <p className="font-ibmSans font-bold md:italic">Experience</p>
          <h1 className="font-ibmSans font-bold text-xl md:text-4xl">
            MY EXPERIENCE
          </h1>
          <p className="text-justify font-ibmSans font-normal text-lg">
            Hello! I'm Keith Andre F. Teodoro, a web developer and IT graduate
            from Emilio Aguinaldo College. I'm passionate about solving problems
            and creating innovative solutions. Let's connect and build something
            amazing together!
          </p>
          <button className="bg-dark py-2 text-slate-50 hover:bg-customBlue hover:text-customColorOne">
            <p
              className="flex items-center flex-row justify-center gap-2"
              onClick={() => window.open(cv)}
            >
              Download my resume
              <i className="fa-solid fa-arrow-up-right-from-square"></i>
            </p>
          </button>
        </div>

        <div className="flex flex-col gap-5">
          <div className="md:hidden border-b-2 border-dark"></div>
          <div>
            <div className="flex flex-col-reverse md:flex-col  md:border-b-[1px] md:border-dark/20">
              <div
                id="company"
                className="flex flex-col md:flex-row md:justify-between md:flex-nowrap md:gap-10 md:mb-1"
              >
                <p className="text-center md:text-start font-bold">
                  ODR Technologies Inc.
                </p>
                <p className="text-center md:text-start ">
                  August 2023 - October 2023
                </p>
              </div>
              <h1 className="font-bold font-ibmSans text-center text-2xl md:text-start md:text-4xl md:mb-5">
                MOBILE APP DEVELOPER INTERN
              </h1>
            </div>
          </div>
          <div className="md:hidden border-b-2 border-dark"></div>
          <div>
            <div className="flex flex-col-reverse md:flex-col md:border-b-[1px] md:border-dark/20">
              <div
                id="company"
                className="flex flex-col md:flex-row md:justify-between md:flex-nowrap md:gap-10 md:mb-1"
              >
                <p className="text-center md:text-start font-bold">
                  Optogrow OMS
                </p>
                <p className="text-center md:text-start">
                  January 2023 - April 2023
                </p>
              </div>
              <h1 className="font-bold font-ibmSans text-center  text-2xl md:text-start  md:text-4xl  md:mb-5">
                SYSTEMS & AUTOMATION INTERN
              </h1>
            </div>
          </div>
          <div className="md:hidden border-b-2 border-dark"></div>
        </div>
      </div>
    </>
  );
}
