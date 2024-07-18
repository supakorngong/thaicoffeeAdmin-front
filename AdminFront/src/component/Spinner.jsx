import { LoaderIcon } from "../Icon/Icon";

export default function Spinner({ transparent }) {
  return (
    <>
      {/* backdrop */}
      <div className={` fixed inset-0 bg-white z-40 ${transparent ? "opacity-70" : ""}`}></div>
      <div className="fixed inset-0 flex justify-center items-center z-50 animate-spin">
        <LoaderIcon className="fill-blue-600" />
      </div>
      {/* spinner */}
    </>
  );
}
