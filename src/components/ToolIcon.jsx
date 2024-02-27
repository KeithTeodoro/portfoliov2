export default function ToolIcon({ icon, text }) {
  return (
    <p className="flex flex-col items-center font-bold font-ibmSans text-center">
      <img src={icon} />
      {text}
    </p>
  );
}
