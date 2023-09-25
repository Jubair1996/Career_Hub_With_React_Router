import PropTypes from 'prop-types';
import { GrLocation } from "react-icons/gr";
import { AiOutlineDollar } from "react-icons/ai";
const Job = ({job}) => {
    const {logo,job_title,company_name,remote_or_onsite,job_type,location,salary} = job;
    return (
        <div className='border rounded px-10 py-6 space-y-3'>
            <img src={logo} alt="" />
            <h1 className='text-2xl font-semibold'>{job_title}</h1>
            <h2 className='text-xl font-medium'>{company_name}</h2>
            <div className='flex items-center gap-4'>
            <button className='border font-semibold text-xl border-[#7E90FE] rounded px-4 py-2 text-[#9873FF]'>{remote_or_onsite}</button>
            <button className='border font-semibold text-xl border-[#7E90FE] rounded px-4 py-2 text-[#9873FF]'>{job_type}</button>
            </div>
            <div className='flex items-start gap-4'>
                <div className='flex items-center gap-2'>
                    <GrLocation></GrLocation>
                    <p>{location}</p>
                </div>
                <div className='flex items-center gap-2'>
                    <AiOutlineDollar></AiOutlineDollar>
                    <p>Salary: {salary}</p>
                </div>
            </div>
            <button className=' font-semibold text-xl bg-gradient-to-r from-[#7E90FE] to-[#9873FF] rounded px-4 py-2 text-white'>View Details</button>
        </div>
    );
};
Job.propTypes = {
    job: PropTypes.object.isRequired,
  };
export default Job;