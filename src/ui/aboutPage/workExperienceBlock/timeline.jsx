import { workExperience } from "@/lib/data";
import TimelineListSegment from "./timelineListSegment/timelineListSegment";

const Timeline = () => {
  return (
    <div className="flex flex-col items-center">
      {/* TIMELINE TITLE */}
      <h1 className="text-2xl font-bold">Professional summary</h1>
      {/* TIMELINE LIST */}
      {workExperience.map((element, index) => (
        <TimelineListSegment job={element} index={index} key={element.order} />
      ))}
    </div>
  );
};

export default Timeline;
