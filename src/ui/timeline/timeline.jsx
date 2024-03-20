import { workExperience } from "@/lib/data";
import TimelineListSegment from "./timelineListSegment/timelineListSegment";

const Timeline = () => {
  return (
    <div className="h-full w-full flex flex-col items-center">
      {/* TIMELINE TITLE */}
      <h1 className="text-2xl font-bold p-4">WORKING EXPERIENCE</h1>
      {/* TIMELINE LIST */}
      {workExperience.map((element, index) => (
        <TimelineListSegment job={element} index={index} key={element.index} />
      ))}
    </div>
  );
};

export default Timeline;
