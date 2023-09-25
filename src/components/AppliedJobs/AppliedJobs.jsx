import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { getStoredJobApplication } from "../../utilities/localstorage";
import AppliedJob from "../AppliedJob/AppliedJob";


const AppliedJobs = () => {
    const jobs = useLoaderData();
    const [appliedJobs, setAppliedJobs] = useState([]);
    useEffect(() =>{
        const storedJobIds = getStoredJobApplication();
        if(jobs.length > 0){
            // const jobApplied = jobs.filter(job => storedJobIds.includes(job.id))
            const jobApplied = [];
            for(const id of storedJobIds){
                const job = jobs.find(job => job.id === id)
                if(job){
                jobApplied.push(job)
                }
            }
            // console.log(jobs, storedJobIds, jobApplied);
            setAppliedJobs(jobApplied);
        } 
    },[jobs])
    return (
        <div>
           <h1>Applied Jobs:  {appliedJobs.logo}</h1>
           <div>
            {
                appliedJobs.map(applied => <AppliedJob key={applied.id} applied={applied}></AppliedJob>)
            }
           </div>
        </div>
    );
};

export default AppliedJobs;