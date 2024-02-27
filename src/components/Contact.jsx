import ContactMePage from "./ContactMePage";
import { useState, useEffect } from "react";
export default function Contact() {
  const [submitMessage, setSubmitMessage] = useState({
    message: null,
    color: null,
  });

  useEffect(() => {
    const timeout = setTimeout(() => {
      setSubmitMessage({
        message: null,
        color: null,
      });
    }, 3000);

    return () => clearTimeout(timeout);
  }, [submitMessage]);

  return (
    <div className="grid md:place-content-center md:grid-cols-2 md:justify-center xl:px-48 h-full w-full gap-2">
      {submitMessage.message && (
        <div
          className={`absolute right-6 top-8 ${submitMessage.color} p-3 md:p-5 rounded-md fade-out`}
        >
          <p className="font-ibmSans text-lg">{submitMessage.message}</p>
        </div>
      )}
      <div className="grid text-center md:text-start gap-2">
        <div className="flex flex-col gap-2">
          <p className="font-bold non-italic md:italic font-ibmSans text-lg">
            Contact
          </p>
          <h1 className="font-bold text-4xl font-ibmSans">REACH OUT</h1>
        </div>
        <div className="flex items-start md:flex-col gap-2 justify-center font-ibmSans font-bold md:text-xl flex-wrap ">
          <a
            href="https://www.facebook.com/Htieek/"
            target="_blank"
            className="hover:border-b-2 hover:border-dark transition ease-in-out duration-500"
          >
            FACEBOOK
          </a>
          <a
            href="mailto:teodorokeithandref@gmail.com"
            className="hover:border-b-2 hover:border-dark transition ease-in-out duration-500"
          >
            EMAIL
          </a>
          <a
            href="https://www.instagram.com/keithfojas/"
            target="_blank"
            className="hover:border-b-2 hover:border-dark transition ease-in-out duration-500"
          >
            INSTAGRAM
          </a>
          <a
            href="https://www.linkedin.com/in/keithandreteodoro/"
            target="_blank"
            className="hover:border-b-2 hover:border-dark transition ease-in-out duration-500"
          >
            LINKEDIN
          </a>
        </div>
      </div>
      <ContactMePage setSubmitMessage={setSubmitMessage} />
    </div>
  );
}
