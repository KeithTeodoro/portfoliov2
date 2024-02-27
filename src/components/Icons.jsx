export default function Icons({ src, url }) {
  const openTab = () => {
    window.open(url, "_blank");
  };

  return (
    <div
      className="circle bg-slate-50 w-[2.5rem] h-[2.5rem] grid place-items-center rounded-full cursor-pointer"
      onClick={openTab}
    >
      <img src={src} />
    </div>
  );
}
