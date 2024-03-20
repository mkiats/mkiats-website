import Timeline from "@/ui/timeline/timeline";

const Home = () => {
  return (
    <div className="flex h-full overflow-scroll">
      {/* TEXT CONTAINER */}
      <div className="w-1/2 justify-center flex flex-col">
        <div className="">EDUCATION</div>
        <Timeline className="" />
      </div>

      {/* SVG CONTAINER */}
      <div className="w-1/2 sticky"></div>
    </div>
  );
};

export default Home;
