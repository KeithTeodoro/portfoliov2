import HTMLIcon from "../assets/html.png";
import CSSIcon from "../assets/css.png";
import TailwindIcon from "../assets/tailwind.png";
import IonicIcon from "../assets/ionic.png";
import SassIcon from "../assets/sass.png";
import ToolIcon from "../components/ToolIcon";
import AngularIcon from "../assets/angular.png";
import ReactIcon from "../assets/reactImg.png";
import NodeIcon from "../assets/nodejs.png";
import MongooseIcon from "../assets/mongoose.png";
import ExpressIcon from "../assets/expressjs.png";
import SpringBootIcon from "../assets/springboot.png";
import ASPNetIcon from "../assets/aspnet.png";
import MySQLIcon from "../assets/mysql.png";
import MongoDBIcon from "../assets/mongodb.png";
import CloudinaryIcon from "../assets/cloudinary.png";
import FirebaseIcon from "../assets/firebase.png";
import GoHighlevelIcon from "../assets/gohighlevel.png";
import ZapierIcon from "../assets/zapier.png";
import TwilioIcon from "../assets/twilio.png";
export default function Tools() {
  return (
    <div className=" md:flex md:flex-col md:w-full md:items-center md:gap-5">
      <div className="flex flex-col gap-2 mb-2 items-center flex-wrap">
        <p className="font-ibmSans font-bold text-sm md:italic md:text-lg">
          Tools
        </p>
        <p className="font-bold font-ibmSans text-md md:text-4xl">
          THE TOOLS THAT I HAVE USED
        </p>
      </div>
      <div className="border-b-2 border-black/20 mb-5 md:hidden"></div>
      <h1 className="text-center mb-4 md:mb-5 font-bold font-ibmSans text-xl w-full border-2 border-dark md:border-none bg-dark text-slate-50 ">
        FRONTEND
      </h1>

      <div
        id="frontend"
        className="imgContainer grid grid-cols-3 gap-5 md:gap-10 md:flex place-items-center mb-3"
      >
        <ToolIcon icon={HTMLIcon} text="HTML" />
        <ToolIcon icon={TailwindIcon} text="TAILWIND" />
        <ToolIcon icon={CSSIcon} text="CSS" />

        <ToolIcon icon={IonicIcon} text="IONIC" />
        <ToolIcon icon={AngularIcon} text="ANGULAR" />
        <ToolIcon icon={SassIcon} text="SASS" />
        <ToolIcon icon={ReactIcon} text="REACTJS" />
      </div>
      <h1 className="text-center mb-4 md:mb-5 font-bold font-ibmSans w-full text-xl  border-2 border-dark md:border-none bg-dark text-slate-50 ">
        BACKEND
      </h1>
      <div
        id="backend"
        className="imgContainer grid grid-cols-2 md:gap-10 gap-5 md:flex place-items-center mb-3"
      >
        <ToolIcon icon={NodeIcon} text="NODEJS" />
        <ToolIcon icon={MongooseIcon} text="MONGOOSE" />
        <ToolIcon icon={ExpressIcon} text="EXPRESS" />
        <ToolIcon icon={SpringBootIcon} text="SPRINGBOOT" />
        <ToolIcon icon={ASPNetIcon} text="ASP.NET" />
      </div>
      <h1 className="text-center mb-4 md:mb-5 font-bold font-ibmSans text-xl w-full border-2 border-dark md:border-none bg-dark text-slate-50 ">
        DATABASE/STORAGE
      </h1>
      <div
        id="dbs"
        className="imgContainer grid grid-cols-2 md:gap-10 gap-5 md:flex place-items-center mb-3"
      >
        <ToolIcon icon={MySQLIcon} text="MYSQL" />
        <ToolIcon icon={MongoDBIcon} text="MONGODB" />
        <ToolIcon icon={FirebaseIcon} text="FIREBASE" />
        <ToolIcon icon={CloudinaryIcon} text="CLOUDINARY" />
      </div>
      <h1 className="text-center mb-4 md:mb-5 font-bold font-ibmSans text-xl w-full border-2 border-dark md:border-none bg-dark text-slate-50 ">
        OTHERS
      </h1>
      <div
        id="others"
        className="imgContainer grid grid-cols-2 md:gap-10 gap-5 md:flex place-items-center mb-3"
      >
        <ToolIcon icon={ZapierIcon} text="ZAPIER" />
        <ToolIcon icon={GoHighlevelIcon} text="GOHIGHLEVEL" />
        <ToolIcon icon={TwilioIcon} text="TWILIO" />
      </div>
    </div>
  );
}
