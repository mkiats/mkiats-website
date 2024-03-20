import TimelineListItem from "../timelineListItem/timelineListItem";

const TimelineListSegment = ({ job, index }) => {
  return (
    <div className="flex h-full w-full">
      {/* TIMELINE LIST ITEM */}
      <div className="flex-1 flex p-4 justify-end">
        {parseInt(index) % 2 === 0 && <TimelineListItem job={job} />}
      </div>
      {/* TIMELINE LIST ITEM */}
      <div className="flex-2 flex justify-center">
        <div className="w-1 bg-gray-500 relative">
          <div className="w-5 h-5 ring-4 rounded-full ring-red-500 bg-white absolute -left-2"></div>
        </div>
      </div>
      {/* TIMELINE LIST ITEM */}
      <div className="flex-1 p-4 flex justify-start">
        {parseInt(index) % 2 === 1 && <TimelineListItem job={job} />}
      </div>
    </div>
  );
};

export default TimelineListSegment;
