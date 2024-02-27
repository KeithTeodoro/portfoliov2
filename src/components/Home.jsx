import HomeImage from "../assets/picture.png";
import openTab from "../function";
export default function Home() {
  return (
    <div className="flex min-h-full justify-center items-center flex-col-reverse gap-3 px-5 lg:flex-row">
      <div className="text-center md:text-start lg:items-start md:max-w-[400px] flex flex-col items-center justify-center xl:items-start gap-4">
        <h1 className="text-3xl xl:text-7xl lg:text-5xl md:text-4xl font-ibmSans text-center lg:text-start">
          MY NAME IS <span className="font-bold">KEITH ANDRE F. TEODORO</span>
        </h1>
        <p className="font-ibmSans text-lg italic">
          A <span className="font-bold">Web Developer</span> based in the{" "}
          <span className="font-bold">Philippines</span>
        </p>

        <button
          className="flex gap-2 items-center px-7 py-3 bg-dark text-slate-50 hover:bg-customBlue hover:text-customColorOne"
          onClick={() =>
            openTab("https://www.linkedin.com/in/keithandreteodoro/")
          }
        >
          Let's Connect
          <i className="fa-solid fa-right-long"></i>
        </button>
      </div>
      <div className="homeContent flex flex-col justify-center items-center">
        <img src={HomeImage} alt="" className="object-fit" />
      </div>
    </div>
  );
}
