import Input from "./Input";
import { useRef } from "react";

export default function ContactMePage({ setSubmitMessage }) {
  const emailRef = useRef(null);
  const subjectRef = useRef(null);
  const messageRef = useRef(null);

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Extract values from refs
    const email = emailRef.current.value;
    const subject = subjectRef.current.value;
    const message = messageRef.current.value;

    // Make a request to web3forms API to submit the form data
    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          apikey: import.meta.env.VITE_API_KEY,
          email,
          subject,
          message,
        }),
      });

      if (response.ok) {
        setSubmitMessage({
          message: "Message sent successfully!",
          color: "bg-green-400",
        });
      } else {
        setSubmitMessage({
          message: "Error submitting form. Please try again later.",
          color: "bg-red-400",
        });
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      setSubmitMessage({
        message: "Error submitting form. Please try again later.",
        color: "bg-red-500",
      });
    }
  };

  return (
    <div className="bg-customBlue p-6 flex flex-col rounded-lg w-full">
      <h1 className="mb-5 font-bold font-ibmSans text-lg md:text-3xl text-customColorOne">
        SEND A MESSAGE
      </h1>

      <form onSubmit={handleSubmit} className="flex flex-col gap-10">
        <Input placeholder="YOUR EMAIL" ref={emailRef} type="email" />
        <Input placeholder="SUBJECT" ref={subjectRef} type="text" />
        <Input placeholder="MESSAGE" textarea ref={messageRef} />
        <button
          type="submit"
          className="w-full bg-customColorOne text-customBlue font-ibmSans font-bold text-xl rounded-md mt-2"
        >
          SUBMIT
        </button>
      </form>
    </div>
  );
}
