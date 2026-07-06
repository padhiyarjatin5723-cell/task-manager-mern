import { Oval } from "react-loader-spinner";

function Loader() {
  return (
    <div className="flex justify-center items-center h-screen">
      <Oval
        height={60}
        width={60}
        color="#2563eb"
        secondaryColor="#93c5fd"
        strokeWidth={5}
        strokeWidthSecondary={5}
      />
    </div>
  );
}

export default Loader;