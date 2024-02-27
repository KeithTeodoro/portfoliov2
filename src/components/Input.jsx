import { forwardRef } from "react";

const Input = forwardRef(function Input({ placeholder, textarea, type }, ref) {
  if (textarea) {
    return (
      <textarea
        required
        ref={ref}
        type="text"
        placeholder={placeholder}
        className="bg-transparent border-b-[1px] text-lg border-customColorOne text-customColorOne font-ibmSans placeholder-customColorOne resize-none"
      />
    );
  }
  return (
    <input
      ref={ref}
      type={type}
      placeholder={placeholder}
      className="bg-transparent border-b-[1px] text-lg border-customColorOne text-customColorOne font-ibmSans placeholder-customColorOne"
      required
    />
  );
});

export default Input;
