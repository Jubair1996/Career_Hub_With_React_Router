import PropTypes from "prop-types";
import { AiOutlineDollar } from "react-icons/ai";
import { GrLocation } from "react-icons/gr";
import { Link } from "react-router-dom";
const AppliedJob = ({ applied }) => {
  const {
    id,
    logo,
    job_title,
    company_name,
    remote_or_onsite,
    job_type,
    location,
    salary
  } = applied;
  return (
    <div>
      <div className="border rounded px-10 mb-4 py-6 space-y-3 flex justify-between items-center">
        <div className="flex justify-center items-center gap-10">
          <div className="bg-gray-200 p-24 rounded-lg">
            <img src={logo} alt="" />
          </div>
          <div className="space-y-3">
            <h1 className="text-2xl font-semibold">{job_title}</h1>
            <h2 className="text-xl font-medium">{company_name}</h2>
            <div className="flex items-center gap-4">
              <button className="border font-semibold text-xl border-[#7E90FE] rounded px-4 py-2 text-[#9873FF]">
                {remote_or_onsite}
              </button>
              <button className="border font-semibold text-xl border-[#7E90FE] rounded px-4 py-2 text-[#9873FF]">
                {job_type}
              </button>
            </div>
            <div className="flex items-start gap-4">
              <div className="flex items-center gap-2">
                <GrLocation></GrLocation>
                <p>{location}</p>
              </div>
              <div className="flex items-center gap-2">
                <AiOutlineDollar></AiOutlineDollar>
                <p>Salary: {salary}</p>
              </div>
            </div>
          </div>
        </div>
        <Link to={`/job/${id}`}>
          <button className=" font-semibold text-xl bg-gradient-to-r from-[#7E90FE] to-[#9873FF] rounded px-4 py-2 text-white">
            View Details
          </button>
        </Link>
      </div>
    </div>
  );
};
AppliedJob.propTypes = {
  applied: PropTypes.object.isRequired,
};
export default AppliedJob;
