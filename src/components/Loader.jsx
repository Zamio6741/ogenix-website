import logo from "../assets/logos/ogenix-logo.png";

export default function Loader() {
  return (
    <div className="fixed inset-0 bg-[#031B4E] flex flex-col items-center justify-center z-[9999]">

      <img
        src={logo}
        alt="Ogenix"
        className="w-28 animate-pulse"
      />

      <h2 className="text-white text-2xl font-bold mt-6">
        OGENIX TECHNOLOGIES
      </h2>

      <div className="mt-8 w-56 h-2 bg-white/20 rounded-full overflow-hidden">

        <div className="h-full bg-cyan-400 animate-[loading_2s_linear_infinite]" />

      </div>

    </div>
  );
}