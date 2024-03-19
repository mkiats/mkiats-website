import TimelineListItem from "./timelineListItem/timelineListItem";
import workExperience from "@/lib/data";

const Timeline = () => {
  return (
    <div className="h-full w-full flex flex-col items-center">
      {/* TIMELINE TITLE */}
      <h1 className="text-2xl font-bold">WORKING EXPERIENCE</h1>
      {/* TIMELINE LIST */}
      <div className="flex h-1/3 w-full">
        {/* TIMELINE LIST ITEM */}
        <div className="flex-1 flex p-4 justify-end">
          <TimelineListItem />
        </div>
        {/* TIMELINE LIST ITEM */}
        <div className="flex-2 p-4 flex justify-center">
          <div className="w-1 bg-gray-500 relative">
            <div className="w-5 h-5 ring-4 rounded-full ring-red-500 bg-white absolute -left-2"></div>
          </div>
        </div>
        {/* TIMELINE LIST ITEM */}
        <div className="flex-1 p-4 flex justify-start">
          <TimelineListItem />
        </div>
      </div>
    </div>
  );
};

export default Timeline;
