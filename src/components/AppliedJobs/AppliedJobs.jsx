import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { getStoredJobApplication } from "../../utilities/localstorage";
import AppliedJob from "../AppliedJob/AppliedJob";


const AppliedJobs = () => {
    const jobs = useLoaderData();
    const [appliedJobs, setAppliedJobs] = useState([]);
    <div className="flex justify-end">
        <details className="dropdown my-6">
            <summary className="m-1 btn">open or close</summary>
            <ul className="p-2 shadow menu dropdown-content z-[1] bg-base-100 rounded-box w-52">
                <li><a>Item 1</a></li>
                <li><a>Item 2</a></li>
            </ul>
        </details>
        </div>
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
           <div>
            {
                appliedJobs.map(applied => <AppliedJob key={applied.id}  applied={applied}></AppliedJob>)
            }
           </div>
        </div>
    );
};

export default AppliedJobs;