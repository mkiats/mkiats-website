const TimelineListItem = ({ job }) => {
  const { order, jobTitle, jobDesc, jobDuration, employerOrganisation } = job;

  return (
    <div className="w-2/3 flex flex-col">
      {/* JOB TITLE */}
      <div className="bg-white p-3 font-semibold rounded-b-lg rounded-s-lg">
        {jobTitle}
      </div>
      {/* JOB DESC */}
      <div className="p-3 text-sm italic">{jobDesc}</div>
      {/* JOB DATE */}
      <div className="p-3 text-red-400 text-sm font-semibold">
        {jobDuration}
      </div>
      {/* JOB COMPANY */}
      <div className="p-1 rounded bg-white text-sm font-semibold w-fit">
        {employerOrganisation}
      </div>
    </div>
  );
};

export default TimelineListItem;
