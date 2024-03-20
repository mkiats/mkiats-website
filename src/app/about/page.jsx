import Timeline from "@/ui/timeline/timeline";

const Home = () => {
  return (
    <div className="flex overflow-scroll">
      {/* TEXT CONTAINER */}
      <div className="w-1/2 h-screen justify-center flex flex-col">
        <Timeline className="" />
      </div>

      {/* SVG CONTAINER */}
      <div className="w-1/2 h-screen sticky"></div>
    </div>
  );
};

export default Home;
